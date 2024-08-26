"use client";

import Image from "next/image";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib/convertSubcurrency";
import CheckoutPage from "@/components/CheckoutPage";
import { games, subscriptions, testSubscriptions } from "@/lib/products";
import GameCard from "@/components/GameCard";
import SubscriptionCard from "@/components/SubscriptionCard";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Games to Buy
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game) => {
            return (
              <div key={game.id}>
                <GameCard game={game} />
              </div>
            );
          })}
        </div>

        <h1>Our Available Subscriptions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testSubscriptions.map((sub) => {
            return (
              <div key={sub.id}>
                <SubscriptionCard product={sub} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
