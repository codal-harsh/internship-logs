import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import "./bootstrap.scss";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
);
