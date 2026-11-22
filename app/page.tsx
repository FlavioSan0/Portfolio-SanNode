import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Products from "@/components/home/Products";
import ProjectEditorial from "@/components/home/ProjectEditorial";
import WorkFronts from "@/components/home/WorkFronts";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkFronts />
        <Products />
        <ProjectEditorial />
        <HowItWorks />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
