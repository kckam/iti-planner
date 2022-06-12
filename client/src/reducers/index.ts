import { combineReducers } from "redux";

const defaultState = [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I Want it That Way", duration: "1:45" },
];

const CATEGORIES = [{}];

const cardsReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case "REMOVE_CARD":
            return state;
        default:
            return state;
    }
};

const cards1Reducer = () => {
    return defaultState;
};

const toDosReducer = (state: any = [], action: any) => {
    return action.payload || [];
};

export default combineReducers({
    cards: cardsReducer,
    cards1: cards1Reducer,
    todos: toDosReducer,
});
