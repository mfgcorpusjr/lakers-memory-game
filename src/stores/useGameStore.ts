import { create } from "zustand";

import { type TCard } from "@/types";
import { images } from "@/data";

type GameStore = {
  cards: TCard[];
  selectedCard1?: TCard;
  selectedCard2?: TCard;
  moves: number;
  isDisabled?: boolean;

  newGame: () => void;
  selectCard: (card: TCard) => void;
  setIsDisabled: (isDisabled: boolean) => void;
  correctTurn: () => void;
  incorrectTurn: () => void;
};

const useGameStore = create<GameStore>((set, get) => ({
  cards: [],

  moves: 0,

  newGame: () => {
    const cards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ id: index + 1, image: card, isMatched: false }));

    set({
      cards,
      selectedCard1: undefined,
      selectedCard2: undefined,
      moves: 0,
      isDisabled: false,
    });
  },

  selectCard: (card: TCard) => {
    set((state) =>
      state.selectedCard1 ? { selectedCard2: card } : { selectedCard1: card }
    );
  },

  setIsDisabled: (isDisabled: boolean) => {
    set({ isDisabled });
  },

  correctTurn: () => {
    set((state) => ({
      cards: state.cards.map((card) =>
        card.image === state.selectedCard1?.image
          ? { ...card, isMatched: true }
          : card
      ),
      selectedCard1: undefined,
      selectedCard2: undefined,
      moves: state.moves + 1,
      isDisabled: false,
    }));
  },

  incorrectTurn: () => {
    set((state) => ({
      selectedCard1: undefined,
      selectedCard2: undefined,
      moves: state.moves + 1,
      isDisabled: false,
    }));
  },
}));

export default useGameStore;
