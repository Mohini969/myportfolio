
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Work from "./components/Work/Work";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-shell">
      <div className="ambient-field"></div>
      <div className="absolute inset-0 app-grid"></div>
      <div className="noise-layer"></div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;
