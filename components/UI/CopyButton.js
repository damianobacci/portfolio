"use client";
import styles from "./CopyButton.module.css";
import { useState } from "react";
export default function CopyButton() {
  const [buttonText, setButtonText] = useState("Copy");
  const textToCopy = "damiano.bacci@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setButtonText("Copied!");
      setTimeout(() => setButtonText("Copy"), 5000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <button className={styles.copy} onClick={handleCopy}>
      {buttonText}
    </button>
  );
}
