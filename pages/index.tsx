import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });
import AboutSection from "@/components/AbouSection";
import ProjectSection from"@/components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className=" container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />

      </div>
    </main>
  );
}

