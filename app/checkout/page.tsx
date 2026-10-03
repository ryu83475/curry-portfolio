import CheckoutForm from "@/components/checkout/CheckoutForm";
import Header from "@/components/Header";
import ItemNotfound from "@/components/ItemNotfound";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) => {
  const { product } = await searchParams;

  if (!product) {
    return (
      <>
        <Header />
        <ItemNotfound />
      </>
    );
  }

  return (
    <>
      <Header />
      <CheckoutForm id={product} />
    </>
  );
};

export default page;
