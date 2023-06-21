import Hero from "@/components/sections/Hero";

import QuarterBlock from "@/components/sections/QuarterBlock";
import Image from "next/image";
import CoreTracks from "../components/sections/CoreTracks";
import SpecilizedTracks from "@/components/sections/SpecilizedTracks";

export default function Home() {
  return (
    <main>
      <Hero />
      <CoreTracks />
      <QuarterBlock />
      <SpecilizedTracks/>
    </main>
  );
}
