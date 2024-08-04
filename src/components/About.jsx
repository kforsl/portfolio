import Experience from "./Experience";
import Title from "./Title";
import { about } from "../data/data";
import Skill from "./Skill";

function About() {
  return (
    <section
      id="about"
      className="mx-auto mb-10 max-w-1000 rounded-2xl bg-grayish p-10"
    >
      <Title title={"Om Mig"} bg={"grayish"} />
      <article className="mb-6 grid grid-cols-6 gap-16 text-white">
        <p className="col-span-4 my-auto font-inter">{about.aboutMe}</p>
        <section className="col-span-2 flex justify-center gap-8">
          <article>
            <h3 className="mb-4 text-center font-krona text-xl"> Skills </h3>
            <ul className="flex flex-wrap justify-center gap-4 font-inter text-base">
              {about.skill.map((item) => {
                return (
                  <Skill name={item.name} icon={item.icon} key={item.name} />
                );
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
