import React, { useEffect, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import {
  useTransition,
  animated,
  useSpring,
  useTrail,
  useSprings,
  to as interpolate,
} from "react-spring";
import { useDrag } from "react-use-gesture";
import { addToCart } from "../actions";
import { useDispatch } from "react-redux";

interface CardsProps {
  data: string[];
  loaded: boolean;
  setLoaded: Dispatch<SetStateAction<boolean>>;
}

const StyledCards = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .iti-cards__item {
    position: absolute;
    background: #fff;
    height: 510px;
    width: 300px;
    max-width: 90%;
    max-height: 90%;
    padding: 1rem;
    border-radius: 10px;
    will-change: transform;
    touch-action: none;

    img {
      user-drag: none;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:nth-child(-n + 5) {
      box-shadow: 0 12.5px 100px -10px rgb(50 50 73 / 40%),
        0 10px 10px -10px rgb(50 50 73 / 30%);
    }
  }
`;

const to = (i: number) => ({
  x: 0,
  y: (i % 10) * -4,
  scale: 1,
  rot: 0,
  delay: i * 100 + 1000,
});
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

function Cards({ data, setLoaded, loaded }: CardsProps) {
  const [cardProps, cardApi] = useSprings(data.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const dispatch = useDispatch();

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.01;
      const dir = xDir < 0 ? -1 : 1;

      cardApi.start((i) => {
        if (index !== i) return;
        let boundWidth: HTMLElement =
          document.querySelector(".category__item")!;
        const isGone = !down && trigger;
        const x = isGone ? (200 + boundWidth.offsetWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 100 * velocity : 0);
        const scale = down ? 1.1 : 1;

        if (isGone && dir > 0) {
          dispatch(addToCart(i));
        }

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: {
            friction: 50,
            tension: down ? 800 : isGone ? 200 : 500,
          },
        };
      });
      console.log(xDir);
    }
  );

  useEffect(() => {
    //Animate card for first time
    if (loaded) {
      cardApi.start((i) => ({
        from: {
          x: 0,
          y: 0,
          scale: 1,
          rot: -10 + Math.random() * 20,
          // delay: i * 100,
        },
      }));
    }
  }, [data]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <StyledCards>
      {cardProps.map((styles, index) => {
        return (
          <animated.li
            {...bind(index)}
            key={`${Math.random()}`}
            className="iti-cards__item"
            style={{
              ...styles,
              transform: interpolate(
                [styles.rot, styles.scale],
                (r, s) =>
                  `rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) `
              ),
            }}
          >
            <img src={data[index]} />
          </animated.li>
        );
      })}
    </StyledCards>
  );
}

export default Cards;
