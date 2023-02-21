import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MagicCard } from "../../types/mtg-api";
import type { RootState } from "..";

interface DeckState {
  cardCount: {[key: string]: number};
  cards: {[key: string]: MagicCard};
}

const initialState: DeckState= {
  cardCount: {},
  cards: {}
};

export const deckSlice = createSlice({
  name: "deck",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<MagicCard>) => {
      const { id } = action.payload;
      const cardCount = state.cardCount[id];
      if(!cardCount) {
        state.cardCount[id] = 1;
        state.cards[id] = action.payload;

        return
      }

      if ( cardCount < 4 ) {
        state.cardCount[id] += 1;
      }
    },
    removeCard: (state, action: PayloadAction<MagicCard>) => {
      const { id } = action.payload;
      const cardCount = state.cardCount[id];
      
      if ( !cardCount || cardCount <= 1 ){
        delete state.cardCount[id]
        delete state.cards[id]
        return
      }

      state.cardCount[id] -= 1;
    }
  },
});

export const { addCard, removeCard } = deckSlice.actions;


export const getDeckcardCount = (state: RootState) => state.deck.cardCount;

export default deckSlice.reducer;
