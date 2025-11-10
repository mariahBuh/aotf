import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./components/About/about";
import GamePlay from "./components/GamePlay/gameplay";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Footer Page) */}
        <Route path="/" element={<App />} />

        {/* About page */}
        <Route path="/about" element={<About />} />

         {/* GamePlay page */}
        <Route path="/gameplay" element={<GamePlay />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
