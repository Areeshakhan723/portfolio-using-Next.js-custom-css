import { projectsCards } from "@/app/constant";
import ProjectsCards from "@/app/Component/ProjectsCards";

const page = () => {
  return (
    <section className="bg-custom-dark-gradient">
      <div className="padding w-full">
        <h1 className="text-2xl max-md:text-3xl lg:text-4xl font-bold font-sans text-center text-white">
          My <span className="text-blue">Portfolio</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 padding-x lg:max-container">
          {projectsCards.map((project) => (
            <ProjectsCards key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
