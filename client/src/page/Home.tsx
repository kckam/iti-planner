import React, { useState } from "react";
import styled from "styled-components";
import {
    useTransition,
    animated,
    useSpring,
    useTrail,
    useSprings,
} from "react-spring";
import Cards from "../components/Cards";

let CATEGORIES = [
    {
        label: "a",
        cards: [
            "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
        ],
    },
    {
        label: "ab",
        cards: [
            "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
        ],
    },

    {
        label: "adb",
        cards: [
            "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
        ],
    },

    {
        label: "adb",
        cards: [
            "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
        ],
    },

    {
        label: "adb",
        cards: [
            "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
        ],
    },

    {
        label: "adb",
        cards: [
            "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
        ],
    },
    {
        label: "adb",
        cards: [
            "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
        ],
    },
    {
        label: "adb",
        cards: [
            "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
        ],
    },
    {
        label: "adb",
        cards: [
            "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
        ],
    },
    {
        label: "adb",
        cards: [
            "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
        ],
    },
    {
        label: "adb",
        cards: [
            "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
        ],
    },
    {
        label: "adb",
        cards: [
            "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
        ],
    },
    {
        label: "adb",
        cards: [
            "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
        ],
    },
];

const StyledHome = styled.section`
    position: relative;
    height: calc(100vh - 160px);
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
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 1rem;
        justify-content: center;
        margin: auto 0;

        &__item {
            text-align: center;
            border: 1px solid red;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 400px;
            will-change: transform;
            /* padding: 50% 1rem; */
        }
    }
`;

function Home() {
    const [loaded, setLoaded] = useState(false);

    const [categories, setCategories] = useState(CATEGORIES);

    const [props, api2] = useSprings(categories.length, (i) => ({
        // trail: 500 / categories.length,
        from: {
            backgroundColor: "black",
            scale: 0,
        },
        to: {
            backgroundColor: "yellow",
            scale: 1,
        },
        delay: i * 100,
    }));

    // const transitions = useTransition(categories, {
    //     keys: (item) => item,
    //     trail: 500 / categories.length,
    //     from: {
    //         opacity: 0,
    //         color: "black",
    //         scale: 0,
    //     },
    //     enter: {
    //         opacity: 1,
    //         color: "red",

    //         scale: 1,
    //     },
    //     leave: {
    //         opacity: 0,
    //         color: "green",
    //         scale: 0,
    //     },
    //     // update: { color: "#cccccc" },
    // });

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
                        onClick={() => {
                            api2.start((i) => {
                                if (index !== i) return;

                                return {
                                    to: {
                                        backgroundColor: "green",
                                    },
                                };
                            });
                        }}
                    >
                        <Cards
                            data={categories[index].cards}
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
