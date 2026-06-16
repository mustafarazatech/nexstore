import {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from "react";
import type { AuthContext, AuthState } from "./auth.types";
import { authReducer } from "./auth.reducer";
import { AUTH_ACTIONS } from "./auth.action";
import { apiGet, apiPost } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../utils/toast";
type User = {
  id: string;
  role: string;
};

export const initialState: AuthState = {
  registerForm: {
    name: "",
    email: "",
    password: "",
  },
  loginForm: {
    email: "",
    password: "",
  },
  profileObj: {
    mobileNo: "",
    address: "",
    city: "",
    stateName: "",
    pinCode: "",
  },
  profileList: [],
};
const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    dispatch({
      type: AUTH_ACTIONS.HANDLE_REGISTER_CHANGE,
      payload: {
        key: e.target.name as any,
        value: e.target.value,
      },
    });
  };
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    dispatch({
      type: AUTH_ACTIONS.HANDLE_LOGIN_CHANGE,
      payload: {
        key: e.target.name as any,
        value: e.target.value,
      },
    });
  };
  const handleRegisterSubmit = async (e: any) => {
    try {
      e.preventDefault();
      // console.log(state.authForm);
      const { name, email, password } = state.registerForm;
      const body = {
        name,
        email,
        password,
      };
      const data = await apiPost("api/user/user-register", body);
      console.log(data);
      if (data.success) {
        showSuccessToast(data.message);
        navigate("/login");
      }
    } catch (error: any) {
      showErrorToast(error.message);
    }
    // navigate("/");
  };
  const handleLoginSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { email, password } = state.loginForm;
      const body = {
        email,
        password,
      };
      const data = await apiPost("api/user/user-login", body);
      if (data.success) {
        showSuccessToast(data.message);
        setUser(data.user);
        navigate("/");
      }
      // console.log(data);
    } catch (error: any) {
      showErrorToast(error.message);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await apiGet("api/auth/me");

        setUser(data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const handleProfileChange = (e: any) => {
    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    dispatch({
      type: AUTH_ACTIONS.HANDLE_PROFILE_CHANGE,
      payload: { key: name, value: value },
    });
  };
  const handleProfileSubmit = async (e: any) => {
    e.preventDefault();
    const { mobileNo, address, pinCode, stateName } = state.profileObj;
    const payload = {
      mobileNo,
      address,
      pinCode,
      stateName,
    };

    const data = await apiPost("api/user/create-profile", payload);
    console.log(data);
    getProfile();
  };
  const getProfile = async () => {
    const data = await apiGet("api/user/get-profile");
    // console.log(data);
    dispatch({
      type: AUTH_ACTIONS.GET_USER_PROFILE,
      payload: data.profile,
    });
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        state,
        handleRegisterChange,
        handleLoginChange,
        handleRegisterSubmit,
        handleLoginSubmit,
        handleProfileChange,
        handleProfileSubmit,
        getProfile,
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
