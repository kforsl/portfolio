import React from "react";

function Hero({ executeScroll }) {
  return (
    <section id="hero" className="flex h-svh flex-col justify-center px-4">
      <article className="text-center font-inter text-xl text-white md:text-2xl lg:text-3xl xl:text-4xl">
        <h2 className="mb-2 xl:mb-4">Hej mitt namn är</h2>
        <h1 className="mb-4 font-krona tracking-[.5rem] text-primary md:tracking-[.7rem] xl:mb-8 xl:tracking-[.9rem]">
          KIM FORSLUND
        </h1>
        <h3 className="mb-4 xl:mb-8">
          Jag är en studerande frontendutvecklare
        </h3>
        <h3 className="mb-2 xl:mb-4">Välkommen att kolla in mina</h3>
        <button
          onClick={() => executeScroll("projects")}
          className="cursor-pointer tracking-wider text-primary underline transition duration-300 hover:text-primary-dark"
        >
          Projekt!
        </button>
      </article>
    </section>
  );
}

export default Hero;
