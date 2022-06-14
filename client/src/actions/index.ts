import axios from "axios";
import localforage from "localforage";

export const selectCard = (card: any) => {
  return {
    type: "CARD_SELECTED",
    payload: card,
  };
};

export const removeCard = () => {
  return {
    type: "REMOVE_CARD",
  };
};

export const addToCart = (id: string | number) => {
  return {
    type: "ADD_TO_CART",
    payload: id,
  };
};

export const loadExistingCards = () => {
  return async (dispatch: any, getState: any) => {
    let data = await localforage.getItem("cards");

    dispatch({
      type: "LOAD_CARDS",
      payload: data,
    });
  };
};

export const nextDay = () => {
  return {
    type: "NEXT_DAY",
  };
};

export const prevDay = () => {
  return {
    type: "PREV_DAY",
  };
};

export const getTodos = () => {
  return async (dispatch: any, getState: any) => {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    dispatch({
      type: "GET_TODOS",
      payload: data,
    });
  };
};
