import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import reducers from "./reducers";
import thunk from "redux-thunk";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

export const store = configureStore({
    reducer: reducers,
    middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
