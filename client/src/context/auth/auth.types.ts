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

export type AuthState = {
  registerForm: RegisterForm;
  loginForm: LoginForm;
};

export type AuthContext = {
  state: AuthState;
  user: any;
  loading: any;
  handleRegisterChange: (e: any) => void;
  handleLoginChange: (e: any) => void;
  handleRegisterSubmit: (e: any) => Promise<void>;
  handleLoginSubmit: (e: any) => Promise<void>;
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
    };
