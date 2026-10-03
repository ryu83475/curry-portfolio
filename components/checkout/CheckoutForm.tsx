"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CheckoutForm = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState("USD"); // Default currency
  const [email, setEmail] = useState("example@email.com");
  const router = useRouter();
  const hardcodedAmount = 50000000;

  const handlePayClick = async (email: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/create-payment-intent/`,
        // "https://curry-oem-sample.duckdns.org/api/create-payment-intent/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: hardcodedAmount,
            currency: currency,
            user_email: email,
          }),
        },
      );

      const data = await response.json();
      if (data.clientSecret) {
        sessionStorage.setItem("clientSecret", data.clientSecret);
        router.push("/payment");
        // navigate("/payment", { state: { clientSecret: data.clientSecret } });
      } else {
        alert("Error creating payment intent.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating payment intent.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        className="relative w-full md:py-10 py-40 px-6 bg-gray-100 flex justify-center md:h-[calc(100vh-160px)] h-[calc(100vh-80px)]"
        id="checkout"
        // md:h-[calc(100vh-160px)]h-[calc(100vh-80px)]
      >
        <div className="w-100 flex flex-col items-center gap-2 bg-white shadow h-max py-8 px-4 rounded-lg shadow-lg">
          <h1 className="font-bold text-2xl tracking-widest">お支払い</h1>
          <p className="text-sm">
            <strong>金額:</strong>
            {hardcodedAmount.toLocaleString()}
            <span>円</span>
          </p>
          <form
            className="flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              if (!email || email.trim() == "") {
                return;
              }

              handlePayClick(email);
            }}
          >
            <label htmlFor="email" className="text-sm pb-2">
              メールアドレス
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              name="email"
              id="email"
              type="email"
              className="border w-80 h-10 rounded mb-6 p-2"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 hover:bg-orange-600 text-white w-80 h-10 rounded"
            >
              {loading ? "読み込み中..." : "支払う"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CheckoutForm;
