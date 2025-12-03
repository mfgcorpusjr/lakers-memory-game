import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/lakers.svg" alt="Lakers Logo" className="w-20 h-20" />

        <h1 className="text-xl font-bold tracking-tight">Memory Game</h1>
      </div>

      <Button>New game</Button>
    </nav>
  );
}
