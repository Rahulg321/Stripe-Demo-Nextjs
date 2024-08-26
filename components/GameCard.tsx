import { Game } from "@/lib/products";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CheckoutDialog from "./CheckoutDialog";

type GameCardProps = {
  game: Game;
};

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{game.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{game.description}</p>
        <p>Price: ${game.price}</p>
      </CardContent>
      <CardFooter>
        <CheckoutDialog game={game} />
      </CardFooter>
    </Card>
  );
};

export default GameCard;
