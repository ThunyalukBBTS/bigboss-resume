import Image from "next/image";
import NavBar from "@/components/navbar"
import MainContent from "@/components/maincontent";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Achievement from "@/components/achievement";
import Projects from "@/components/projects";
import Activities from "@/components/activities";

export default function Home() {
  return (
    <div>
      <NavBar />
      <MainContent />
      <Education />
      <Skills />
      <Achievement />
      <Projects />
      <Activities />
    </div>
  );
}
