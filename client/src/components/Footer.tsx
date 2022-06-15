import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { NAV } from "../App";

interface Iprops {
  nav: string;
  setNav: Dispatch<SetStateAction<string>>;
}

const StyledFooter = styled.header`
  height: 50px;
  background: #000;
  color: #fff;
  display: flex;

  .footer__nav {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    &--active {
      background: #ccc;
    }

    &:first-child {
      border-right: 1px solid #888;
    }
  }
`;

function Footer({ nav, setNav }: Iprops) {
  return (
    <StyledFooter>
      {(Object.keys(NAV) as (keyof typeof NAV)[]).map((key) => {
        return (
          <div
            key={key}
            onClick={() => {
              setNav(NAV[key]);
            }}
            className={`footer__nav ${
              nav === NAV[key] ? "footer__nav--active" : ""
            }`}
          >
            {NAV[key as keyof { HOME: string; CART: string }]}
          </div>
        );
      })}
    </StyledFooter>
  );
}

export default Footer;
