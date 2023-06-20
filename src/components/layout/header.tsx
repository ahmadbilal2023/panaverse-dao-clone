import React from "react";
import Logo from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../../components/shared/Wrapper";

const Header = () => {
  return (
    <Wrapper>
      <header className="flex justify-between py-5 sticky top-0 items-center">
        {/* Logo */}
        <div>
          <div className="text-xl font-bold">
            <Image src={Logo} alt="panaverse dao" />
          </div>
        </div>
        {/* Navigation Bar */}
        <ul className="flex space-x-8 font-semibold underline underline-offset-4">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/courses"}>Courses</Link>
          </li>
        </ul>
      </header>
    </Wrapper>
  );
};

export default Header;
