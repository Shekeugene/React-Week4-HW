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
      <p>Open-source code, by Eugene Shek</p>
    </div>
  </StrictMode>
);