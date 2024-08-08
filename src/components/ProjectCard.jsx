import Button from "./Button";

function ProjectCard({ project, index }) {
  const imagePosition = index % 2 == 0 ? "lg:order-first" : "lg:order-last";

  return (
    <article className="grid lg:grid-cols-9 lg:grid-rows-1 lg:gap-8">
      <figure
        className={`my-auto overflow-hidden bg-center lg:col-span-4 lg:rounded-2xl ${imagePosition} h-full w-full`}
      >
        <img
          src={project.imgSrc}
          alt={`bild för ${project.projectName}`}
          className="h-full w-full object-cover object-left"
        />
      </figure>

      <section
        className={`bg-grayish p-4 text-white md:grid md:gap-4 lg:col-span-5 lg:rounded-2xl`}
      >
        <h2 className="font-krona text-xl max-lg:mb-2 md:col-span-4">
          {project.projectName}
        </h2>
        <p className="font-inter max-lg:mb-2 md:col-span-3">
          {project.description}
        </p>
        <article className="">
          <h3 className="mb-2 text-center font-inter text-xl">Tekniker</h3>
          <section className="flex justify-center max-lg:mb-4 max-lg:gap-x-4 md:grid md:grid-cols-2 md:gap-y-4">
            {project.toolKit.map((item) => {
              return (
                <img
                  key={item.name}
                  src={item.icon}
                  alt={item.name}
                  className="size-8 lg:mx-auto lg:size-6"
                />
              );
            })}
          </section>
        </article>
        <div className="my-auto flex justify-around md:col-span-4">
          {project.buttonLink.map((item) => {
            return <Button text={item.name} key={item.name} url={item.url} />;
          })}
        </div>
      </section>
    </article>
  );
}

export default ProjectCard;
