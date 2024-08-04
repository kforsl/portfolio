import Button from "./Button";

function ProjectCard({ project, index }) {
  const imagePosition = index % 2 == 0 ? "order-first" : "order-last";

  return (
    <article className="grid grid-cols-9 grid-rows-1 gap-8">
      <figure
        className={`col-span-4 my-auto overflow-hidden rounded-2xl bg-center ${imagePosition} h-full w-full`}
      >
        <img
          src={project.imgSrc}
          alt={`bild för ${project.projectName}`}
          className="h-full w-full object-cover object-left"
        />
      </figure>

      <section
        className={`col-span-5 grid grid-cols-4 gap-4 rounded-2xl bg-grayish p-4 text-white`}
      >
        <h2 className="col-span-4 font-krona text-xl">{project.projectName}</h2>
        <p className="col-span-3 font-inter">{project.description}</p>
        <article className="">
          <h3 className="mb-2 text-center font-inter text-xl">Tekniker</h3>
          <section className="gap grid grid-cols-2 gap-y-4">
            {project.toolKit.map((item) => {
              return (
                <img
                  key={item.name}
                  src={item.icon}
                  alt={item.name}
                  className="mx-auto size-6"
                />
              );
            })}
          </section>
        </article>
        <div className="col-span-4 my-auto flex justify-around">
          {project.buttonLink.map((item) => {
            return <Button text={item.name} key={item.name} url={item.url} />;
          })}
        </div>
      </section>
    </article>
  );
}

export default ProjectCard;
