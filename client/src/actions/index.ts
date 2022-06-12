import axios from "axios";

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
