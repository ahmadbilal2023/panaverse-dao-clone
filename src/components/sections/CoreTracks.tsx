import React from "react";
import { Button } from "../shared/Button";
import Wrapper from "../shared/Wrapper";

const CoreTracks = () => {
  const paragraph = "Core Courses \n (Common in All Specializations):";
  return (
    <section className="mt:16 lg:mt-32">
      <Wrapper>
        <div className="max-w-screen-md">
          <h4 className="text-[#00616C] font-semibold text-sm lg:text-lg mt-4">
            Program of Studies
          </h4>
          <h2 className="text-2xl lg:text-5xl font-bold whitespace-pre-line">
            {paragraph}
          </h2>
          <p className="mt-3 text-sm md:text-xl text-slate-600">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <Button text="Learn More"/>
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;
