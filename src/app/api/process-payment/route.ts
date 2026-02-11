import { NextRequest, NextResponse } from "next/server";
import { squareClient } from "@/lib/square";
import { randomUUID } from "crypto";

function toBigInt(dollars: number): bigint {
  return BigInt(Math.round(dollars * 100));
}

// Helper to safely convert any BigInt values to numbers for JSON serialization
function sanitize(obj: unknown): unknown {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === "bigint") return Number(obj);
  if (Array.isArray(obj)) return obj.map(sanitize);
  if (typeof obj === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
      result[key] = sanitize(value);
    }
    return result;
  }
  return obj;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sourceId, cartItems, amounts, contactInfo, note } = body;

    if (!sourceId) {
      return NextResponse.json(
        { error: "Payment source is required" },
        { status: 400 }
      );
    }

    // Get location
    const locResponse = await squareClient.locations.list();
    const locationId = locResponse?.locations?.[0]?.id;

    if (!locationId) {
      return NextResponse.json(
        { error: "No location configured" },
        { status: 500 }
      );
    }

    // Build line items for the order
    const lineItems = cartItems.map(
      (item: { name: string; quantity: number; price: number }) => ({
        name: item.name,
        quantity: String(item.quantity),
        basePriceMoney: {
          amount: toBigInt(item.price),
          currency: "CAD",
        },
      })
    );

    // Add bag fee as a line item if > 0
    if (amounts.bagFee > 0) {
      lineItems.push({
        name: "Bag Fee",
        quantity: "1",
        basePriceMoney: {
          amount: toBigInt(amounts.bagFee),
          currency: "CAD",
        },
      });
    }

    // Create order in Square
    const orderResponse = await squareClient.orders.create({
      order: {
        locationId,
        lineItems,
        taxes: [
          {
            name: "GST",
            percentage: "5.0",
            scope: "ORDER",
          },
        ],
        serviceCharges:
          amounts.tip > 0
            ? [
                {
                  name: "Tip",
                  amountMoney: {
                    amount: toBigInt(amounts.tip),
                    currency: "CAD",
                  },
                  calculationPhase: "TOTAL_PHASE",
                },
              ]
            : [],
      },
      idempotencyKey: randomUUID(),
    });

    const order = orderResponse?.order;

    if (!order?.id) {
      return NextResponse.json(
        { error: "Failed to create order" },
        { status: 500 }
      );
    }

    // Use the order's total (as calculated by Square) for the payment
    // This ensures the payment amount always matches the order total
    const orderTotal = order.totalMoney;

    // Process payment
    const paymentResponse = await squareClient.payments.create({
      sourceId,
      idempotencyKey: randomUUID(),
      amountMoney: {
        amount: orderTotal?.amount ?? toBigInt(amounts.total),
        currency: orderTotal?.currency ?? "CAD",
      },
      orderId: order.id,
      locationId,
      buyerEmailAddress: contactInfo.email || undefined,
      note: `Order for ${contactInfo.firstName} ${contactInfo.lastName}`,
    });

    const payment = paymentResponse?.payment;

    if (!payment) {
      return NextResponse.json(
        { error: "Payment processing failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      payment: sanitize({
        id: payment.id,
        status: payment.status,
        receiptUrl: payment.receiptUrl,
        totalMoney: payment.totalMoney,
        createdAt: payment.createdAt,
        orderId: payment.orderId,
        cardDetails: payment.cardDetails
          ? {
              card: {
                last4: payment.cardDetails.card?.last4,
                cardBrand: payment.cardDetails.card?.cardBrand,
              },
              status: payment.cardDetails.status,
            }
          : null,
      }),
      order: sanitize({
        id: order.id,
        state: order.state,
        createdAt: order.createdAt,
        totalMoney: order.totalMoney,
        lineItems: order.lineItems?.map((li) => ({
          name: li.name,
          quantity: li.quantity,
          totalMoney: li.totalMoney,
        })),
      }),
    });
  } catch (error: unknown) {
    console.error("Payment processing error:", error);

    // Extract Square API errors
    const sqErr = error as { errors?: Array<{ detail: string }> };
    if (sqErr?.errors) {
      return NextResponse.json(
        { error: "Payment failed", details: sqErr.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
