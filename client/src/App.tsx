import React, { useState, useEffect } from "react";

import Home from "./page/Home";
import Cart from "./page/Cart";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAppDispatch } from "./hooks/hooks";
import { loadExistingCards } from "./actions";
import { useTransition, animated } from "react-spring";

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
  const transition = useTransition(nav, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { display: "none" },
  });

  useEffect(() => {
    dispatch<any>(loadExistingCards());
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <div className="app">
        <GlobalStyles />
        <div>
          <Header />

          {transition((styles: any, item: any) => {
            return item === NAV.HOME ? (
              <animated.div style={styles}>
                <Home />
              </animated.div>
            ) : (
              <animated.div style={styles}>
                <Cart />
              </animated.div>
            );
          })}

          <Footer nav={nav} setNav={setNav} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
