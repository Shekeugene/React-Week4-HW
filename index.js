import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import WeatherSearch from "./WeatherSearch";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="Container">
      <div className="App">
        <WeatherSearch />
      </div>
      <p><a href="https://github.com/Shekeugene/React-Week4-HW">Open-source code</a> by Eugene Shek</p>
    </div>
  </StrictMode>
);