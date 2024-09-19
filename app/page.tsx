import { Main } from "@/components/craft";
import CTA from "@/components/CTA";
import CTA2 from "@/components/CTA2";
import FAQ from "@/components/FAQ";
import Feature1 from "@/components/Feature1";
import Feature2 from "@/components/Feature2";
import Feature3 from "@/components/Features3";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Main>
        <Header />
        <Hero />
        <Feature1 />
        <Feature2 />
        <Feature3 />
        <CTA2 />
        <FAQ />
        <CTA />

        <Footer />
      </Main>
    </>
  );
}
