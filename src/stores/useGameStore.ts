import { create } from "zustand";

import { type TCard } from "@/types";
import { images } from "@/data";

type GameStore = {
  cards: TCard[];
  newGame: () => void;
};

const useGameStore = create<GameStore>((set, get) => ({
  cards: [],

  newGame: () => {
    const cards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ id: index + 1, image: card, isFlipped: false }));

    set({ cards });
  },
}));

export default useGameStore;
