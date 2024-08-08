import React from "react";

function Title({ title }) {
  return (
    <div className="relative mb-4 max-w-full overflow-hidden before:absolute before:left-auto before:top-1/2 before:inline-block before:h-1 before:w-8 before:bg-white after:absolute after:left-auto after:top-1/2 after:inline-block after:h-1 after:w-full after:bg-white">
      <h2 className="inline-block w-fit px-2 pl-9 font-krona text-xl text-white md:text-2xl lg:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export default Title;
