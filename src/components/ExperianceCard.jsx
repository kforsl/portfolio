import React, { useEffect, useState } from "react";

function ExperianceCard({ experience, index }) {
  const [position, setPosition] = useState("");
  useEffect(() => {
    index % 2 === 0
      ? setPosition("md:border-r-2 md:pr-4 md:-mr-px")
      : setPosition("md:border-l-2 md:pl-4 md:-ml-px");
  }, []);

  return (
    <article className={`relative mb-8 mt-auto md:row-span-2 ${position}`}>
      <h2 className="mb-1 font-inter text-lg">
        <span> {experience.startDate} </span>-
        <span> {experience.endDate} </span>|<span> {experience.type} </span>
      </h2>
      <h3 className="mb-1 font-krona text-sm">{experience.company}</h3>
      <div className="absolute left-0 h-0.5 w-full bg-white"></div>
      <p className="mb-1 mt-2 font-inter">{experience.description}</p>
      <ul className="list-disc pl-8 font-inter">
        {experience.list.map((item) => {
          return <li key={item}> {item} </li>;
        })}
      </ul>
    </article>
  );
}

export default ExperianceCard;
