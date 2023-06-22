import React from "react";
import Wrapper from "../shared/Wrapper";
import QuarterBox from "@/components/shared/QuarterBox";

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
            <QuarterBox header={item.header} description={item.description} number={item.number} />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default QuarterBlock;
