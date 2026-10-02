import Header from "@/components/Header";
import Detail from "@/components/products/Detail";
import React from "react";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  return (
    <>
      <Header />
      <Detail id={id} />
    </>
  );
};

export default page;
