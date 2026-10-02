"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SuccessPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="relative md:h-[calc(100vh-160px)] h-[calc(100vh-80px)]">
        <div className="absolute left-0 bottom-20 z-0">
          <Image
            src={"/curryshop/success/successbgimage1.png"}
            alt="決済完了画面装飾1"
            // fill
            width={400}
            height={400}
            loading="eager"
            // unoptimized
            sizes="33vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute right-0 bottom-0 z-0">
          <Image
            src={"/curryshop/success/successbgimage2.png"}
            alt="決済完了画面装飾2"
            // fill
            width={400}
            height={400}
            loading="eager"
            // unoptimized
            sizes="33vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute right-0 top-0 z-0">
          <Image
            src={"/curryshop/success/successbgimage3.png"}
            alt="決済完了画面装飾3"
            // fill
            width={400}
            height={400}
            loading="eager"
            // unoptimized
            sizes="33vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative mt-16">
            <Image
              src={"/curryshop/success/successbgimagemain.png"}
              alt="決済完了画面メイン画像"
              // fill
              width={600}
              height={600}
              loading="eager"
              // unoptimized
              sizes="33vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center md:gap-8 gap-4 md:pt-32 pt-16">
              <h1 className="text-xl md:text-4xl text-orange-900 text-center font-bold">
                お支払いが完了しました
              </h1>
              <h2 className="text-xl md:text-2xl text-lime-800 text-center font-bold">
                ご注文ありがとうございます
              </h2>
              <Link
                href="/"
                className="w-4/5 text-center bg-yellow-700 text-white font-bold text-lg p-2 rounded-lg"
              >
                ホームへ戻る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
