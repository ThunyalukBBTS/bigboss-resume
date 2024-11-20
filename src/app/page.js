"use client"

import Image from "next/image";
import { useEffect, useRef,useState } from "react";
import NavBar from "@/components/navbar"
import MainContent from "@/components/maincontent";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Achievement from "@/components/achievement";
import Projects from "@/components/projects";
import Activities from "@/components/activities";

export default function Home() {
  const sections = useRef({});
  const [activeSection,setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sections.current).forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <NavBar activeSection={activeSection}/>
      <div id="MainContent" ref={(el) => (sections.current.MainContent = el)}>
        <MainContent />
      </div>
      <div id="Education" ref={(el) => (sections.current.Education = el)}>
        <Education />
      </div>
      <div id="Skills" ref={(el) => (sections.current.Skills = el)}>
        <Skills />
      </div>
      <div id="Achievement" ref={(el) => (sections.current.Achievement = el)}>
        <Achievement />
      </div>
      <div id="Projects" ref={(el) => (sections.current.Projects = el)}>
        <Projects />
      </div>
      <div id="Activities" ref={(el) => (sections.current.Activities = el)}>
        <Activities />
      </div>
    </div>
  );
}
