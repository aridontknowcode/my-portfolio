"use client"
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "@/components/TabButton";

const TAB_DATA =[
    {
        title: "skills",
        id:"skills",
        content:(
            <ul className="list-disc pl-2">
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
                <li>UiTM</li>
            </ul>
        )
    },
    {
        title:"Certifications",
        id: "Certifications",
        content:(
            <ul className="list-disc pl-2">
                <li>Google</li>
            </ul>
        )
    }
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

    return <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/airasia.jpg" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg ">
                I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
                </p>
                <div className="flex flex-row mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        {" "} Skills {" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        {" "} Education {" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("Certifications")} active={tab === "Certifications"}>
                        {" "} Certifications {" "}
                    </TabButton>
                </div>
                <div className="mt-5">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
};

export default AboutSection;