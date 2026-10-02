import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <>
      <section
        className="relative w-full pt-10 pb-4 md:py-10 aspect-[1600/900] bg-amber-100"
        id="contact"
      >
        <Image
          src={"/curryshop/contact-base.png"}
          alt="背景"
          fill
          loading="eager"
          sizes="33vw"
          className="object-cover object-center"
        />

        <div className="relative flex flex-col md:justify-end h-full items-center z-10 gap-4 md:gap-10 pt-16">
          <p className="text-2xl md:text-4xl font-bold">株式会社サンプル食品</p>
          <div>
            <p className="text-4xl md:text-6xl">01-2345-6789</p>
            <p className="text-4xl md:text-6xl">01-2345-6789</p>
          </div>

          <p className="text-xl">
            〒123-4567
            <br className="md:hidden" />
            東京都夢見区空見1丁目2-3
            <br className="md:hidden" />
            月見ビル５階
          </p>
          <div className="relative w-60 h-20 md:w-120 md:h-30">
            <Image
              src={"/curryshop/logo2.png"}
              alt="ロゴ"
              fill
              loading="eager"
              sizes="33vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
