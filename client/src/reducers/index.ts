import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import localforage from "localforage";

const defaultCardsState = [
  {
    label: "a",
    cards: [
      "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
      "https://dummyimage.com/600x400/000/fff",
      "https://dummyimage.com/200x400/000/fff",
    ],
  },
  {
    label: "ad",
    cards: [
      "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
      "https://dummyimage.com/600x400/000/fff",
      "https://dummyimage.com/200x400/000/fff",
    ],
  },
];

interface card {
  active: Boolean;
  cards: string[];
}

const defaultCartsState: card[] = [
  {
    active: true,
    cards: [],
  },
];

const cardsReducer = (state = defaultCardsState, action: any) => {
  switch (action.type) {
    case "REMOVE_CARD":
      return state;
    default:
      return state;
  }
};

const cartReducer = (state = defaultCartsState, action: any) => {
  switch (action.type) {
    case "LOAD_CARDS":
      return (action.payload || defaultCartsState) as card[];
    case "ADD_TO_CART":
      let result = state.map((el) =>
        el.active
          ? { ...el, cards: [...el.cards, action.payload as string] }
          : el
      );
      localforage.setItem("cards", result);
      return result;
    case "NEXT_DAY":
      let nextIndex = state.findIndex((el) => el.active) + 1;

      if (state[nextIndex] === undefined) {
        return [
          ...state.map((el) => ({ ...el, active: false })),
          ...defaultCartsState,
        ];
      }

      return state.map((el, index) => ({
        ...el,
        active: index === nextIndex ? true : false,
      }));
    case "PREV_DAY":
      let prevIndex = state.findIndex((el) => el.active) - 1;
      if (prevIndex < 0) return state;

      if (typeof state[prevIndex] === undefined) {
        return [
          ...state.map((el) => ({ ...el, active: false })),
          ...defaultCartsState,
        ];
      }

      return state.map((el, index) => ({
        ...el,
        active: index === prevIndex ? true : false,
      }));
    default:
      return state;
  }
};

export default combineReducers({
  cards: cardsReducer,
  cart: cartReducer,
});
