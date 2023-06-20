import React, { FC } from "react";

export const Button: FC<{ text: String }> = ({ text }) => {
  return (
    <button className="bg-[#00616C] text-white p-2 text-sm md:text-base md:py-3 md:px-6 rounded-full shadow-lg">
      {text}
    </button>
  );
};
