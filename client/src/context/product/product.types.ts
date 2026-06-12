import type { PRODUCT_ACTIONS } from "./product.action";
export type ProductItem = {
  _id?: string;
  name: string;
  description: string;
  price: string;
  discountPrice: string;
  stock: string;
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
};

export type ProductContext = {
  state: ProductState;
  handleChange: (e: any) => void;
  handleFileChange: (e: any) => void;
  handleSubmit: (e: any) => Promise<void>;
  getProductList: () => Promise<void>;
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
      type: typeof PRODUCT_ACTIONS.GET_PRODUCT_LIST;
      payload: any;
    }
  | {
      type: typeof PRODUCT_ACTIONS.HANDLE_PRODUCT_FILE_CHANGE;
      payload: {
        key: any;
        value: any;
      };
    };
