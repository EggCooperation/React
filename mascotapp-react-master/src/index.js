import { React, StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { MessageProvider } from "./contexts/MessageContext";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <MessageProvider>
        <App />
      </MessageProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
