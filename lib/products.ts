export type Game = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export type Subscription = {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  priceId: string;
  features: string[];
};

export const subscriptions: Subscription[] = [
  {
    id: "prod_QjO9zzrdopmnabucpasNX",
    name: "Quarterly Billing",
    description: "Access to all premium features for 3 months",
    duration: 3,
    price: 1.99,
    priceId: "",
    features: ["Unlimited access", "Priority support", "Ad-free experience"],
  },
  {
    id: "prod_QjO9zzrdopmnabucpasNY",
    name: "Annual Billing",
    description: "Full year access with 2 months free",
    duration: 12,
    price: 3.99,
    priceId: "",
    features: [
      "Unlimited access",
      "Priority support",
      "Ad-free experience",
      "Exclusive content",
    ],
  },
  {
    id: "prod_QjO9zzrdopmnabucpasNZ",
    name: "Monthly Billing",
    description: "Flexible month-to-month access",
    duration: 1,
    price: 2.99,
    priceId: "",
    features: ["Unlimited access", "Ad-free experience"],
  },
];
export const testSubscriptions: Subscription[] = [
  {
    id: "prod_QjO9zzrdopmnabucpasNX",
    name: "Quarterly Billing",
    description: "Access to all premium features for 3 months",
    duration: 3,
    price: 1.99,
    priceId: "price_1PrzWhIbE21KKZM9Ji68Xdwn",
    features: ["Unlimited access", "Priority support", "Ad-free experience"],
  },
  {
    id: "prod_QjO9zzrdopmnabucpasNY",
    name: "Annual Billing",
    description: "Full year access with 2 months free",
    duration: 12,
    price: 3.99,
    priceId: "price_1PrzX8IbE21KKZM9E5iroLPx",
    features: [
      "Unlimited access",
      "Priority support",
      "Ad-free experience",
      "Exclusive content",
    ],
  },
  {
    id: "prod_QjO9zzrdopmnabucpasNZ",
    name: "Monthly Billing",
    description: "Flexible month-to-month access",
    duration: 1,
    price: 2.99,
    priceId: "price_1PrzW0IbE21KKZM9HUw2ICyr",
    features: ["Unlimited access", "Ad-free experience"],
  },
];

export const games: Game[] = [
  {
    id: "prod_QjO9zzw7u230NX",
    name: "Cosmic Explorers",
    description:
      "An immersive space exploration game with stunning graphics and challenging missions.",
    price: 1.99,
  },
  {
    id: "prod_QjOfJmmMG1a7ie",
    name: "Medieval Kingdoms",
    description:
      "Build and manage your own medieval kingdom in this strategy-based simulation game.",
    price: 2.99,
  },
  {
    id: "prod_QjOhgvJgBuaHVU",
    name: "God of War 2018",
    description:
      "An epic fantasy game set in Norse Mythology which follows the god of war",
    price: 3,
  },
  {
    id: "prod_QjchdyapcBcxQeDfavb",
    name: "Elden Ring",
    description: "A Dark Souls based game that is very difficult to complete",
    price: 1.99,
  },
];
