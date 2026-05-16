import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedBackground from "@/components/background/AnimatedBackground";

import Problems from "@/components/home/Problems";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WorkMethod from "@/components/home/WorkMethod";
import WorkFronts from "@/components/home/WorkFronts";

export default function Home() {
  return (
    <>
      <Header />
      <AnimatedBackground variant="hero" />

      <main>
        <Hero />
        <Problems />
        <FeaturedProjects />
        <WorkMethod />
        <WorkFronts />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}