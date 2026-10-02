import Image from "next/image";
import Link from "next/link";
import React from "react";
import { examples } from "@/data/examples";

const Items = () => {
  return (
    <>
      <section
        className="w-full h-fit py-10 max-xs:px-[20px] relative bg-amber-100"
        id="items"
      >
        <div className="flex flex-col items-center gap-10 py-16">
          <p className="text-2xl font-bold">商品一覧</p>
        </div>
        <ul className="flex flex-col gap-4 md:grid md:grid-cols-5 px-24">
          {examples.map((example) => (
            <li key={example.id}>
              <Link
                href={`/products/${example.id}`}
                className="flex flex-col gap-2"
              >
                <div className="w-full h-max md:shrink-0 relative">
                  <Image
                    src={example.url}
                    alt={example.alt}
                    width={1600}
                    height={900}
                    loading="eager"
                    sizes="33vw"
                    className="w-full h-auto object-cover object-center"
                  />
                </div>
                <p className="text-sm text-center font-bold">{example.alt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Items;
