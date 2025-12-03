import useGameStore from "@/stores/useGameStore";

export default function Moves() {
  const moves = useGameStore((state) => state.moves);

  return (
    <section className="flex justify-between items-center w-full sm:max-w-[200px] mx-auto bg-muted px-4 py-2 rounded font-semibold">
      <span>Moves</span>

      <span>{moves}</span>
    </section>
  );
}
