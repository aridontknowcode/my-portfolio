import React from "react";
import githubIcon from "../public/github-icon.svg";
import LinkedInIcon from "../public/Linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4">
        {/* <div className=""></div> */}
        <div>
            <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                I'm currently looking for new opportunities, my inbox is always open,
                Wether you have a question or just want to say hi, I'll try my best
                to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/aridontknowcode">
                    <Image src={githubIcon} alt="Github Icon"></Image>
                </Link>
                <Link href="linkedin.com/in/harithhadi">
                    <Image src={LinkedInIcon} alt="Github Icon"></Image>
                </Link>
            </div>
        </div>
        <div>
            <form className="flex flex-col">
                <div className="mb-6">
                    <label htmlFor="email" className="text-whit block mb-2 text-sm font-medium">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        required placeholder="jacob@gmail.com"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#92CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    />
                </div>
                <div className="mb-6">

                    <label htmlFor="subject" className="text-whit block mb-2 text-sm font-medium">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        required placeholder="Just saying hi :)"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#92CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="text-white block text-sm mb-2 font-medium"
                    >
                        Message
                    </label>
                    <textarea 
                        name="message" 
                        id="message"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#92CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 mb-6"
                        placeholder="Let's chat!"
                     />
                     <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                     >Send Message</button>
                </div>
            </form>
        </div >
    </section >
    )
}

export default EmailSection;