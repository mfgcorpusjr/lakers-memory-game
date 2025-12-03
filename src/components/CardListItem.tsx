import { Card, CardContent } from "@/components/ui/card";

import { type TCard } from "@/types";

type CardListItemProps = {
  card: TCard;
};

export default function CardListItem({ card }: CardListItemProps) {
  return (
    <Card className="p-2">
      <CardContent className="p-0">
        <img src={card.image} alt="Lakers Player" />
      </CardContent>
    </Card>
  );
}
