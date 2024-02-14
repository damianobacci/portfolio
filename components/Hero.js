"use client";

import { useRef, useEffect } from "react";
import Typed from "typed.js";

export default function Hero() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["frontend", "backend", "fullstack", "system"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div>
        <p>
          I am a junior <span ref={el} />
          developer
        </p>
        <p>searching for his way...</p>
      </div>
      <div>
        <p>Available for work</p>
      </div>
    </>
  );
}
