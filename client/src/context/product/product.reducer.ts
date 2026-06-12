import { PRODUCT_ACTIONS } from "./product.action";
import type { ProductAction, ProductState } from "./product.types";

export const productReducer = (
  state: ProductState,
  action: ProductAction,
): ProductState => {
  switch (action.type) {
    case PRODUCT_ACTIONS.HANDLE_PRODUCT_CHANGE:
      return {
        ...state,
        productForm: {
          ...state.productForm,
          [action.payload.key]: action.payload.value,
        },
      };

    case PRODUCT_ACTIONS.HANDLE_PRODUCT_FILE_CHANGE:
      return {
        ...state,
        productForm: {
          ...state.productForm,
          [action.payload.key]: action.payload.value,
        },
      };
    case PRODUCT_ACTIONS.GET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };

    default:
      return state;
  }
};
