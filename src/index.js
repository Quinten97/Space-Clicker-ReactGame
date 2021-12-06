import ReactDOM from "react-dom";

import App from "./App";
import AnimatedButton from "./Components/AnimatedButton";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div className="app-container">
    <App />
    <AnimatedButton />
  </div>,
  rootElement
);
