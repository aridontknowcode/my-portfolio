import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

// Array of projects
const projectsData = [
    {
        id: 1,
        title: "Trivia Website",
        description: "A trivia website made using laravel and bootstrap",
        Image: "/images/projects/trivia-website.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/aridontknowcode/trivia-website",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Coming Soon!",
        description: "-",
        Image: "/images/projects/coming-soon.png",
        tag: ["All"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Coming Soon!",
        description: "-",
        Image: "/images/projects/coming-soon.png",
        tag: ["All"],
        gitUrl: "/",
        previewUrl: "/"
    }
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handletagChange = (newtag) => {
        setTag(newtag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }

    }

    return (
        <section>
            <h2 id="projects" className="text-center text-4xl font-bold text-white mt-4">
                My Projects 🖥️
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag onClick={handletagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handletagChange} name="Web" isSelected={tag === "Web"} />
                <ProjectTag onClick={handletagChange} name="Mobile" isSelected={tag === "Mobile"} />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{duration: 0.3, delay: index * 0.4}}>
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.Image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectSection;
