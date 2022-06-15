import React, { useState } from "react";
import styled from "styled-components";
import { animated, useSprings } from "react-spring";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";
import { useAppSelector } from "../hooks/hooks";
import { NAV } from "../App";

const StyledHome = styled.section`
  position: relative;
  height: calc(100vh - 100px);
  padding: 1rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  width: 100%;

  img {
    max-width: 100%;
    max-height: 100%;
  }
  .category {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 450px));
    grid-gap: 1rem;
    justify-content: center;
    margin: auto 0;

    @media only screen and (max-width: 600px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    &__item {
      text-align: center;
      border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 500px;
      will-change: transform;
      /* padding: 50% 1rem; */
    }
  }
`;

function Home() {
  const [loaded, setLoaded] = useState(false);
  const cards = useAppSelector((state) => state.cards);

  const [props, api2] = useSprings(cards.length, (i) => ({
    from: {
      scale: 0.8,
    },
    to: {
      scale: 1,
    },
    delay: i * 100 + 500,
  }));

  return (
    <StyledHome>
      <animated.ul
        className="category"
        // onClick={() => {
        //     setCategories((prev) => {
        //         return prev.map((el, index) => {
        //             return index === 0
        //                 ? {
        //                       ...el,
        //                       cards: [
        //                           ...new Array(10).fill(
        //                               "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg"
        //                           ),
        //                           ...el.cards,
        //                       ],
        //                   }
        //                 : el;
        //         });
        //     });
        // }}
      >
        {props.map((styles, index) => (
          <animated.li
            className="category__item"
            style={styles}
            // onClick={() => {
            //   api2.start((i) => {
            //     if (index !== i) return;

            //     return {
            //       to: {
            //         backgroundColor: "green",
            //       },
            //     };
            //   });
            // }}
          >
            <Cards
              data={cards[index].cards}
              loaded={loaded}
              setLoaded={setLoaded}
            />
          </animated.li>
        ))}
      </animated.ul>
    </StyledHome>
  );
}

export default Home;
