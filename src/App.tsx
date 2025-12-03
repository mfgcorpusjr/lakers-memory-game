import { useEffect } from "react";

import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/Navbar";
import Moves from "@/components/Moves";
import CardList from "@/components/CardList";

import useGameStore from "./stores/useGameStore";

export default function App() {
  const newGame = useGameStore((state) => state.newGame);

  useEffect(() => {
    newGame();
  }, []);

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
