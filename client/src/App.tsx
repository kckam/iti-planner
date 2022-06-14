import React, { useState, useEffect } from "react";

import Home from "./page/Home";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAppDispatch } from "./hooks/hooks";
import { loadExistingCards } from "./actions";

const darkTheme = {
  body: "#000",
  text: "#fff",
};
const lightTheme = {
  body: "#fff",
  text: "#000",
};

export const NAV = {
  HOME: "home",
  CART: "cart",
};

function App() {
  // const dispatch = useDispatch();

  const [nav, setNav] = useState(NAV.HOME);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch<any>(loadExistingCards());
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <div className="app">
        <GlobalStyles />
        <div>
          <Header />
          <Home />
          <Footer nav={nav} setNav={setNav} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
