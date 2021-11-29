import { useState } from "react";
import "../styles.css";

export default function StarMagnetizer({
  count,
  setCount,
  manIncrement,
  setManIncrement
}) {
  const [magnetizerPrice, setMagnetizerPrice] = useState(1100);

  const buyStarMagnetizer = () => {
    if (count >= magnetizerPrice) {
      setCount(count - magnetizerPrice);
      setManIncrement(manIncrement + 15);
      setMagnetizerPrice(magnetizerPrice * 2.5);
    }
  };

  return (
    <button className="btn" onClick={buyStarMagnetizer}>
      Star Magnetizer <br /> SPC: 15 cost: {Math.floor(magnetizerPrice)}
    </button>
  );
}
