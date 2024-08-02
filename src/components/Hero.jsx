import React from "react";

function Hero({ executeScroll }) {
  return (
    <section id="hero" className="max-h-svh min-h-60 py-60">
      <article className="mx-auto min-h-fit max-w-1000 py-60 text-white">
        <h1 className="mb-4 text-pretty font-inter text-4xl">
          Hej mitt namn är
          <span className="ml-4 text-nowrap font-krona tracking-[.8rem] text-primary">
            KIM FORSLUND
          </span>
        </h1>
        <h2 className="mb-4 font-inter text-xl">
          Jag är en studerande frontendutvecklare
        </h2>
        <h2 className="mb-4 font-inter text-xl">
          Välkommen att kolla in några av mina
          <button
            onClick={() => executeScroll("projects")}
            className="ml-2 cursor-pointer text-primary underline transition duration-300 hover:text-primary-dark"
          >
            Projekt!
          </button>
        </h2>
      </article>
    </section>
  );
}

export default Hero;
