import Image from "next/image";
import React from "react";
import { examples } from "@/data/examples";
import Link from "next/link";
import ItemNotfound from "../ItemNotfound";

const Detail = ({ id }: { id: string }) => {
  const product = examples.find((example) => example.id === id);

  if (!product) {
    return (
      <>
        <ItemNotfound />
      </>
    );
  }

  return (
    <>
      <section
        className="relative w-full py-10 aspect-[1600/900] bg-gray-100"
        id="product-detail"
      >
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-base tracking-widest shadow bg-white px-16 py-4 rounded-full">
            開発事例
          </h1>
        </div>
        <div className="flex flex-col gap-16 p-16 md:flex-row items-center">
          {/* 商品画像 */}
          <div className="w-60 md:w-80 h-max md:shrink-0 relative">
            <Image
              src={product.url ?? ""}
              alt={product.name ?? ""}
              width={1600}
              height={900}
              loading="eager"
              sizes="33vw"
              className="w-full h-auto object-cover object-center"
            />
          </div>
          {/* 商品説明 */}
          <div className="w-full flex flex-col justify-start items-start gap-8">
            <p className="bg-orange-500 text-white font-bold px-8 rounded-full">
              事例:店舗のカレー
            </p>
            <h2 className="font-bold text-2xl">{product.name}</h2>
            <hr className="w-full border-gray-400" />
            <div>
              <p>
                <span className="font-bold text-4xl">400</span>
                <span className="font-bold text-xl pl-1">円</span>
                <span className="text-xl pl-2">税込</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-orange-500 text-xl">
                商品の魅力・こだわり
              </h3>
              <p>
                ここに商品詳細ここに商品詳細ここに商品詳細ここに商品詳細ここに商品詳細ここに商品詳細ここに商品詳細ここに商品詳細ここに商品詳細ここに商品詳細
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-orange-500 text-xl">販売元</h3>
              <p>サンプル株式会社</p>
            </div>

            <Link
              href={`/checkout?product=${product.id}`}
              className="bg-orange-500 px-16 py-2 rounded-full shadow-xl"
            >
              <span className="text-white">今すぐ購入</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
