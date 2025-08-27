import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TsUseReducer from "./hooks+typescript/TsUseReducer";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TsUseReducer>
     
      <App />
    </TsUseReducer>
  </StrictMode>
);
