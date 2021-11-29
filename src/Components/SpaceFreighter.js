import { useState } from "react";
import "../styles.css";

export default function SpaceFreighter({
  count,
  setCount,
  autoIncrement,
  setAutoIncrement
}) {
  const [freighterPrice, setFreighterPrice] = useState(1500);

  const buySpaceFreighter = () => {
    if (count >= freighterPrice) {
      setCount(count - freighterPrice);
      setAutoIncrement(autoIncrement + 15);
      setFreighterPrice(freighterPrice * 2.5);
    }
  };

  return (
    <button className="btn" onClick={buySpaceFreighter}>
      Space Freighter <br /> SPS: 15 cost: {Math.floor(freighterPrice)}
    </button>
  );
}
