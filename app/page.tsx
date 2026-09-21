import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/home/Products";
import ProjectEditorial from "@/components/home/ProjectEditorial";
import WorkFronts from "@/components/home/WorkFronts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkFronts />
        <Products />
        <ProjectEditorial />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
