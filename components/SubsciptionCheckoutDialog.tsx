"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Subscription } from "@/lib/products";
import React, { useCallback } from "react";
import { Button } from "./ui/button";
import { Game } from "@/lib/products";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

type SubsciptionCheckoutDialogProps = {
  product: Subscription;
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const SubsciptionCheckoutDialog = ({
  product,
}: SubsciptionCheckoutDialogProps) => {
  const fetchClientSecret = useCallback(() => {
    return fetch("/api/checkout-subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId: product.priceId,
        name: product.name,
        price: product.price,
      }),
    })
      .then((res) => res.json())
      .then((data) => data.client_secret);
  }, [product.name, product.price, product.priceId]);

  const options = { fetchClientSecret };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-violet-500 w-full hover:bg-violet-400">
          Buy Now
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Buy {product.name}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>
        <div className="w-full">
          <div id="checkout">
            <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubsciptionCheckoutDialog;
