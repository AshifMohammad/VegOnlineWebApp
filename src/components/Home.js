import React from "react";
import VegStoreHome from "./materialComponents/AppBar";
import { DisplayContent } from "./materialComponents/DrawersContents";
import { PageUnderConstruction } from "./materialComponents/Pages/PageUnderConstruction";

export const Home = () => {
  return (
    <div>
      <VegStoreHome />
      <DisplayContent Component={PageUnderConstruction} />
    </div>
  );
};
