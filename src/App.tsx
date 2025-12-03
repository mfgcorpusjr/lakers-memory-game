import { useEffect } from "react";

import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/Navbar";
import Moves from "@/components/Moves";
import CardList from "@/components/CardList";

import useGameStore from "./stores/useGameStore";

export default function App() {
  const selectedCard1 = useGameStore((state) => state.selectedCard1);
  const selectedCard2 = useGameStore((state) => state.selectedCard2);
  const newGame = useGameStore((state) => state.newGame);
  const setIsDisabled = useGameStore((state) => state.setIsDisabled);
  const correctTurn = useGameStore((state) => state.correctTurn);
  const incorrectTurn = useGameStore((state) => state.incorrectTurn);

  useEffect(() => {
    newGame();
  }, []);

  useEffect(() => {
    if (selectedCard1 && selectedCard2) {
      setIsDisabled(true);

      if (
        selectedCard1.image === selectedCard2.image &&
        selectedCard1.id !== selectedCard2.id
      ) {
        correctTurn();
      } else {
        setTimeout(() => {
          incorrectTurn();
        }, 1000);
      }
    }
  }, [selectedCard1, selectedCard2]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <Navbar />

        <Moves />

        <CardList />
      </main>
    </ThemeProvider>
  );
}
