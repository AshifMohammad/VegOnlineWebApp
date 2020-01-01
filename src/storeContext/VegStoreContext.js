import { createContext } from "react";
import { inventoryStore } from "./inventoryStore";

export const VegStoreContext = createContext({ inventoryStore });
