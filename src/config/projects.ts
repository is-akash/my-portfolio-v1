import { ProjectType } from "../../types";

export const projects: ProjectType[] = [
    {
        id: 0,
        title: "Excalidraw Clone",
        description:
            "A simple clone of Excalidraw built with React and TypeScript. I made this side project for learning purposes. The app isn't responsive, but I prioritized functionalities over responsiveness.",
        liveUrl: "https://project-one.com",
        githubRepoUrl: "https://github.com/user/project-one",
        techstack: ["React", "TypeScript", "CSS", "Cypress"],
    },
    {
        id: 1,
        title: "Type Rush",
        description:
            "A typing game built with React and TypeScript. It is a website where you can practice typing to get faster and more accurate.",
        liveUrl: "https://project-two.com",
        githubRepoUrl: "https://github.com/user/project-two",
        techstack: ["Node.js", "Express", "MongoDB"],
    },
];
