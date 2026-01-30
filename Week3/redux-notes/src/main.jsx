import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./bootstrap.scss";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./stores/store"; // Import store and persistor
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoutes />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
