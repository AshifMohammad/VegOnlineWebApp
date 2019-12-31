import React from "react";
import ReactDOM from "react-dom";
import { App } from "./MainApp";
import { VegStoreContextProvider } from "./StoreContext";

import "./index.css";

ReactDOM.render(
  <VegStoreContextProvider>
    <App />
  </VegStoreContextProvider>,
  document.getElementById("root")
);
