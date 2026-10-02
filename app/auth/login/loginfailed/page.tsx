import LoginFailed from "@/components/auth/LoginFailed";
import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <LoginFailed />
    </>
  );
};

export default page;
