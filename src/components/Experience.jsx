import ExperianceCard from "./ExperianceCard";
import { useEffect, useState } from "react";
import Title from "./Title";
import { experience } from "../data/data";
import { IoMdDownload } from "react-icons/io";

const openCVinNewTab = () => {
  window.open("../assets/CV.pdf", "_blank");
};

function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(experience);
  }, []);

  return (
    <section className="relative">
      <Title title={"Erfarenheter"} />
      <button
        className="group absolute left-auto right-6 top-0 bg-grayish px-2 text-white"
        onClick={openCVinNewTab}
      >
        <p className="absolute left-1/2 top-full -translate-x-1/2 text-nowrap opacity-0 transition duration-300 group-hover:opacity-100">
          Öppna CV
        </p>
        <IoMdDownload size={"32px"} className="group-hover:animate-pulse" />
      </button>
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
