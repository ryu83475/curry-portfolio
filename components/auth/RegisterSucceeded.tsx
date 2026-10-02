"use client";
import Link from "next/link";
import { useLoginUserContext } from "../provider/LoginUserProvider";

const RegisterSucceeded = () => {
  const { loginUser } = useLoginUserContext();
  return (
    <div className="flex justify-center items-center md:h-[calc(100vh-160px)] h-[calc(100vh-80px)] w-full bg-amber-100">
      <div className="flex flex-col w-100 h-[540px] items-center gap-12 rounded-2xl p-16 rounded rounded-2xl border border-orange-300 bg-white shadow-lg">
        <h1 className="text-2xl text-orange-900">登録完了しました。</h1>
        <h1 className="text-2xl text-orange-700">お名前：{loginUser}</h1>
        <div className="flex flex-col justify-end items-center gap-4 w-full h-full">
          <Link
            className="bg-orange-800 hover:bg-orange-900 text-white w-full h-10 rounded py-2"
            href="/auth/login"
          >
            <p className="text-white w-full text-center">ログインはこちら</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterSucceeded;
