import React from "react";
import styled from "styled-components";

const StyledFooter = styled.header`
    height: 80px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Footer() {
    return <StyledFooter>Hello</StyledFooter>;
}

export default Footer;
