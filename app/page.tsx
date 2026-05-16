import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedBackground from "@/components/background/AnimatedBackground";

import Manifesto from "@/components/home/Manifesto";
import Problems from "@/components/home/Problems";
import ProjectEditorial from "@/components/home/ProjectEditorial";
import WorkMethod from "@/components/home/WorkMethod";
import BehindTheBuild from "@/components/home/BehindTheBuild";
import WorkFronts from "@/components/home/WorkFronts";

export default function Home() {
  return (
    <>
      <Header />
      <AnimatedBackground variant="hero" />

      <main>
        <Hero />
        <Manifesto />
        <Problems />
        <ProjectEditorial />
        <WorkMethod />
        <BehindTheBuild />
        <WorkFronts />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}