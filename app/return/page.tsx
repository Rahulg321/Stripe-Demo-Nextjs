import ProductConfirmation from "@/components/ProductConfirmation";
import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import { get } from "http";
import Link from "next/link";
import React, { Suspense } from "react";

async function getSession(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  return session;
}

async function getCustomer(customerId: string) {
  if (!customerId) return null;

  const customer = await stripe.customers.retrieve(customerId);
  return customer;
}

const ProductConfirmationPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const sessionId = searchParams.session_id || "";

  const currentCheckoutSession = await getSession(sessionId as string);
  const customer = await getCustomer(currentCheckoutSession.customer as string);

  console.log("current checkout session", currentCheckoutSession);
  console.log("customer", customer);

  if (currentCheckoutSession.status === "open") {
    return (
      <section className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-400">
            Payment Failed
          </h2>

          <Button asChild>
            <Link href={"/"}>Return to Home</Link>
          </Button>
        </div>
      </section>
    );
  }

  if (currentCheckoutSession.status === "complete") {
    return (
      <section className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            Successfully Done!!!
          </h2>
          <p>Payment Complete</p>
          <p>
            Your Stripe Customer id is {JSON.stringify(customer)}
            {currentCheckoutSession.customer as string}
          </p>

          <Button asChild>
            <Link href={"/"}>Return to Home</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <h2>Something Went Wrong......</h2>
      <Button asChild>
        <Link href={"/"}>Return to Home</Link>
      </Button>
    </section>
  );
};

export default ProductConfirmationPage;
