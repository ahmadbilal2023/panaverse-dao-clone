import Hero from "@/components/sections/Hero";
import Herobottom from "../components/sections/HeroBottom";
import QuarterBlock from "@/components/sections/QuarterBlock";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Herobottom />
      <QuarterBlock />
    </main>
  );
}
