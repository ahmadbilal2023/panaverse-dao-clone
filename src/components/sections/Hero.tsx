import Image from "next/image";
import Wrapper from "../shared/Wrapper";

import web3 from "/public/web 3.png";
import { Button } from "../shared/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center mt-16">
          {/* left side */}
          <div className="flex-1 space-y-2 md:space-y-4">
            <p className="text-[#00616C] font-semibold text-sm mt-8 md:mt-0 underline underline-offset-4">
              <Link target="_blank" href={"https://www.piaic.org/"}>
                Presidential Initiative for Artificial Intelligence and
                Computing{" "}
              </Link>
              (PIAIC)
            </p>
            <h1 className=" text-2xl leading-7 md:text-5xl font-mono font-bold md:leading-[60px]">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="text-sm text-slate-600 md:text-xl">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="text-sm text-slate-600 md:text-xl">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <Button text="Learn more" />
          </div>
          {/* right side */}
          <div className="flex-1">
            <Image
              src={web3}
              alt="hero"
              className="rounded-lg h-72 w-72 md:h-[400px] md:w-[480px] ml-auto mt-16 md:mt-0 object-contain"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
