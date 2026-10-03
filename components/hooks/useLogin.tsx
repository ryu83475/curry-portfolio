"use client";
import axios from "axios";
import { useLoginUserContext } from "../provider/LoginUserProvider";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type UserType = {
  username: string;
  password: string;
};

const useLogin = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const { setLoginUser, setIsLogined, setToken, setLoading } =
    useLoginUserContext();
  const router = useRouter();

  const login = (user: UserType) => {
    const endpoint = `${API_URL}/auth/`;
    // const endpoint = `/auth/`;
    const queries = { username: user.username, password: user.password };
    setLoading(true);
    axios
      .post(endpoint, queries)
      .then((res) => {
        if (Object.keys(res.data).length > 0) {
          Cookies.set("token", res.data.token, {
            expires: 7,
          });
          setToken(res.data.token);
          setLoginUser(user.username);
          setIsLogined(true);

          router.push("/");
        } else {
          router.push("/auth/login/loginfailed");
        }
      })
      .catch((e) => {
        setLoginUser("");
        router.push("/auth/login/loginfailed");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { login };
};

export default useLogin;
