import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HospitalAuthProvider } from "./utils/hospitalCredential";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HospitalAuthProvider>
        <App />
      </HospitalAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
