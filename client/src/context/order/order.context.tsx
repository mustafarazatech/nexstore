import { createContext, useContext, useReducer, ReactNode } from "react";

import { OrderState, OrderAction } from "./order.types";

import { orderReducer, initialOrderState } from "./order.reducer";

interface OrderContextType {
  state: OrderState;
  dispatch: React.Dispatch<OrderAction>;
}

const OrderContext = createContext<OrderContextType | null>(null);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(orderReducer, initialOrderState);

  return (
    <OrderContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrder must be used within OrderProvider");
  }

  return context;
};
