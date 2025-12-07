import { Cart } from "@components/ui/cart";
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <Cart className="flex justify-center items-center h-52 w-2xl">
        <h1 className="text-4xl md:text-5xl font-InterBlack font-black mb-4 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-bounce">
          Loading
        </h1>
      </Cart>
    </div>
  );
};

export default Loading;
