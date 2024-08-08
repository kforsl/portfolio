import React from "react";
import Title from "./Title";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const copyMail = (mail) => {
  navigator.clipboard.writeText(mail);
  document.querySelector("#copyMailMessage").textContent = "Kopierat";

  setTimeout(
    () =>
      (document.querySelector("#copyMailMessage").textContent = "Kopiera mail"),
    2000,
  );
};

function Contact() {
  const mail = "forslund95@live.com";

  return (
    <section
      id="contact"
      className="mx-auto mb-10 w-full max-w-1000 pb-10 text-white max-lg:px-4"
    >
      <Title title={"Contact"} />
      <ul className="flex justify-center gap-8 px-8 text-center">
        <li className="hover:text-primary">
          <a
            href="https://www.linkedin.com/in/kim-forslund-527a1128a/"
            target="_blank"
          >
            <figure>
              <FaLinkedinIn size={"32px"} className="mx-auto" />
              <figcaption className="font-inter">LinkedIn</figcaption>
            </figure>
          </a>
        </li>
        <li className="hover:text-primary">
          <a href="https://github.com/kforsl" target="_blank">
            <figure>
              <FaGithub size={"32px"} className="mx-auto" />
              <figcaption className="font-inter">Github</figcaption>
            </figure>
          </a>
        </li>
        <li
          className="group relative transform duration-300 active:scale-95"
          onClick={() => copyMail(mail)}
        >
          <p
            id="copyMailMessage"
            className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 text-nowrap rounded-md bg-grayish px-8 py-2 opacity-0 transition duration-300 group-hover:opacity-100"
          >
            Kopiera mail
          </p>
          <figure className="group-hover:text-primary">
            <IoIosMail size={"32px"} className="mx-auto" />
            <figcaption className="font-inter">{mail}</figcaption>
          </figure>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
