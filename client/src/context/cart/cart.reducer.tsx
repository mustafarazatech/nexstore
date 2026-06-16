import { CART_ACTIONS } from "./cart.action";
import type { CartAction, CartState } from "./cart.types";

export const cartReducer = (
  state: CartState,
  action: CartAction,
): CartState => {
  switch (action.type) {
    case CART_ACTIONS.GET_CART_ITEMS:
      return {
        ...state,
        cartList: action.payload.cartList,
        total: action.payload.total,
      };

    default:
      return state;
  }
};
