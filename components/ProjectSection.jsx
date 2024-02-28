"Use client"
import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
// Array of projects

const projectsData = [
    {
        id: 1,
        title: "Trivia Website",
        description: "A trivia website made using laravel and bootstrap",
        Image: "/images/projects/trivia-website.png",
        tag: ["All", "Web"],
        gitUrl:"/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Coming Soon!",
        description: "-",
        Image: "/images/projects/coming-soon.png",
        tag: ["All", "Mobile"],
        gitUrl:"/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Coming Soon!",
        description: "-",
        Image: "/images/projects/coming-soon.png",
        tag: ["All", "Web"],
        gitUrl:"/",
        previewUrl: "/"
    }
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");

    const handletagChange = (newtag) => {
        setTag(newtag);
    };

    const filteredProjects = projectsData.filter((project)=>
        project.tag.includes(tag)
    );

    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">

                <ProjectTag onClick={handletagChange} name="All" isSelected={tag === "All"}/>
                <ProjectTag onClick={handletagChange} name="Web" isSelected={tag === "Web"}/>
                <ProjectTag onClick={handletagChange} name="Mobile" isSelected={tag === "Mobile"}/>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project) =>
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.Image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
            )}
            </div>
        </>
    )
}

export default ProjectSection;