export type Game = {
  id: string;
  name: string;
  description: string;
  price: number;
};

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
