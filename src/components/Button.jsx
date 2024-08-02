import React from "react";

function Button({ text }) {
  return (
    <button className="min-w-[140px] rounded-3xl bg-primary px-12 py-1.5 leading-snug shadow-lg transition duration-300 hover:bg-primary-dark">
      <p className="font-inter font-bold text-black"> {text} </p>
    </button>
  );
}

export default Button;
