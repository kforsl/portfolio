import { FaHome, FaInfo } from "react-icons/fa";
import { RiContactsBookFill, RiGitRepositoryFill } from "react-icons/ri";

function Navigation({ executeScroll }) {
  return (
    <nav className="fixed bottom-0 top-auto z-10 flex justify-around rounded-r-lg bg-grayish/50 shadow-nav backdrop-blur-sm transition-all duration-300 hover:left-0 max-xl:w-full xl:-left-20 xl:top-2/4 xl:h-fit xl:-translate-y-2/4">
      <ul className="flex w-full justify-center px-4 py-8 text-base text-white max-xl:gap-16 xl:flex-col xl:gap-8">
        <li
          className="flex cursor-pointer justify-end gap-4 transition duration-300 hover:text-primary"
          onClick={() => executeScroll("hero")}
        >
          <figcaption className="select-none font-inter max-xl:hidden">
            Home
          </figcaption>
          <figure>
            <FaHome size={"24px"} />
          </figure>
        </li>

        <li
          className="flex cursor-pointer justify-end gap-4 transition duration-300 hover:text-primary"
          onClick={() => executeScroll("about")}
        >
          <figcaption className="select-none font-inter max-xl:hidden">
            Om mig
          </figcaption>
          <figure>
            <FaInfo size={"24px"} />
          </figure>
        </li>

        <li
          className="flex cursor-pointer justify-end gap-4 transition duration-300 hover:text-primary"
          onClick={() => executeScroll("projects")}
        >
          <figcaption className="select-none font-inter max-xl:hidden">
            Projekt
          </figcaption>
          <figure>
            <RiGitRepositoryFill size={"24px"} />
          </figure>
        </li>
        <li
          className="flex cursor-pointer justify-end gap-4 transition duration-300 hover:text-primary"
          onClick={() => executeScroll("contact")}
        >
          <figcaption className="select-none font-inter max-xl:hidden">
            Kontakt
          </figcaption>
          <figure>
            <RiContactsBookFill size={"24px"} />
          </figure>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
