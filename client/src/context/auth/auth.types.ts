import type { AUTH_ACTIONS } from "./auth.action";

export type RegisterForm = {
  name: string;
  email: string;
  password: string;
};
export type LoginForm = {
  email: string;
  password: string;
};
export type ProfileObj = {
  mobileNo: string;
  address: string;
  city: string;
  stateName: string;
  pinCode?: string;
};

export type AuthState = {
  registerForm: RegisterForm;
  loginForm: LoginForm;
  profileObj: ProfileObj;
  profileList: ProfileObj[];
};

export type AuthContext = {
  state: AuthState;
  user: any;
  loading: any;
  handleRegisterChange: (e: any) => void;
  handleLoginChange: (e: any) => void;
  handleRegisterSubmit: (e: any) => Promise<void>;
  handleLoginSubmit: (e: any) => Promise<void>;
  handleProfileSubmit: (e: any) => Promise<void>;
  handleProfileChange: (e: any) => void;
  getProfile: () => Promise<void>;
};

export type Action =
  | {
      type: typeof AUTH_ACTIONS.HANDLE_REGISTER_CHANGE;
      payload: {
        key: keyof RegisterForm;
        value: string;
      };
    }
  | {
      type: typeof AUTH_ACTIONS.HANDLE_LOGIN_CHANGE;
      payload: {
        key: keyof LoginForm;
        value: string;
      };
    }
  | {
      type: typeof AUTH_ACTIONS.GET_USER_PROFILE;
      payload: any;
    }
  | {
      type: typeof AUTH_ACTIONS.HANDLE_PROFILE_CHANGE;
      payload: {
        key: keyof ProfileObj;
        value: string;
      };
    };
