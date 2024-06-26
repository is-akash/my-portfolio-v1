import { projects } from "@/config/projects";
import ProjectCard from "./project-card";

const Projects = () => {
    return (
        <>
            <div className='w-full flex flex-col mt-10'>
                <h1 className='text-lg'>Projects</h1>
                <div className='w-full flex mt-2 flex-col gap-4'>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
