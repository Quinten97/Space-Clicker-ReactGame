import { useState } from "react";
import "../styles.css";

export default function RadiationCollector({
  count,
  setCount,
  autoIncrement,
  setAutoIncrement
}) {
  const [radiationPrice, setRadiationPrice] = useState(500);

  const buyRadiationCollector = () => {
    if (count >= radiationPrice) {
      setCount(count - radiationPrice);
      setAutoIncrement(autoIncrement + 5);
      setRadiationPrice(radiationPrice * 2);
    }
  };

  return (
    <button className="btn" onClick={buyRadiationCollector}>
      Radiation Collector <br /> SPS: 5 cost: {Math.floor(radiationPrice)}
    </button>
  );
}
