import React from "react";

function Button({ text, url }) {
  return (
    <a
      className="min-w-[140px] rounded-3xl bg-primary px-12 py-1.5 leading-snug shadow-lg transition duration-300 hover:bg-primary-dark"
      href={url}
      target="__blank"
    >
      <p className="text-center font-inter font-bold text-black"> {text} </p>
    </a>
  );
}

export default Button;
