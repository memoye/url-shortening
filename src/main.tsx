import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LinksContextProvider } from "./context/links-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LinksContextProvider>
      <App />
    </LinksContextProvider>
  </React.StrictMode>
);
