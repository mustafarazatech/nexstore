import { createContext, useContext, useReducer } from "react";

import { productReducer } from "./product.reducer";
import { PRODUCT_ACTIONS } from "./product.action";

import type { ProductContext, ProductState } from "./product.types";

import { apiFormData, apiGet, apiGetId } from "../../services/api";

export const initialState: ProductState = {
  productForm: {
    name: "",
    description: "",
    price: "",
    discountPrice: "",
    stock: "",
    brand: "",
    category: "",
    isActive: true,
    photo: null,
  },

  productList: [],
  productDetail: null,
  productCategory: [],
};

const ProductContext = createContext<ProductContext | null>(null);

export const ProductProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const handleChange = (e: any) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    dispatch({
      type: PRODUCT_ACTIONS.HANDLE_PRODUCT_CHANGE,
      payload: {
        key: e.target.name,
        value,
      },
    });
  };

  const handleFileChange = (e: any) => {
    dispatch({
      type: PRODUCT_ACTIONS.HANDLE_PRODUCT_FILE_CHANGE,
      payload: {
        key: e.target.name,
        value: e.target.files[0],
      },
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const {
      name,
      description,
      price,
      discountPrice,
      stock,
      brand,
      category,
      isActive,
      photo,
    } = state.productForm;

    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("discountPrice", discountPrice);
    formData.append("stock", stock);
    formData.append("brand", brand);
    formData.append("category", category);
    formData.append("isActive", String(isActive));

    if (photo) {
      formData.append("photo", photo);
    }

    const data = await apiFormData("api/admin/add-product", formData);

    // console.log(data);
  };
  const getProductList = async () => {
    const data = await apiGet("api/admin/product-list");

    dispatch({
      type: PRODUCT_ACTIONS.GET_PRODUCT_LIST,
      payload: data.data,
    });
  };
  const getProductDetail = async (id: any) => {
    const data = await apiGetId(`api/admin/product-detail`, id);

    dispatch({
      type: PRODUCT_ACTIONS.GET_PRODUCT_DETAIL,
      payload: data.data,
    });
  };

  const getProductCtegoryFilter = async (id: any) => {
    const data = await apiGetId("api/admin/product-category", id);
    console.log("filter", data);
    if (data.success) {
      dispatch({
        type: PRODUCT_ACTIONS.GET_PRODUCT_CATEGORY,
        payload: data.data,
      });
    }
  };
  return (
    <ProductContext.Provider
      value={{
        state,
        handleChange,
        handleFileChange,
        handleSubmit,
        getProductList,
        getProductDetail,
        getProductCtegoryFilter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProduct must be used inside ProductProvider");
  }

  return context;
};
