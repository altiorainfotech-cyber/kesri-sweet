import { NextResponse } from "next/server";
import { squareClient } from "@/lib/square";

export async function GET() {
  try {
    const response = await squareClient.locations.list();

    if (!response?.locations || response.locations.length === 0) {
      return NextResponse.json(
        { error: "No locations found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ locationId: response.locations[0].id });
  } catch (error: unknown) {
    console.error("Error fetching locations:", error);
    return NextResponse.json(
      { error: "Failed to fetch location" },
      { status: 500 }
    );
  }
}
