import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

import useGameStore from "@/stores/useGameStore";

export default function Navbar() {
  const newGame = useGameStore((state) => state.newGame);

  return (
    <nav className="flex justify-between items-center">
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
        Memory Game
      </h1>

      <div className="flex items-center gap-2">
        <ThemeSwitcher />

        <Button onClick={newGame}>New game</Button>
      </div>
    </nav>
  );
}
