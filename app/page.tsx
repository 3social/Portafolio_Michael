import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { CaseStudies } from "@/components/CaseStudies";
import { Stack } from "@/components/Stack";
import { Closing } from "@/components/Closing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Metrics />
      <CaseStudies />
      <Stack />
      <Closing />
      <Footer />
    </>
  );
}
