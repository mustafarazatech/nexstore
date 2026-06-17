import { OrderAction, OrderActionType, OrderState } from "./order.types";

export const initialOrderState: OrderState = {
  orders: [],
  loading: false,
  error: null,
};

export const orderReducer = (
  state: OrderState,
  action: OrderAction,
): OrderState => {
  switch (action.type) {
    case OrderActionType.CREATE_ORDER_REQUEST:
    case OrderActionType.GET_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case OrderActionType.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: [action.payload, ...state.orders],
      };

    case OrderActionType.GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };

    case OrderActionType.CREATE_ORDER_FAIL:
    case OrderActionType.GET_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
