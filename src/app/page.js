import Image from "next/image";
import NavBar from "@/components/navbar"
import MainContent from "@/components/maincontent";
import Education from "@/components/education";

export default function Home() {
  return (
    <div>
      <NavBar />
      <MainContent />
      <Education />
    </div>
  );
}
