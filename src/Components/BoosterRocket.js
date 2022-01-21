import { useState } from "react";
import "../styles.css";

export default function BoosterRocket({
  count,
  setCount,
  manIncrement,
  setManIncrement
}) {
  const [boosterPrice, setBoosterPrice] = useState(2000);

  const buyBoosterRocket = () => {
    if (count >= boosterPrice) {
      setCount(count - boosterPrice);
      setManIncrement(manIncrement + 50);
      setBoosterPrice(Math.floor(boosterPrice * 2.75));
    }
  };

  return (
    <button className="btn" onClick={buyBoosterRocket}>
      Booster Rocket <br /> KPC: 50 cost: {Math.floor(boosterPrice)}
    </button>
  );
}
