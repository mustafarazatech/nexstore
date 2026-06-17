import type { PRODUCT_ACTIONS } from "./product.action";
export type ProductItem = {
  _id?: string | undefined;
  name: string;
  description: string;
  price: string;
  discountPrice: string;
  stock: number;
  brand: string;
  category: any;
  isActive: boolean;
  photo: File | null;
};

export type ProductForm = {
  name: string;
  description: string;
  price: string;
  discountPrice: string;
  stock: string;
  brand: string;
  category: string;
  isActive: boolean;
  photo: File | null;
};

export type ProductState = {
  productForm: ProductForm;
  productList: ProductItem[];
  productDetail: ProductItem | null;
  productCategory: any[];
  quantity: number;
};

export type ProductContext = {
  state: ProductState;
  handleChange: (e: any) => void;
  handleFileChange: (e: any) => void;
  handleSubmit: (e: any) => Promise<void>;
  getProductList: () => Promise<void>;
  getProductDetail: (id: any) => Promise<void>;
  getProductCtegoryFilter: (id: any) => Promise<void>;
  handleQuantity: (qytType: any) => void;
};

export type ProductAction =
  | {
      type: typeof PRODUCT_ACTIONS.HANDLE_PRODUCT_CHANGE;
      payload: {
        key: any;
        value: any;
      };
    }
  | {
      type: typeof PRODUCT_ACTIONS.HANDLE_QUANTITY;
      payload: any;
    }
  | {
      type: typeof PRODUCT_ACTIONS.GET_PRODUCT_LIST;
      payload: any;
    }
  | {
      type: typeof PRODUCT_ACTIONS.GET_PRODUCT_CATEGORY;
      payload: any;
    }
  | {
      type: typeof PRODUCT_ACTIONS.GET_PRODUCT_DETAIL;
      payload: any;
    }
  | {
      type: typeof PRODUCT_ACTIONS.HANDLE_PRODUCT_FILE_CHANGE;
      payload: {
        key: any;
        value: any;
      };
    };
