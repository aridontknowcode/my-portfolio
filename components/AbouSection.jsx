"use client"
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "@/components/TabButton";
import { motion } from "framer-motion";
const TAB_DATA =[
    {
        title: "skills",
        id:"skills",
        content:(
            <ul className="list-disc pl-2">
                <li>Java</li>
                <li>PHP</li>
                <li>C++</li>
                <li>Next.js</li>
                <li>Laravel</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        )
    },
    {
        title: "education",
        id: "education",
        content:(
            <ul className="list-disc pl-2">
                <li>Diploma in Computer Science 🎓(UiTM)</li>
            </ul>
        )
    },
    {
        title:"Certifications",
        id: "Certifications",
        content:(
            <ul className="list-disc pl-2">
                <li>AirAsia Academi / Google Cloud Software Engineering Reskilling Programme</li>
                <li>Fundemental of Cloud Computing</li>
                <li>Patricipated in Programming Competition at International C-PROM 2022</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id:"Experience",
        content:(
            <ul className="list-disc pl-2">
                <li>Internship as a Software Developer in Veecotech🖥️</li>
            </ul>
        )
    },
    

]


const AboutSection = () => {

    // the default value for useState is skills. This will make the skills tab as active by default
    // tab represents the currently selected tab in the component
    // The setTav function is the updater function provided by the useState hook
    const [tab, setTab] = useState("skills");

    // UseTransition is a React hook used for concurrent mode, which is a feature of React that allows
    // smoother user experiences by rendering components in a more asynchronous manner.
    // isPending : A boolean state variable indicating whether a transition is currently pending or in progress
    // startTransition: A function used to start a transition. It accepts a function as an argument, which will be 
    // executed during the transition
    const [isPending, startTransition] = useTransition();



    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return <section id="about" className="text-white">
        <motion.div 
        initial={{ opacity: 0,}}
        animate={{ opacity: 1,}}
        transition={{ duration: 1 }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-41 sm:py-16 xl:px-16">
            <Image src="/images/airasia.jpg" alt="a picture of a person with an google logo on the wall" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me 👋</h2>
                <p className="text-base lg:text-lg ">
                🎓Graduated from Uitm Perlis Arau in Computer Science. Curently diving into next.js🌐
                </p>
                <div className="mt-8 flex flex-wrap justify-start">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        {" "} Skills {" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        {" "} Education {" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("Certifications")} active={tab === "Certifications"}>
                        {" "} Certifications {" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("Experience")} active={tab === "Experience"}>
                        {" "} Experience {" "}
                    </TabButton>
                </div>
                <div className="mt-5">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </motion.div>
    </section>
};

export default AboutSection;