import type { CATEGORY_ACTIONS } from "./category.action";

export type CategoryForm = {
  _id?: string;
  name: string;
  subName: string;
  photo: null;
};

export type CategoryState = {
  categoryForm: CategoryForm;
  categoryList: CategoryForm[];
};

export type CategoryContext = {
  state: CategoryState;
  handleChange: (e: any) => void;
  handleFileChange: (e: any) => void;
  handleSubmit: (e: any) => Promise<void>;
  getCategoryList: () => Promise<void>;
};

export type CategoryAction =
  | {
      type: typeof CATEGORY_ACTIONS.HANDLE_CATEGORY_CHANGE;
      payload: {
        key: any;
        value: any;
      };
    }
  | {
      type: typeof CATEGORY_ACTIONS.HANDLE_CATEGORY_FILE_CHANGE;
      payload: { key: any; value: any };
    }
  | {
      type: typeof CATEGORY_ACTIONS.GET_CATEGORY_LIST;
      payload: any;
    };
