import Experience from "./Experience";
import Title from "./Title";
import { about } from "../data/data";
import Skill from "./Skill";

function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-1000 bg-grayish p-4 lg:rounded-xl lg:p-8"
    >
      <Title title={"Om Mig"} />
      <article className="mb-8 grid grid-cols-1 gap-4 font-inter text-white lg:grid-cols-6">
        <p className="lg:col-span-4">{about.aboutMe}</p>
        <section className="lg:col-span-2">
          <article>
            <h3 className="mb-2 text-center text-2xl">Skills</h3>
            <ul className="flex flex-wrap justify-center gap-4">
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
