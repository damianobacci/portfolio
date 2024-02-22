"use client";
import { useEffect, useState } from "react";
import styles from "./Splash.module.css";

export default function Splash() {
  const [isVisible, setIsVisible] = useState(true);

  //   useEffect(() => {
  //     const hasVisited = localStorage.getItem("hasVisited");

  //     if (!hasVisited) {
  //       setIsVisible(true);
  //       localStorage.setItem("hasVisited", "true");
  //     }
  //   }, []);

  const enterSite = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.splashContainer}>
      {/* Splash content */}
      <h1>Welcome to My App</h1>
      <button onClick={enterSite}>Enter Site</button>
    </div>
  );
}
