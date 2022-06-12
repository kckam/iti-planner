import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTodos } from "./actions";
import Home from "./page/Home";
import GlobalStyles from "./components/styles/Global";
// import Home2 from "./page/Home2";
import { useAppSelector } from "./hooks/hooks";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const darkTheme = {
    body: "#000",
    text: "#fff",
};
const lightTheme = {
    body: "#fff",
    text: "#000",
};

function App() {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch<any>(getTodos());
    // }, []);

    return (
        <ThemeProvider theme={lightTheme}>
            <div className="app">
                <GlobalStyles />
                <div>
                    <Header />
                    <Home />
                    <Footer />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
