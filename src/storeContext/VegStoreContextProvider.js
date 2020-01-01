import React, { useReducer } from "react";
import { VegStoreContext } from "./VegStoreContext";

export const VegStoreContextProvider = ({
  initialState,
  reducer,
  children
}) => {
  return (
    <VegStoreContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </VegStoreContext.Provider>
  );
};
