import Image from "next/image";
import NavBar from "@/components/navbar"
import MainContent from "@/components/maincontent";

export default function Home() {
  return (
    <div className="bg-white">
      <NavBar/>
      <MainContent/>
    </div>
  );
}
