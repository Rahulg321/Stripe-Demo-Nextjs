"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { useCallback } from "react";
import { Button } from "./ui/button";
import { Game } from "@/lib/products";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

type CheckoutDialogProps = {
  game: Game;
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const CheckoutDialog = ({ game }: CheckoutDialogProps) => {
  const fetchClientSecret = useCallback(() => {
    return fetch("/api/embedded-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: game.name, price: game.price, quantity: 1 }),
    })
      .then((res) => res.json())
      .then((data) => data.client_secret);
  }, [game.name, game.price]);

  const options = { fetchClientSecret };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-500 w-full hover:bg-red-400">Buy Now</Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Buy {game.name}</DialogTitle>
          <DialogDescription>{game.description}</DialogDescription>
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

export default CheckoutDialog;
