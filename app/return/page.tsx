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

const ProductConfirmationPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const sessionId = searchParams.sessionId || "";
  if (sessionId === "" || sessionId === undefined || !sessionId) {
    return;
  }

  const currentCheckoutSession = await getSession(sessionId as string);

  if (currentCheckoutSession.status === "open") {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-red-400">Failure</h2>
        <p>Payment did not work</p>
        <Button asChild>
          <Link href={"/"}>Return to Home</Link>
        </Button>
      </div>
    );
  }

  if (currentCheckoutSession.status === "complete") {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-green-400">
          Successfully Done!!!
        </h2>
        <p>Payment Complete</p>
        <p>
          Your Stripe Customer id is {currentCheckoutSession.customer as string}
        </p>

        <Button asChild>
          <Link href={"/"}>Return to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Return Page after checkout
        </h1>
        {/* might not need it as we are fetching the search params from the url in server component */}
        <Suspense>
          <ProductConfirmation />
        </Suspense>
      </div>
    </section>
  );
};

export default ProductConfirmationPage;
