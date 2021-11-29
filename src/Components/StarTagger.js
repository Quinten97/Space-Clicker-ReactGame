import "../styles.css";
import { useState } from "react";

export default function StarTagger({
  count,
  setCount,
  manIncrement,
  setManIncrement
}) {
  const [taggerPrice, setTaggerPrice] = useState(100);

  const buyStarTagger = () => {
    if (count >= taggerPrice) {
      setCount(count - taggerPrice);
      setManIncrement(manIncrement + 5);
      setTaggerPrice(taggerPrice * 2);
    }
  };

  return (
    <button className="btn" onClick={buyStarTagger}>
      Star Tagger <br /> SPC: 5 cost: {Math.floor(taggerPrice)}
    </button>
  );
}
