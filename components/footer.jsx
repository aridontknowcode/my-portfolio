import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png"

const Footer = () => {
    return (
        <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
            <div className="container p-12 flex justify-between">
                <span><Image src={logo} height={50}></Image></span>
                <p className="text-slate-600">All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer