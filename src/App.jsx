import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

function App() {
  const executeScroll = (id) => {
    document.querySelector(`#${id}`).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gradient-to-br from-grayish via-black via-65% to-black">
      <Navigation executeScroll={executeScroll} />
      <Hero executeScroll={executeScroll} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
