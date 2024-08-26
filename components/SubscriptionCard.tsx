import { Subscription } from "@/lib/products";
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
import SubsciptionCheckoutDialog from "./SubsciptionCheckoutDialog";

type SubscriptionCardProps = {
  product: Subscription;
};

const SubscriptionCard = ({ product }: SubscriptionCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </CardContent>
      <CardFooter>
        <SubsciptionCheckoutDialog product={product} />
      </CardFooter>
    </Card>
  );
};

export default SubscriptionCard;
