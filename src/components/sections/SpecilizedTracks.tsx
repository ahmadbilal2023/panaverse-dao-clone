import React from "react";
import Wrapper from "../shared/Wrapper";
import QuarterBox from "../shared/QuarterBox";

const SpecilizedTracks = () => {
  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div>
          <h2 className="text-2xl lg:text-5xl font-bold whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-3 text-sm md:text-xl text-slate-600">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>
        <div className="mt-10 flex gap-x-6 gap-y-8">
          {/* Content Left */}
          <div className="shadow-xl basis-8/12 rounded-xl border-slate-200 border py-8 px-8">
            <h4 className="text-teal-700 text-lg">Specialized Program</h4>
            <h3 className="text-2xl font-bold">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h3>
            <p className="text-lg text-slate-600 mt-3">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </p>
            <button className="text-teal-700 text-xl mt-4 flex gap-x-2 underline underline-offset-2">
              Learn more
              <svg
                className="mt-2.5"
                width="10"
                height="13"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  stroke-width="2"
                />
              </svg>
            </button>
            <div className="flex gap-4 mt-10">
              <QuarterBox
                header="Quarter IV"
                description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
                number={4}
                haveBorder={false}
              />
              <QuarterBox
                header="Quarter V"
                description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
                number={5}
                haveBorder={false}
              />
            </div>
          </div>
          {/* Content Right */}
          <div className="px-4 py-6 bg-gray-200 basis-4/12">
            <div className="flex gap-x-4 items-center">
              <div className="px-8 py-8 bg-green-400 w-24 h-20"></div>
              <div>
                <h4 className="text-[#00616C] font-medium ">
                  Specialized Program
                </h4>
                <h3 className="text-xl font-semibold">
                  Web 3.0 (Blockchain) and Metaverse Specialization
                </h3>
              </div>
            </div>
            <div className="h-1 w-96 mt-6 bg-black/10"></div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecilizedTracks;
