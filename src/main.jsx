import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { InputSetsProvider } from "./Context/InputSetsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InputSetsProvider>
      <App />
    </InputSetsProvider>
  </React.StrictMode>
);
