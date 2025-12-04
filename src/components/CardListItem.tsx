import { Card, CardContent } from "@/components/ui/card";

import useGameStore from "@/stores/useGameStore";
import { type TCard } from "@/types";

type CardListItemProps = {
  card: TCard;
};

export default function CardListItem({ card }: CardListItemProps) {
  const selectedCard1 = useGameStore((state) => state.selectedCard1);
  const selectedCard2 = useGameStore((state) => state.selectedCard2);
  const isDisabled = useGameStore((state) => state.isDisabled);
  const selectCard = useGameStore((state) => state.selectCard);

  const isFlipped =
    card.id === selectedCard1?.id ||
    card.id === selectedCard2?.id ||
    card.isMatched;

  const handleSelect = () => {
    if (isFlipped || isDisabled) return;
    selectCard(card);
  };

  return (
    <Card className="p-2" onClick={handleSelect}>
      <CardContent className="p-0">
        {isFlipped ? (
          <img
            src={card.image}
            alt="Lakers Player"
            className="aspect-3/4 object-center mx-auto animate-fade-in-from-top"
          />
        ) : (
          <img
            src="/lakers.svg"
            alt="Lakers Logo"
            className="aspect-3/4 object-center mx-auto"
          />
        )}
      </CardContent>
    </Card>
  );
}
