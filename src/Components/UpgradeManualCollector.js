import { useState } from "react";
import "../styles.css";

export default function UpgradeManualCollector({
  count,
  setCount,
  manIncrement,
  setManIncrement
}) {
  const [manPrice, setManPrice] = useState(15);

  const manualCollector = () => {
    if (count >= manPrice) {
      setCount(count - manPrice);
      setManIncrement(manIncrement + 1);
      setManPrice(Math.floor(manPrice * 1.5));
    }
  };

  return (
    <button className="btn" onClick={manualCollector}>
      Upgrade Manual Collector <br /> SPC: 1 cost: {Math.floor(manPrice)}
    </button>
  );
}
