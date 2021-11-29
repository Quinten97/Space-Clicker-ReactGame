import "../styles.css";

import { useState } from "react";
import useInterval from "../Hooks/useInterval";

export default function CookieButton({
  count,
  setCount,
  autoIncrement,
  setAutoIncrement,
  manIncrement,
  setManIncrement,
  progress,
  setProgress
}) {
  // Main pointer Function
  const manualIncrement = () => {
    setCount(count + manIncrement);
    setProgress(progress + manIncrement);
  };

  //Game Clock
  useInterval(() => {
    if (autoIncrement > 0) {
      setCount(count + autoIncrement);
      setProgress(progress + autoIncrement);
    }
  }, 1000);

  return (
    <div className="main-container">
      {/* Progress bar for game completion */}
      <div className="progressbar-container">
        <p className="progress-p">
          {Math.round((progress / 150000000) * 100)}%
        </p>
        <progress
          className="progress-bar"
          max="150000000"
          value={progress}
        ></progress>
      </div>
      {/* Counter and Main Button */}
      <div className="counter-container blur-effect">
        <h1>{Math.floor(count)}</h1>
        <p>
          SPS: {autoIncrement} SPC: {manIncrement}
        </p>
        <button className="main-clicker" onClick={manualIncrement}>
          Star Collector
        </button>
      </div>
    </div>
  );
}
