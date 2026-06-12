import { createContext, useReducer, useContext, useEffect } from "react";
import { categoryReducer } from "./category.reducer";
import type { CategoryContext, CategoryState } from "./category.types";
import { CATEGORY_ACTIONS } from "./category.action";
import { apiFormData, apiGet } from "../../services/api";

export const initialState: CategoryState = {
  categoryForm: {
    name: "",
    subName: "",
    photo: null,
  },
  categoryList: [],
};

const CategoryContext = createContext<CategoryContext | null>(null);

export const CategoryProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(categoryReducer, initialState);

  const handleChange = (e: any) => {
    dispatch({
      type: CATEGORY_ACTIONS.HANDLE_CATEGORY_CHANGE,
      payload: {
        key: e.target.name as any,
        value: e.target.value,
      },
    });
  };
  const handleFileChange = (e: any) => {
    dispatch({
      type: CATEGORY_ACTIONS.HANDLE_CATEGORY_FILE_CHANGE,
      payload: {
        key: e.target.name,
        value: e.target.files[0],
      },
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { name, subName, photo } = state?.categoryForm;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("subName", subName);
    if (photo) {
      formData.append("photo", photo);
    }
    // console.log(photo);
    const data = await apiFormData("api/admin/add-category", formData);
    // console.log(data);
  };
  const getCategoryList = async () => {
    const data = await apiGet("api/admin/category-list");
    // console.log(data.data);
    dispatch({
      type: CATEGORY_ACTIONS.GET_CATEGORY_LIST,
      payload: data.data,
    });
  };
  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        state,
        handleChange,
        handleSubmit,
        handleFileChange,
        getCategoryList,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used inside CategoryProvider");
  }
  return context;
};
