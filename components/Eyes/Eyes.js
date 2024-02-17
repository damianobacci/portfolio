"use client";
import React, { useRef, useEffect, useState } from "react";
import "./Eyes.css";

const Eyes = () => {
  const eyesRef = useRef(null);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [totalRotationRadians, setTotalRotationRadians] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!eyesRef.current) return;

      const eyesRect = eyesRef.current.getBoundingClientRect();
      const cx = (eyesRect.left + eyesRect.right) / 2;
      const cy = (eyesRect.top + eyesRect.bottom) / 2;
      const newLastPosition = { x: e.pageX, y: e.pageY };

      if (lastPosition.x !== 0 && lastPosition.y !== 0) {
        const change = getAngleBetween(
          cx,
          cy,
          lastPosition.x,
          lastPosition.y,
          e.pageX,
          e.pageY
        );
        const newTotalRotationRadians = totalRotationRadians + change;

        if (Math.abs(newTotalRotationRadians) >= 2 * Math.PI * 5) {
          console.log("Insert effect here");
          setTotalRotationRadians(0);
        } else {
          setTotalRotationRadians(newTotalRotationRadians);
        }
      }

      setLastPosition(newLastPosition);

      const pupils = eyesRef.current.querySelectorAll(".pupil");
      pupils.forEach((pupil) => {
        const rect = pupil.getBoundingClientRect();
        const x = (e.pageX - rect.left) / 70 + "px";
        const y = (e.pageY - rect.top) / 70 + "px";
        pupil.style.transform = `translate3d(${x}, ${y}, 0)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastPosition, totalRotationRadians]);

  const getAngleBetween = (cx, cy, ox, oy, mx, my) => {
    const x1 = ox - cx;
    const y1 = oy - cy;
    const x2 = mx - cx;
    const y2 = my - cy;
    const d1 = Math.max(0.001, Math.sqrt(x1 * x1 + y1 * y1));
    const d2 = Math.max(0.001, Math.sqrt(x2 * x2 + y2 * y2));
    return Math.asin((x1 / d1) * (y2 / d2) - (y1 / d1) * (x2 / d2));
  };

  return (
    <div ref={eyesRef} className="eyes">
      <div className="eye">
        <div className="pupil"></div>
      </div>
      <div className="eye">
        <div className="pupil"></div>
      </div>
    </div>
  );
};

export default Eyes;
