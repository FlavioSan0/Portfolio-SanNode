import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import About from "@/components/About";

import ProjectEditorial from "@/components/home/ProjectEditorial";
import WorkFronts from "@/components/home/WorkFronts";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <WorkFronts />
        <ProjectEditorial />
        <About />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
