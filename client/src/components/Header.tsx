import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    height: 80px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    .header__title {
    }
`;

function Header() {
    return (
        <StyledHeader className="header">
            <h1 className="header__title">Welcome</h1>
        </StyledHeader>
    );
}

export default Header;
