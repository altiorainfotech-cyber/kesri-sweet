"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HeaderOther from "@/components/HeaderOther";
import Footer from "@/components/Footer";

interface OrderData {
  payment: {
    id: string;
    status: string;
    receiptUrl: string;
    totalMoney: { amount: number; currency: string };
    createdAt: string;
    orderId: string;
    cardDetails: {
      card: { last4: string; cardBrand: string };
      status: string;
    } | null;
  };
  order: {
    id: string;
    state: string;
    createdAt: string;
    totalMoney: { amount: number; currency: string };
    lineItems: Array<{
      name: string;
      quantity: string;
      totalMoney: { amount: number; currency: string };
    }>;
  };
  contactInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  cartItems: Array<{
    id: number;
    name: string;
    quantity: number;
    price: number;
    weight: string;
  }>;
  amounts: {
    subtotal: number;
    bagFee: number;
    tax: number;
    tip: number;
    total: number;
  };
  pickupTime: string;
  note: string;
}

export default function OrderConfirmationPage() {
  const router = useRouter();
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem("kesri-order-confirmation");
    if (!stored) {
      router.push("/order");
      return;
    }
    setOrderData(JSON.parse(stored));

    // Auto-hide notification after 5 seconds
    const timer = setTimeout(() => setShowNotification(false), 5000);
    return () => clearTimeout(timer);
  }, [router]);

  if (!orderData) {
    return (
      <>
        <HeaderOther />
        <main className="min-h-screen flex items-center justify-center bg-white">
          <div className="animate-spin h-8 w-8 border-4 border-orange-500 border-t-transparent rounded-full"></div>
        </main>
        <Footer />
      </>
    );
  }

  const { payment, order, contactInfo, cartItems, amounts, pickupTime } =
    orderData;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      <HeaderOther />

      {/* Payment Confirmation Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3 max-w-md">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm">Payment Successful!</p>
              <p className="text-xs opacity-90">
                Your order #{order.id?.slice(-8)} has been confirmed
              </p>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="ml-2 text-white hover:opacity-75"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <main className="min-h-screen bg-white py-12">
        <div className="max-w-2xl mx-auto px-6">
          {/* Success Header */}
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="font-[family-name:var(--font-island-moments)] text-5xl text-black mb-2">
              Order Confirmed!
            </h1>
            <p className="text-gray-600">
              Thank you, {contactInfo.firstName}! Your order has been placed
              successfully.
            </p>
          </div>

          {/* Order Details Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
            <h2 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FF9900] rounded-tl-sm rounded-br-sm"></span>
              Order Details
            </h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Order ID</span>
                <span className="text-black font-mono text-xs">
                  {order.id}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status</span>
                <span className="text-green-600 font-medium">
                  {payment.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date</span>
                <span className="text-black">
                  {formatDate(payment.createdAt)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pickup</span>
                <span className="text-black">{pickupTime}</span>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
            <h2 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FF9900] rounded-tl-sm rounded-br-sm"></span>
              Items Ordered
            </h2>

            <div className="space-y-3">
              {cartItems.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center text-sm"
                >
                  <div className="flex gap-2 text-black">
                    <span className="font-medium">{item.quantity}x</span>
                    <span>{item.name}</span>
                    {item.weight !== "Regular" && (
                      <span className="text-gray-500 text-xs">
                        ({item.weight})
                      </span>
                    )}
                  </div>
                  <span className="text-black">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-300 mt-4 pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${amounts.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Bag Fee</span>
                <span>${amounts.bagFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Taxes (GST)</span>
                <span>${amounts.tax.toFixed(2)}</span>
              </div>
              {amounts.tip > 0 && (
                <div className="flex justify-between text-gray-600">
                  <span>Tip</span>
                  <span>${amounts.tip.toFixed(2)}</span>
                </div>
              )}
              <div className="border-t border-dashed border-gray-300 pt-2">
                <div className="flex justify-between font-bold text-black text-lg">
                  <span>Total</span>
                  <span>${amounts.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
            <h2 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FF9900] rounded-tl-sm rounded-br-sm"></span>
              Payment Information
            </h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Payment ID</span>
                <span className="text-black font-mono text-xs">
                  {payment.id}
                </span>
              </div>
              {payment.cardDetails && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Card</span>
                  <span className="text-black">
                    {payment.cardDetails.card.cardBrand} ****
                    {payment.cardDetails.card.last4}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">Amount Charged</span>
                <span className="text-black font-bold">
                  ${(payment.totalMoney.amount / 100).toFixed(2)}{" "}
                  {payment.totalMoney.currency}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status</span>
                <span className="inline-flex items-center gap-1 text-green-600 font-medium">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {payment.cardDetails?.status || payment.status}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FF9900] rounded-tl-sm rounded-br-sm"></span>
              Contact
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Name</span>
                <span className="text-black">
                  {contactInfo.firstName} {contactInfo.lastName}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email</span>
                <span className="text-black">{contactInfo.email}</span>
              </div>
              {contactInfo.phone && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone</span>
                  <span className="text-black">{contactInfo.phone}</span>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {payment.receiptUrl && (
              <a
                href={payment.receiptUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-black text-white font-medium py-3 rounded-tl-lg rounded-br-lg hover:bg-gray-800 transition-colors"
              >
                View Receipt
              </a>
            )}
            <button
              onClick={() => router.push("/order")}
              className="flex-1 bg-[#FFCC80] hover:bg-[#ffb74d] text-black font-medium py-3 rounded-tl-lg rounded-br-lg transition-colors"
            >
              Order More
            </button>
          </div>

          {/* Pickup Reminder */}
          <div className="mt-8 p-4 bg-orange-50 border border-orange-200 rounded-xl text-center">
            <p className="text-orange-800 text-sm font-medium">
              Remember to pick up your order at
            </p>
            <p className="text-orange-900 font-bold mt-1">
              Kesari Indian Sweets & Eats
            </p>
            <p className="text-orange-700 text-sm">
              2-1990 152 Street Surrey BC V4A4N4 CA
            </p>
            <p className="text-orange-800 text-sm mt-1 font-medium">
              {pickupTime}
            </p>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
