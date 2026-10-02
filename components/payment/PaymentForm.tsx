"use client";
import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { examples } from "@/data/examples-payment";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: process.env.NEXT_PUBLIC_PAYMENT_SUCCESS_URL!,
      },
    });

    if (error) {
      setMessage(error.message || "An error occurred.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8">
      <div className="w-full">
        <PaymentElement />
      </div>
      <div className="border rounded rounded-2xl border-orange-300 px-4 py-8 flex flex-col">
        <h1 className="text-orange-900 text-lg font-bold py-4">注文内容</h1>
        <ul className="py-4">
          {examples.map((example) => (
            <li key={example.id}>
              <div className="flex [&_p]:text-orange-900">
                <p className="w-40">{example.name}</p>
                <p className="w-20">{example.quantity}</p>
                <p className="w-20">¥{example.amount}</p>
              </div>
            </li>
          ))}
        </ul>
        <hr className="border-orange-300 my-4" />
        <ul className="[&_p]:text-orange-900">
          <li className="flex">
            <p className="w-60">小計</p>
            <p>
              ¥
              {examples
                .reduce((sum, item) => sum + item.amount * item.quantity, 0)
                .toLocaleString()}
            </p>
          </li>
          <li className="flex">
            <p className="w-60">消費税(8%)</p>
            <p>
              ¥
              {(
                examples.reduce(
                  (sum, item) => sum + item.amount * item.quantity,
                  0,
                ) * 1.08
              ).toLocaleString()}
            </p>
          </li>
          <li className="flex">
            <p className="w-60">送料</p>
            <p>¥400</p>
          </li>
        </ul>
        <hr className="border-orange-300 my-4" />
        <div className="flex">
          <h2 className="w-60 text-lg text-orange-900 font-bold">合計金額</h2>
          <p className="text-orange-900">
            ¥
            {(
              examples.reduce(
                (sum, item) => sum + item.amount * item.quantity,
                0,
              ) *
                1.08 +
              400
            ).toLocaleString()}
          </p>
        </div>
        <div className="h-full flex flex-col justify-end mt-16">
          <button
            className="w-full text-center bg-orange-500 text-white font-bold text-lg p-2 rounded-lg"
            disabled={!stripe || loading}
          >
            {loading ? "処理中..." : "注文を確定する"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
