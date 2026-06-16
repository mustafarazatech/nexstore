import { AUTH_ACTIONS } from "./auth.action";
import type { Action, AuthState } from "./auth.types";

export const authReducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case AUTH_ACTIONS.HANDLE_REGISTER_CHANGE:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          [action.payload.key]: action.payload.value,
        },
      };
    case AUTH_ACTIONS.HANDLE_LOGIN_CHANGE:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [action.payload.key]: action.payload.value,
        },
      };
    case AUTH_ACTIONS.HANDLE_PROFILE_CHANGE:
      return {
        ...state,
        profileObj: {
          ...state.profileObj,
          [action.payload.key]: action.payload.value,
        },
      };
    case AUTH_ACTIONS.GET_USER_PROFILE:
      return {
        ...state,
        profileList: action.payload,
      };

    // case AUTH_ACTIONS.RESET:
    //   return initialState;

    default:
      return state;
  }
};
