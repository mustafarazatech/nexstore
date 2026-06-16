import { CART_ACTIONS } from "./cart.action";

/**
 * Product inside cart item
 */
export type CartProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  stock: number;
  brand: string;
  category: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

/**
 * Single cart item
 */
export type CartItem = {
  _id: string;
  user: string;
  product: CartProduct;
  quantity: number;
  price: number;
  createdAt: string;
  updatedAt: string;
};

/**
 * Cart state
 */
export type CartState = {
  cartList: CartItem[];
  total: number;
};

/**
 * Cart context type
 */
export type CartContextType = {
  state: CartState;
  handleCart: (productId: any, price: any, quantity?: number) => Promise<void>;
  getCartList: () => Promise<void>;
};

/**
 * Cart actions
 */
export type CartAction =
  | {
      type: typeof CART_ACTIONS.ADD_TO_CART;
    }
  | {
      type: typeof CART_ACTIONS.GET_CART_ITEMS;
      payload: {
        cartList: CartItem[];
        total: number;
      };
    };
