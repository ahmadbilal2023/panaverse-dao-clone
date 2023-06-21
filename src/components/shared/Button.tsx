import React, { FC } from "react";

export const Button: FC<{ text: String }> = ({ text }) => {
  return (
    <button className="bg-[#00616C] text-white p-2 text-sm md:text-base md:py-3 md:px-6 hover:bg-red-500 hover:shadow-lg hover:scale-105 duration-300 rounded-full shadow-lg">
      {text}
    </button>
  );
};
