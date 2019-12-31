import React from "react";
import { VegStoreContextConsumer } from "./VegStoreContextConsumer";

/** HOC to utilize provide deal's setup data  for F&I sales.
 *
 * Eg. withDealSetup(FeesModal)
 * - The { dynamicFeesTaxes } will be available as a prop in FeesModal
 */

export const withVegStoreInventory = WrappedComponent => props => {
  return (
    <VegStoreContextConsumer>
      {VegStoreContext => (
        <WrappedComponent inventoryDetailRecords={VegStoreContext} {...props} />
      )}
    </VegStoreContextConsumer>
  );
};
