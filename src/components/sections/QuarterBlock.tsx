import React from "react";
import Wrapper from "../shared/Wrapper";

const QuarterArr = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1,
  },
  {
    header: "Quarter II",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Appsand APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2,
  },
  {
    header: "Quarter III",
    description:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3,
  },
];

const QuarterBlock = () => {
  return (
    <Wrapper>
      <div className="my-20 flex flex-col md:flex-row gap-x-8 gap-y-8">
        {QuarterArr.map((item) => {
          return (
            <div className="border rounded-md flex-1 relative flex flex-col justify-center px-8 py-12">
              <h4 className="font-bold text-lg">{item.header}</h4>
              <p className="mt-2 text-slate-600">{item.description}</p>
              <span className="absolute -top-8 right-10 text-[170px] font-bold -z-10 text-gray-200/40">
                {item.number}
              </span>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default QuarterBlock;
