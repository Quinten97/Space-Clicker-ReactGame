import { useState } from "react";
import "../styles.css";

export default function PassiveStardustCollection({
  count,
  setCount,
  autoIncrement,
  setAutoIncrement
}) {
  const [autoPrice, setAutoPrice] = useState(20);

  const stardustCollector = () => {
    if (count >= autoPrice) {
      setCount(count - autoPrice);
      setAutoIncrement(autoIncrement + 1);
      setAutoPrice(Math.floor(autoPrice * 1.5));
    } else {
      return;
    }
  };

  return (
    <button className="btn" onClick={stardustCollector}>
      Passive Stardust Collector <br /> KPS: 1 cost: {Math.floor(autoPrice)}
    </button>
  );
}
