"use client";
import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import Image from "next/image";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
); // Replace with your Stripe publishable key

const PaymentPage = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  useEffect(() => {
    const storedClientSecret = sessionStorage.getItem("clientSecret");
    setClientSecret(storedClientSecret);
  }, []);

  const [options, setOptions] = useState<StripeElementsOptions | undefined>();

  useEffect(() => {
    if (clientSecret) {
      setOptions({
        clientSecret,
        appearance: {
          theme: "stripe",
        },
      });
    }
  }, [clientSecret]);

  return (
    <div className="relative h-screen">
      <div className="absolute left-10 top-20 z-0">
        <Image
          src={"/curryshop/bgitem2.png"}
          alt="支払い画面装飾2"
          // fill
          width={116}
          height={210}
          loading="eager"
          // unoptimized
          sizes="33vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute left-0 bottom-0 z-0">
        <Image
          src={"/curryshop/bgitem1.png"}
          alt="支払い画面装飾1"
          // fill
          width={423}
          height={225}
          loading="eager"
          // unoptimized
          sizes="33vw"
          className="object-cover object-center"
        />
      </div>
      <div className="relative md:ml-60 md:my-8 md:mr-8 p-8 md:rounded-3xl bg-amber-100 z-10">
        <h1 className="text-xl md:text-2xl text-orange-900 text-center font-bold mb-4">
          お支払い内容をご確認ください
        </h1>
        {options ? (
          <Elements stripe={stripePromise} options={options}>
            <PaymentForm />
          </Elements>
        ) : (
          <p>お支払い情報を読み込み中...</p>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
