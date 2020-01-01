import { ActionTypes } from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_INVENTORY:
      return {
        ...state,
        inventory: action.value
      };
    case ActionTypes.DELETE_INVENTORY:
      return {
        ...state,
        theme: action.value
      };

    default:
      return state;
  }
};
