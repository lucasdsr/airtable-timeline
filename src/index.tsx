import { StrictMode } from "react";

import ReactDOM from "react-dom/client";

import { App } from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Could not find element with id 'root'.");
}
