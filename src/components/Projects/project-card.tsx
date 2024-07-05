import { LiaGithub } from "react-icons/lia";
import { IoLaptopOutline } from "react-icons/io5";
import { ProjectType } from "../../../types";
import Link from "next/link";

interface ProjectCardProps {
    project: ProjectType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <>
            <div className='flex flex-col w-full bg-card px-6 py-8 cursor-pointer rounded-lg border-border border'>
                <div className='flex items-center gap-4'>
                    <h2 className='text-base text-foreground dark:text-foreground'>
                        {project.title}
                    </h2>
                    <span className='text-[10px] bg-gray-400 dark:bg-gray-800  px-1 text-white'>
                        {project.type}
                    </span>
                </div>
                <p className='text-sm mt-2 text-secondary-foreground dark:text-secondary-foreground border-border dark:border-border'>
                    {project.description}
                </p>
                <div className='flex items-center text-xs text-accent-foreground mt-4 gap-2 flex-wrap'>
                    {project.techstack
                        .slice(0, project.techstack.length - 1)
                        .map((tech: string, index: number) => (
                            <div
                                key={index}
                                className='flex items-center gap-2'
                            >
                                <span>{tech}</span>
                                <span>-</span>
                            </div>
                        ))}
                    {project.techstack.reverse()[0]}
                </div>
                <div className='flex items-center mt-4 gap-4'>
                    <Link href={project.githubRepoUrl} target='_blank'>
                        <LiaGithub
                            size={25}
                            className='hover:text-accent-foreground'
                        />
                    </Link>
                    {project.liveUrl && (
                        <Link href={project.liveUrl} target='_blank'>
                            <IoLaptopOutline
                                size={25}
                                className='hover:text-accent-foreground'
                            />
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProjectCard;
