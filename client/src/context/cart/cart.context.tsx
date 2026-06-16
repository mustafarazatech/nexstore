import { createContext, useReducer, useContext, useEffect } from "react";
import { apiGet, apiPost } from "../../services/api";
import { cartReducer } from "./cart.reducer";
import { useAuth } from "../auth/auth.context";

import type { CartState, CartContextType } from "./cart.types";

export const initialState: CartState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // GET CART
  const getCartList = async () => {
    const data = await apiGet("api/cart-list");
    console.log(data);

    dispatch({
      type: "GET_CART_ITEMS",
      payload: {
        cartList: data.data,
        total: data.total,
      },
    });
  };

  // ADD TO CART
  const handleCart = async (
    productId: string,
    price: number,
    quantity: number = 1,
  ) => {
    if (!user) return;

    await apiPost("api/add-cart", {
      productId,
      price,
      quantity,
    });

    await getCartList();
  };

  // INCREASE ITEM
  const increaseCartItem = async (itemId: string) => {
    await apiPost("api/cart/increase", { itemId });
    await getCartList();
  };

  // DECREASE ITEM
  const decreaseCartItem = async (itemId: string) => {
    await apiPost("api/cart/decrease", { itemId });
    await getCartList();
  };

  // REMOVE ITEM
  const removeCartItem = async (itemId: string) => {
    await apiPost("api/cart/remove", { itemId });
    await getCartList();
  };

  useEffect(() => {
    if (user) {
      getCartList();
    }
  }, [user]);

  return (
    <CartContext.Provider
      value={{
        state,
        getCartList,
        handleCart,
        // increaseCartItem,
        // decreaseCartItem,
        // removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};
