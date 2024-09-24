"use client";
import React from "react";
import { useRouter } from "next/navigation";
const orderProduct = () => {
  const router = useRouter();
  const handleclick = () => {
    console.log("placing your order");
    router.push("/");
  };
  return (
    <div>
      <button onClick={handleclick}>Placeorder</button>
    </div>
  );
};

export default orderProduct;
