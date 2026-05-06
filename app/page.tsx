import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ProjectsSection from "@/components/ProjectsSection";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <ProjectsSection />
        <Process />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}