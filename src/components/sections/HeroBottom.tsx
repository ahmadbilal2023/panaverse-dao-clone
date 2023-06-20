import React from "react";
import { Button } from "../shared/Button";
import Wrapper from "../shared/Wrapper";

const Herobottom = () => {
  return (
    <div className="mt-32">
      <Wrapper>
        <div className="flex-1 space-y-2 md:space-y-3">
          <p className="text-[#00616C] font-semibold text-sm mt-8 md:mt-0">
            Program of Studies
          </p>
          <h1 className=" text-2xl leading-7 md:text-4xl font-bold md:leading-[60px]">
            Core Courses (Common in All Specializations):
          </h1>
          <p className="text-sm md:text-base">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <Button text="Learn more" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Herobottom;
