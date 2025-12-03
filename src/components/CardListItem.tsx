import { Card, CardContent } from "@/components/ui/card";

import { type TCard } from "@/types";

type CardListItemProps = {
  card: TCard;
};

export default function CardListItem({ card }: CardListItemProps) {
  return (
    <Card className="p-2">
      <CardContent className="p-0">
        <img
          src="/lakers.svg"
          alt="Lakers Logo"
          className="w-full h-52 sm:h-64 object-center mx-auto"
        />

        <img
          src={card.image}
          alt="Lakers Player"
          className="w-full h-52 sm:h-64 object-center mx-auto"
        />
      </CardContent>
    </Card>
  );
}
