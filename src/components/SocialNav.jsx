import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function SocialNav() {
  return (
    <nav className="fixed left-auto right-0 top-2/4 z-10 w-fit -translate-y-2/4 rounded-l-lg bg-grayish/50 shadow-social backdrop-blur-sm">
      <ul className="flex flex-col gap-8 px-4 py-8 text-base text-white">
        <li className="cursor-pointer transition duration-300 hover:text-primary">
          <a
            href="https://www.linkedin.com/in/kim-forslund-527a1128a/"
            target="_blank"
          >
            <FaLinkedinIn size={"24px"} />
          </a>
        </li>
        <li className="cursor-pointer transition duration-300 hover:text-primary">
          <a href="https://github.com/kforsl" target="_blank">
            <FaGithub size={"24px"} />
          </a>
        </li>
        <li className="cursor-pointer transition duration-300 hover:text-primary">
          <IoIosMail size={"24px"} />
        </li>
      </ul>
    </nav>
  );
}

export default SocialNav;
