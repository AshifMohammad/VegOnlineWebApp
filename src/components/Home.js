import React from "react";
import VegStoreHeader from "./materialComponents/AppBar";
import { withVegStoreInventory } from "../StoreContext";

export const Home = props => {
  return (
    <div>
      <VegStoreHeader />
    </div>
  );
};

export default withVegStoreInventory(Home);
