import CookieButton from "./Components/Cookie_Button";
import UpgradeManualCollector from "./Components/UpgradeManualCollector";
import PassiveStarCollector from "./Components/PassiveStardustCollector";
import StarTagger from "./Components/StarTagger";
import RadiationCollector from "./Components/RadiationCollector";
import StarMagnetizer from "./Components/StarMagnetizer";
import SpaceFreighter from "./Components/SpaceFreighter";
import BoosterRocket from "./Components/BoosterRocket";
import AchievementComp from "./Components/Achievements";

import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [autoIncrement, setAutoIncrement] = useState(0);
  const [manIncrement, setManIncrement] = useState(1);
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <CookieButton
        count={count}
        setCount={setCount}
        autoIncrement={autoIncrement}
        setAutoIncrement={setAutoIncrement}
        manIncrement={manIncrement}
        setManIncrement={setManIncrement}
        progress={progress}
        setProgress={setProgress}
      />
      <div className="store-container blur-effect">
        <UpgradeManualCollector
          count={count}
          setCount={setCount}
          manIncrement={manIncrement}
          setManIncrement={setManIncrement}
        />
        <PassiveStarCollector
          count={count}
          setCount={setCount}
          autoIncrement={autoIncrement}
          setAutoIncrement={setAutoIncrement}
        />
        <StarTagger
          count={count}
          setCount={setCount}
          manIncrement={manIncrement}
          setManIncrement={setManIncrement}
        />
        <RadiationCollector
          count={count}
          setCount={setCount}
          autoIncrement={autoIncrement}
          setAutoIncrement={setAutoIncrement}
        />
        <StarMagnetizer
          count={count}
          setCount={setCount}
          manIncrement={manIncrement}
          setManIncrement={setManIncrement}
        />
        <SpaceFreighter
          count={count}
          setCount={setCount}
          autoIncrement={autoIncrement}
          setAutoIncrement={setAutoIncrement}
        />
        <BoosterRocket
          count={count}
          setCount={setCount}
          manIncrement={manIncrement}
          setManIncrement={setManIncrement}
        />
      </div>
      <AchievementComp count={count} setCount={setCount} progress={progress} />
    </div>
  );
}
