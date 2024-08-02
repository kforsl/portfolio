import SocialNav from "./SocialNav";
import { FaHome, FaInfo } from "react-icons/fa";
import { RiGitRepositoryFill } from "react-icons/ri";

function Navigation({ executeScroll }) {
  return (
    <>
      <nav className="fixed left-0 top-2/4 z-10 w-fit -translate-y-2/4 rounded-r-lg bg-grayish/50 shadow-social backdrop-blur-sm">
        <ul className="flex flex-col gap-8 px-4 py-8 text-base text-white">
          <li
            className="cursor-pointer transition duration-300 hover:text-primary"
            onClick={() => executeScroll("hero")}
          >
            {" "}
            <FaHome size={"24px"} />{" "}
          </li>

          <li
            className="cursor-pointer transition duration-300 hover:text-primary"
            onClick={() => executeScroll("about")}
          >
            {" "}
            <FaInfo size={"24px"} />{" "}
          </li>

          <li
            className="cursor-pointer transition duration-300 hover:text-primary"
            onClick={() => executeScroll("projects")}
          >
            {" "}
            <RiGitRepositoryFill size={"24px"} />{" "}
          </li>
        </ul>
      </nav>
      <SocialNav />
    </>
  );
}

export default Navigation;
