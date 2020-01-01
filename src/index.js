import React from "react";
import ReactDOM from "react-dom";
import { App } from "./MainApp";
import { VegStoreContextProvider } from "./storeContext";
import { reducer } from "./reducers/storeReducers";
import { inventoryStore } from "./storeContext/inventoryStore";

import "./index.css";

ReactDOM.render(
  <VegStoreContextProvider initialState={inventoryStore} reducer={reducer}>
    <App />
  </VegStoreContextProvider>,
  document.getElementById("root")
);
