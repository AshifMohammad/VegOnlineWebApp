import React, { PureComponent } from "react";
import { inventoryStore } from "./inventoryStore";
import { VegStoreContext } from "./VegStoreContext";

export class VegStoreContextProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inventoryDetails: {}
    };
  }

  /*
   * Setting up Setup related get calls and provide them to their consumers
   * TODO: Need to move rest setup related data here , for better structural code-splitting
   * TODO: Get all inventory api fetch call to update component with latest inventory records
   *
   * */

  async componentDidMount() {
    try {
      //TODO: api simulations
      this.setState({ inventoryDetails: { count: 400 } });
    } catch (e) {
      console.error(`Setup related APIs are failing, please see more : ${e}`);
    }
  }
  //Error mounting of the react component
  async componentDidCatch(error) {
    console.error(
      `React found some errors while loading Context, please see here for more: ${error}`
    );
  }

  render() {
    const InventoryProvider = VegStoreContext.Provider;
    return (
      <InventoryProvider value={inventoryStore}>
        {this.props.children}
      </InventoryProvider>
    );
  }
}
