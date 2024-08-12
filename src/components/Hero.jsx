import React, { useEffect, useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Hero({ executeScroll }) {
  const [showChevron, setShowChevron] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setShowChevron(false);
      } else {
        setShowChevron(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="hero" className="flex h-svh flex-col justify-center px-4">
      <article className="text-center font-inter text-xl text-white md:text-2xl lg:text-3xl">
        <h2 className="mb-2 xl:mb-4">Hej mitt namn är</h2>
        <h1 className="mb-4 font-krona tracking-[.5rem] text-primary md:tracking-[.7rem] lg:text-4xl xl:mb-8 xl:tracking-[.9rem]">
          KIM FORSLUND
        </h1>
        <h3 className="mb-4 xl:mb-8">
          Jag är en studerande frontendutvecklare
        </h3>
        <h3 className="mb-2 xl:mb-4">Välkommen att kolla in mina</h3>
        <button
          onClick={() => executeScroll("projects")}
          className="mb-16 cursor-pointer tracking-wider text-primary underline transition duration-300 hover:text-primary-dark"
        >
          Projekt!
        </button>
        <ul className="flex justify-center gap-8 px-8 text-center text-base text-white">
          <li className="hover:text-primary">
            <a
              href="https://www.linkedin.com/in/kim-forslund-527a1128a/"
              target="_blank"
            >
              <figure>
                <FaLinkedinIn size={"32px"} className="mx-auto" />
                <figcaption className="font-inter max-xl:hidden">
                  LinkedIn
                </figcaption>
              </figure>
            </a>
          </li>
          <li className="hover:text-primary">
            <a href="https://github.com/kforsl" target="_blank">
              <figure>
                <FaGithub size={"32px"} className="mx-auto" />
                <figcaption className="font-inter max-xl:hidden">
                  Github
                </figcaption>
              </figure>
            </a>
          </li>
        </ul>
      </article>

      {showChevron && (
        <BsChevronCompactDown
          size={"48px"}
          color={"white"}
          className="absolute bottom-12 left-1/2 top-auto -translate-x-1/2 animate-bounce duration-1000 xl:bottom-4"
          onClick={() => executeScroll("about")}
        />
      )}
    </section>
  );
}

export default Hero;
