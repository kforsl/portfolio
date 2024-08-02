import { FaHtml5, FaCss3Alt, FaReact, FaFigma } from "react-icons/fa";
import Button from "./Button";

function ProjectCard({ project, index }) {
  return index % 2 == 0 ? (
    <article className="grid grid-cols-9 gap-8">
      <figure className="col-span-4 overflow-hidden rounded-2xl">
        <img src="../src/assets/brb.jpg" alt="" />
      </figure>

      <section className="col-span-5 grid grid-cols-4 gap-4 rounded-2xl bg-grayish p-4 text-white">
        <h2 className="col-span-4 font-inter text-2xl">
          {project.projectName}
        </h2>
        <p className="col-span-3 font-inter">{project.description}</p>
        <div className="grid-col-2 grid justify-center gap-x-4">
          <h3 className="col-span-2 text-center font-inter text-xl">
            Tekniker
          </h3>
          <FaHtml5 size={"24px"} />
          <FaCss3Alt size={"24px"} />
          <FaReact size={"24px"} />
          <FaFigma size={"24px"} />
        </div>
        <div className="col-span-4 my-auto flex justify-around">
          <Button text={"Figma"} />
          <Button text={"Github"} />
          <Button text={"Live"} />
        </div>
      </section>
    </article>
  ) : (
    <article className="grid grid-cols-9 gap-8">
      <section className="col-span-5 grid grid-cols-4 gap-4 rounded-2xl bg-grayish p-4 text-white">
        <h2 className="col-span-4 font-inter text-2xl">
          {project.projectName}
        </h2>
        <p className="col-span-3 font-inter">{project.description}</p>
        <div className="grid-col-2 grid justify-center gap-x-4">
          <h3 className="col-span-2 text-center font-inter text-xl">
            Tekniker
          </h3>
          <FaHtml5 size={"24px"} />
          <FaCss3Alt size={"24px"} />
          <FaReact size={"24px"} />
          <FaFigma size={"24px"} />
        </div>
        <div className="col-span-4 my-auto flex justify-around">
          <Button text={"Figma"} />
          <Button text={"Github"} />
          <Button text={"Live"} />
        </div>
      </section>

      <figure className="col-span-4 overflow-hidden rounded-2xl">
        <img src="../src/assets/brb.jpg" alt="" />
      </figure>
    </article>
  );
}

export default ProjectCard;
