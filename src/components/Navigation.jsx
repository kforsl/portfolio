import { FaHome, FaInfo } from "react-icons/fa";
import { RiContactsBookFill, RiGitRepositoryFill } from "react-icons/ri";

function Navigation({ executeScroll }) {
  return (
    <nav className="fixed -left-20 top-2/4 z-10 w-fit -translate-y-2/4 rounded-r-lg bg-grayish/50 shadow-nav backdrop-blur-sm transition-all duration-300 hover:left-0">
      <ul className="flex flex-col gap-8 px-4 py-8 text-base text-white">
        <li
          className="flex cursor-pointer justify-end gap-4 transition duration-300 hover:text-primary"
          onClick={() => executeScroll("hero")}
        >
          <figcaption className="select-none font-inter"> Home </figcaption>
          <figure>
            <FaHome size={"24px"} />
          </figure>
        </li>

        <li
          className="flex cursor-pointer justify-end gap-4 transition duration-300 hover:text-primary"
          onClick={() => executeScroll("about")}
        >
          <figcaption className="select-none font-inter"> Om mig </figcaption>
          <figure>
            <FaInfo size={"24px"} />
          </figure>
        </li>

        <li
          className="flex cursor-pointer justify-end gap-4 transition duration-300 hover:text-primary"
          onClick={() => executeScroll("projects")}
        >
          <figcaption className="select-none font-inter"> Projekt </figcaption>
          <figure>
            <RiGitRepositoryFill size={"24px"} />
          </figure>
        </li>
        <li
          className="flex cursor-pointer justify-end gap-4 transition duration-300 hover:text-primary"
          onClick={() => executeScroll("contact")}
        >
          <figcaption className="select-none font-inter"> Kontakt </figcaption>
          <figure>
            <RiContactsBookFill size={"24px"} />
          </figure>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
