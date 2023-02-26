import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div>
        <h1 class="text-md-left">Weather Search Engine</h1>
        <p class="text-md-left">
          <SearchEngine />
        </p>
      </div>
    </div>
    <Footer />
  </StrictMode>
);
