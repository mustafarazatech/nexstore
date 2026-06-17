export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface Order {
  _id?: string;
  orderId: string;
  userId: string;

  items: OrderItem[];

  totalAmount: number;

  paymentMethod: string;
  paymentStatus: string;

  orderStatus: string;

  shippingAddress: ShippingAddress;

  createdAt?: string;
  updatedAt?: string;
}

export interface OrderState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

export enum OrderActionType {
  CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST",
  CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS",
  CREATE_ORDER_FAIL = "CREATE_ORDER_FAIL",

  GET_ORDERS_REQUEST = "GET_ORDERS_REQUEST",
  GET_ORDERS_SUCCESS = "GET_ORDERS_SUCCESS",
  GET_ORDERS_FAIL = "GET_ORDERS_FAIL",
} as const

export type OrderAction =
  | {
      type: OrderActionType.CREATE_ORDER_REQUEST;
    }
  | {
      type: OrderActionType.CREATE_ORDER_SUCCESS;
      payload: Order;
    }
  | {
      type: OrderActionType.CREATE_ORDER_FAIL;
      payload: string;
    }
  | {
      type: OrderActionType.GET_ORDERS_REQUEST;
    }
  | {
      type: OrderActionType.GET_ORDERS_SUCCESS;
      payload: Order[];
    }
  | {
      type: OrderActionType.GET_ORDERS_FAIL;
      payload: string;
    };