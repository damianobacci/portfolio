"use client";
import styles from "./Hero.module.css";
import Eyes from "./Eyes/Eyes";

import { useRef, useEffect } from "react";
import Typed from "typed.js";
import Link from "next/link";

export default function Hero() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["full stack developer", "data journalist"],
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
    <div className={styles.hero}>
      <div>
        <p>
          I am a
          <br /> <span ref={el} className={styles.typed} />
        </p>
        <p>constantly learning new things...</p>
      </div>
      <div className={styles.available}>
        <p>
          <span className={styles.inactive}></span> Currently working @ <Link href="https://www.innovation-system.it/">Innovation Systems</Link>
        </p>
      </div>
      <Eyes />
    </div>
  );
}
