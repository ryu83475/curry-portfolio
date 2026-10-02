"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";
import axios from "axios";
// import { useNavigate } from "react-router-dom";  これはnext/navigationに直す
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

type LoginUserContextType = {
  isLogined: boolean;
  setIsLogined: Dispatch<SetStateAction<boolean>>;

  loginUser: string;
  setLoginUser: Dispatch<SetStateAction<string>>;

  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;

  token: string | undefined;
  setToken: Dispatch<SetStateAction<string | undefined>>;
};

export const LoginUserContext = createContext<LoginUserContextType | undefined>(
  undefined,
);

export const LoginUserProvider = (props: Props) => {
  const router = useRouter();
  const { children } = props;
  const [isLogined, setIsLogined] = useState(false);
  const [loginUser, setLoginUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(Cookies.get("token"));

  useEffect(() => {
    if (token) {
      setIsLogined(true);
      axios.defaults.headers.common["Authorization"] = `Token ${token}`;

      setLoading(false);
    }
  }, [token]);

  return (
    <LoginUserContext.Provider
      value={{
        isLogined,
        setIsLogined,
        loginUser,
        setLoginUser,
        loading,
        setLoading,
        token,
        setToken,
      }}
    >
      {children}
    </LoginUserContext.Provider>
  );
};

// LoginUserContextがundefinedではないことをtypescriptに知らせる
export const useLoginUserContext = () => {
  const context = useContext(LoginUserContext);
  if (!context) {
    throw new Error("グローバルなデータはプロバイダーの中で取得して下さい。");
  }
  return context;
};
