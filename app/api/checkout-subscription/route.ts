import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { priceId, price } = await req.json();

    if (!priceId || !price) {
      return NextResponse.json(
        { error: "Price ID and price are required" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      payment_method_types: ["card"],
      mode: "subscription",
      metadata: {
        // userId: session.userId -> get the current auth session,
        userId: "12345",
      },
      line_items: [
        {
          price: priceId, // Use the predefined price ID for the subscription
          quantity: 1,
        },
      ],
      return_url: `${req.headers.get(
        "origin"
      )}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({
      id: session.id,
      client_secret: session.client_secret,
    });
  } catch (error: any) {
    console.error("An error occurred while creating session:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
