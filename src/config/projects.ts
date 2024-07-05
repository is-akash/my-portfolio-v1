import { ProjectType } from "../../types";

export const projects: ProjectType[] = [
    {
        id: 0,
        title: "Clique",
        type: "FullStack",
        description:
            "Clique is a dynamic social media application designed to foster connections and engagement. This versatile platform allows users to share updates, photos. making it easy to stay connected with friends.",
        liveUrl: "https://clique-five.vercel.app/",
        githubRepoUrl: "https://github.com/skies-codes/Clique",
        techstack: [
            "React.js",
            "TailwindCSS",
            "TanStack Query",
            "Zod",
            "Appwrite",
        ],
    },
    {
        id: 1,
        title: "GitDiscovery",
        type: "Frontend",
        description:
            "A simple version of github using github API to fetch user details and show them on the frontend.",
        liveUrl: "https://skies-codes.github.io/GitDiscovery/",
        githubRepoUrl: "https://github.com/skies-codes/GitDiscovery",
        techstack: ["HTML", "CSS", "JavaScript", "Github API"],
    },
    {
        id: 2,
        title: "NoteSpace",
        type: "Desktop Application",
        description:
            "A minimal Note taking app with out-of-the-box markdown support using Electron, React, Typescript, TailwindCSS, Jotai and MDX Editor. I built this project for learning purposes.",
        githubRepoUrl: "https://github.com/skies-codes/NoteSpace",
        techstack: [
            "Electron.js",
            "React.js",
            "TypeScript",
            "TailwindCSS",
            "Jotai",
            "MDX Editor",
        ],
    },
    {
        id: 3,
        title: "My Portfolio",
        type: "Frontend",
        description: "A first portfolio using next.js, tailwind css.",
        liveUrl: "https://my-portfolio-v1-pink.vercel.app/",
        githubRepoUrl: "https://github.com/skies-codes/my-portfolio-v1",
        techstack: ["Next.js", "TypeScript", "TailwindCSS"],
    },
];
