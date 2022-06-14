import React, { useState } from "react";

import Home from "./page/Home";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { initDB } from "react-indexed-db";
import { dBConfig } from "./utils/dBConfig";

initDB(dBConfig);

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
          <Footer nav={nav} setNav={setNav} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
