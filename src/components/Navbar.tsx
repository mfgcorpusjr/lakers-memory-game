import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
        Memory Game
      </h1>

      <div className="flex items-center gap-2">
        <ThemeSwitcher />

        <Button>New game</Button>
      </div>
    </nav>
  );
}
