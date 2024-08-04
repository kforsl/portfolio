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
    <section>
      <Title title={"Erfarenheter"} />
      <section
        className={`mx-auto grid grid-cols-2 text-white grid-rows-${experiences.length + 1} gap-y-4 divide-white`}
      >
        <div className="col-start-2 row-start-1 divide-x"></div>
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
