import { useEffect } from "react";

import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/Navbar";
import CardList from "@/components/CardList";

import useGameStore from "./stores/useGameStore";

export default function App() {
  const newGame = useGameStore((state) => state.newGame);

  useEffect(() => {
    newGame();
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="max-w-6xl mx-auto p-4">
        <Navbar />

        <CardList />
      </main>
    </ThemeProvider>
  );
}
