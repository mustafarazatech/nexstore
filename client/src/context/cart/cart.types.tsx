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
export type AddressObj = {
  name: string;
  mobileNo: string;
  address: string;
  pinCode: string;
  city: string;
  stateName: string;
};
export type CartState = {
  cartList: CartItem[];
  total: number;
  addressObj: AddressObj | null;
};

/**
 * Cart context type
 */
export type CartContextType = {
  state: CartState;
  handleCart: (productId: any, price: any, quantity?: number) => Promise<void>;
  getCartList: () => Promise<void>;
  increaseCartItem: (id: any) => Promise<void>;
  decreaseCartItem: (id: any) => Promise<void>;
  removeCartItem: (id: any) => Promise<void>;
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
