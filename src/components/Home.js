import React from "react";
import VegStoreHeader from "./materialComponents/AppBar";
import { withVegStoreInventory } from "../StoreContext";

export const Home = props => {
  return (
    <VegStoreHeader>
      <div>This is the home page</div>
    </VegStoreHeader>
  );
};

export default withVegStoreInventory(Home);
