import CardListItem from "@/components/CardListItem";

import useGameStore from "@/stores/useGameStore";

export default function CardList() {
  const cards = useGameStore((state) => state.cards);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {cards.map((card) => (
        <CardListItem key={card.id} card={card} />
      ))}
    </section>
  );
}
