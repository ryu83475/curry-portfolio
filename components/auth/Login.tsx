"use client";
import React, { useState } from "react";
import useLogin from "../hooks/useLogin";
import Link from "next/link";

const Login = () => {
  const { login } = useLogin();
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleClickLogin = () => {
    login(user);
  };

  return (
    <div className="flex justify-center items-center md:h-[calc(100vh-160px)] h-[calc(100vh-80px)] w-full bg-amber-100">
      <div className="flex flex-col w-100 h-[540px] items-center gap-12 rounded-2xl p-16 rounded rounded-2xl border border-orange-300 bg-white shadow-lg">
        <h1 className="text-4xl text-orange-900">ログイン</h1>
        <div className="flex flex-col gap-2 w-full">
          <div>
            <label htmlFor="username" className="text-orange-900">
              ユーザー名
            </label>
            <input
              className="border border-orange-300 w-full h-12 rounded-lg p-2"
              required
              name="username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-orange-900">
              パスワード
            </label>
            <input
              className="border border-orange-300 w-full h-12 rounded-lg p-2"
              required
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white w-full h-10 rounded"
            onClick={handleClickLogin}
          >
            ログイン
          </button>
          <Link
            className="bg-orange-800 hover:bg-orange-900 text-white w-full h-10 rounded py-2"
            href="/auth/register"
          >
            <p className="text-white w-full text-center">新規登録はこちら</p>
          </Link>
          <Link
            className="bg-lime-800 hover:bg-lime-900 text-white w-full h-10 rounded py-2"
            href="/"
          >
            <p className="text-white w-full text-center">ホームへ</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
