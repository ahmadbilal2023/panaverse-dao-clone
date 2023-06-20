import React from "react";
import Wrapper from "../shared/Wrapper";

const QuarterBlock = () => {
  const dataArray = [
    {
      id: "1",
      name: "Quarter I",
      description: "CS-101: Object-Oriented Programming using TypeScript",
    },
    {
      id: "2",
      name: "Quarter II",
      description:
        "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    },
    {
      id: "3",
      name: "Quarter III",
      description:
        "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    },
  ];
  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid md:grid-cols-3 md:justify-between mt-28 gap-y-5 md:gap-y-0 p-4 md:p-0 ">
        {dataArray.map((item) => (
          <div
            key={item.id}
            className="h-[279px] w-full md:w-[360px] border border-slate-00 rounded-xl md:mb-10 md:mt-10 flex"
          >
            <div className="relative text-[1000%] text-right text-gray-300/20 w-full md:w-[360px] mr-10 font-semiboldbold ">
              {item.id}
            </div>
            <div className="absolute w-[300px] h-[279px] py-24 pl-3 md:ml-8 px-2">
              <div className="font-bold md:mb-3">{item.name}</div>
              <div className="text-sm md:text-base">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuarterBlock;
