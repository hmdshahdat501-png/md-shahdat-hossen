import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Qualification from "../components/Qualification";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#0f1113] text-primary dark:text-gray-100 font-sans selection:bg-primary selection:text-white transition-colors duration-300">
      <Header />
      <main>
        <Hero sectionId="home" />
        <About sectionId="about" />
        <TechStack sectionId="tech" />
        <Skills sectionId="skills" />
        <Services sectionId="services" />
        <Qualification sectionId="qualification" />
        <Projects sectionId="projects" />
        <Testimonials sectionId="testimonials" />
        <Contact sectionId="contact" />
      </main>
      <Footer />
    </div>
  );
}


