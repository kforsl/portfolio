import Experience from "./Experience";
import Title from "./Title";
import { about } from "../data/data";

function About() {
  return (
    <section
      id="about"
      className="mx-auto mb-10 max-w-1000 rounded-2xl bg-grayish p-10"
    >
      <Title title={"Om Mig"} bg={"grayish"} />
      <article className="mb-6 grid grid-cols-5 gap-16 text-white">
        <p className="col-span-3 font-inter">{about.aboutMe}</p>
        <section className="col-span-2 flex justify-center gap-8">
          <article className="basis-1/2">
            <h3 className="mb-2 text-center font-krona text-xl"> Dev Tools </h3>
            <ul className="flex flex-wrap justify-center gap-2 font-inter text-base">
              {about.tools.map((item) => {
                return <li key={item}> {item} </li>;
              })}
            </ul>
          </article>
          <article className="basis-1/2">
            <h3 className="mb-2 text-center font-krona text-xl"> Språk </h3>
            <ul className="flex flex-wrap justify-center gap-2 font-inter text-base">
              {about.lang.map((item) => {
                return <li key={item}> {item} </li>;
              })}
            </ul>
          </article>
        </section>
      </article>
      <Experience />
    </section>
  );
}

export default About;
