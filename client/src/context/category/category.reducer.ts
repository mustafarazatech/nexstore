import { CATEGORY_ACTIONS } from "./category.action";
import type { CategoryAction, CategoryState } from "./category.types";

export const categoryReducer = (
  state: CategoryState,
  action: CategoryAction,
): CategoryState => {
  switch (action.type) {
    case CATEGORY_ACTIONS.HANDLE_CATEGORY_CHANGE:
      return {
        ...state,
        categoryForm: {
          ...state.categoryForm,
          [action.payload.key]: action.payload.value,
        },
      };
    case CATEGORY_ACTIONS.HANDLE_CATEGORY_FILE_CHANGE:
      return {
        ...state,
        categoryForm: {
          ...state.categoryForm,
          [action.payload.key]: action.payload.value,
        },
      };
    case CATEGORY_ACTIONS.GET_CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.payload,
      };

    default:
      return state;
  }
};
