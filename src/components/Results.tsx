import { useState, useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import useGameStore from "@/stores/useGameStore";

export default function Results() {
  const [isModal, setIsModal] = useState(false);

  const cards = useGameStore((state) => state.cards);
  const newGame = useGameStore((state) => state.newGame);

  const isWinner = cards.length > 0 && cards.every((card) => card.isMatched);

  useEffect(() => {
    if (isWinner) {
      setTimeout(() => {
        setIsModal(true);
      }, 500);
    }
  }, [isWinner]);

  const handlePlayAgain = () => {
    setIsModal(false);
    newGame();
  };

  return (
    <Dialog open={isModal} onOpenChange={setIsModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>You Did It! Great Memory!</DialogTitle>
          <DialogDescription>
            You matched every card and conquered the challenge. Feeling brave
            enough to go again?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <Button onClick={handlePlayAgain}>Play Again</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
