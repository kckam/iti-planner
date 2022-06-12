import React from "react";
import styled from "styled-components";

interface CardProps {
    card: string;
}

const StyledCard = styled.li`
    position: absolute;
    background: #fff;
    height: 300px;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 12.5px 100px -10px rgb(50 50 73 / 40%),
        0 10px 10px -10px rgb(50 50 73 / 30%);
`;

function Card(props: CardProps) {
    return (
        <StyledCard>
            <img src={props.card} />
        </StyledCard>
    );
}

export default Card;
