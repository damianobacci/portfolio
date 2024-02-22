"use client";
import styles from "./Hero.module.css";
import Eyes from "./Eyes/Eyes";

import { useRef, useEffect } from "react";
import Typed from "typed.js";

export default function Hero() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["frontend", "backend", "fullstack"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div>
        <p>
          I am a junior
          <br /> <span ref={el} className={styles.typed} />
          developer
        </p>
        <p>searching for his way...</p>
      </div>
      <div className={styles.available}>
        <p>
          <span className={styles.dot}></span> Available for work
        </p>
      </div>
      <Eyes />
    </>
  );
}
