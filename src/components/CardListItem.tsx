import clsx from "clsx";

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
    <Card className="p-2 cursor-pointer" onClick={handleSelect}>
      <CardContent className="p-0 h-full">
        {/* Flip wrapper (needs fixed aspect ratio + full height) */}
        <div className="relative w-full aspect-3/4 perspective">
          <div
            className={clsx(
              "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d",
              {
                "rotate-y-180": isFlipped,
              }
            )}
          >
            <div className="absolute inset-0 w-full h-full backface-hidden flex items-center justify-center">
              <img
                src="/lakers.svg"
                alt="Lakers Logo"
                className="w-full h-full object-center"
              />
            </div>

            <div className="absolute inset-0 w-full h-full rotate-y-180 backface-hidden flex items-center justify-center">
              <img
                src={card.image}
                alt="Player"
                className="w-full h-full object-center"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
