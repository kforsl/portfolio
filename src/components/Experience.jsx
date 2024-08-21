import ExperianceCard from "./ExperianceCard";
import { useEffect, useState } from "react";
import Title from "./Title";
import { experience } from "../data/data";

function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(experience);
  }, []);

  return (
    <section className="relative">
      <Title title={"Erfarenheter"} />
      <section
        className={`mx-auto grid text-white md:grid-cols-2 md:grid-rows-${experiences.length + 1} md:gap-y-4`}
      >
        <div className="md:col-start-2 md:row-start-1"></div>
        {experiences.map((experience, index) => {
          return (
            <ExperianceCard
              experience={experience}
              key={experience.company}
              index={index}
            />
          );
        })}
      </section>
    </section>
  );
}

export default Experience;
