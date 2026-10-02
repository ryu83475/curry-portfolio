"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useLoginUserContext } from "../provider/LoginUserProvider";

type UserType = {
  username: string;
  password: string;
};

export const useRegister = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const { setLoginUser } = useLoginUserContext();
  const register = (user: UserType) => {
    const endpoint = `${API_URL}/api/users/`;
    // const endpoint = `/api/users/`;
    const queries = { username: user.username, password: user.password };
    axios
      .post(endpoint, queries)
      .then((res) => {
        if (Object.keys(res.data).length > 0) {
          setLoginUser(user.username);
          router.push("/auth/register/registersucceeded");
        } else {
          console.error("登録失敗");
          router.push("/auth/register/registerfailed");
        }
      })
      .catch((e) => {
        console.error(e);
        console.error("e.response", e.response?.data);
        router.push("/auth/register/registerfailed");
      });
  };
  return { register };
};
