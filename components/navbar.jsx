'use client'
import React, {useState} from "react";
import Link from "next/link";
import NavLink from "@/components/navlink";
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from "@/components/MenuOverlay";
import Image from "next/image";
import logo from "@/public/images/logo.png"

const NavLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
    
]

const Navbar = () =>{
    // initial tate of NavbarOpen is false
    // Using the useState hook to create a state variable called 'navbarOpen'
    const [navbarOpen, setNavbarOpen] = useState(false);

    return(
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-4">
                <Link 
                href={"/"}
                className="text-5xl md:text-5xl text-white font-semibold">
                    <Image src={logo} height={50} width={40}></Image>
                </Link>
                <div className="mobile-menu block md:hidden">
                    {/* If 'navbarOpen' is 'false', it renders a button with the 'Bars3Icon' */}
                    {/* When this button is clicked, it triggers the 'setNavbarOpen' function with 
                    the argument 'true', which updates 'navbarOpen' to 'true'*/}
                    {!navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <Bars3Icon className="h-5 w-5"/>
                            </button>
                        ):(
                    // If 'navbarOpen is 'true', it rendersthe XmarkIcon button
                            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <XMarkIcon className="h-5 w-5"/>
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            NavLinks.map((link, index) =>(
                                <li key={index}>
                                    <NavLink href={link.path} title ={link.title}/>
                                </li>
                            )

                            )
                        }
                    </ul>
                </div>
            </div>
            {/* if navbarOpen is true than display MenuOverlay using navlinks for the links parameter */}
            {navbarOpen ? <MenuOverlay links={NavLinks}/> : null}
        </nav>
    );
};

export default Navbar;