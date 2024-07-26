import ProjectsData from "../assets/ProjectsData.json";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-indigo">
      <h1 className="flex justify-start p-7 px-10 pb-2 text-3xl font-bold text-white-white">
        My Projects
      </h1>
      <canvas className="mx-10 flex h-2 w-32 justify-start bg-sky-700"></canvas>
      <div className="m-6 grid grid-cols-1 justify-items-center gap-4 text-center md:grid-cols-2 lg:grid-cols-4">
        {ProjectsData.map((project) => (
          <div
            className="m-5 h-auto w-72 overflow-hidden rounded-xl bg-gray"
            key={project.id}
          >
            <h2 className="m-auto p-3 text-white-bright">{project.title}</h2>
            <p className="m-auto p-4 text-gray-project">
              {project.description}
            </p>
            <a href={project.link} target="_blank">
            <button className="button">Visit project</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
