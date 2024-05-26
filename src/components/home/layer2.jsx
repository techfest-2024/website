import React from "react";
import styles from "./layer2.module.css";
import { useState, useEffect } from "react";
import data from "./data";
import { shuffle } from "lodash";
import { useTransition, animated } from "@react-spring/web";
import redBlack from "../../images/red-black.jpg";

export default function Layer2() {
  const [rows, set] = useState(data);
  useEffect(() => {
    const t = setInterval(() => set(shuffle), 8000);
    return () => clearInterval(t);
  }, []);

  let height = 0;
  const transitions = useTransition(
    rows.map((data) => ({ ...data, y: (height += data.height) - data.height })),
    {
      key: (item) => item.name,
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y, height }) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height }),
    }
  );
  return (
    <>
      <div className={styles.list} style={{ height }}>
        {transitions((style, item, t, index) => (
          <animated.div
            className={styles.card}
            style={{ zIndex: data.length - index, ...style }}
          >
            <div
              className={styles.cell}
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            <div className={styles.img__text}>{item.name}</div>
          </animated.div>
        ))}
      </div>
    </>
  );
}
