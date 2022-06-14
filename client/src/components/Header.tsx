import React from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { nextDay, prevDay } from "../actions";

const StyledHeader = styled.header`
  height: 50px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  .header-nav {
    color: red;
  }

  .header__title {
  }
`;

function Header() {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <StyledHeader className="header">
      <div
        className="header-nav header-nav__prev"
        onClick={() => {
          dispatch(prevDay());
        }}
      >
        Prev
      </div>
      <h1 className="header__title">
        DAY {cart && cart.findIndex((el) => el.active) + 1}
      </h1>
      <div
        className="header-nav header-nav__next"
        onClick={() => {
          dispatch(nextDay());
        }}
      >
        Next
      </div>
    </StyledHeader>
  );
}

export default Header;
