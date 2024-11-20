import Image from "next/image";
import Modal from "@/components/modal"
import Proj1 from "@/images/Proj1.jpg"
import CESCaLogo from "@/images/CESCaLogo.jpg"
import GDGLogo from "@/images/GDGLogo.jpg"
import GDGimg from "@/images/GDG.jpg"

export default function Activities() {

    return (
        <div className="bg-white" id="activities">
            <hr></hr>
            <div className="mx-auto max-w-screen-lg max-h-full py-18 pb-16 px-8 pt-20">
                <div className="text-center mb-10">
                    <h1 className="text-5xl text-blue-700 font-medium mb-5">Activities</h1>
                    <div className="md:grid md:grid-cols-6">
                        <div className="md:col-start-1 md:col-span-4 md:pe-5 text-start">
                            <div className="flex items-center">
                                <Image src={CESCaLogo} alt="CESCa" className="w-20 h-20 me-3 rounded-full"></Image>
                                <h3 className="text-3xl font-medium text-gray-800">Volunteer - Computer Engineering Summer Camp, KKU CESCa#18-19 </h3>
                            </div>
                            <h3 className="text-2xl font-normal text-gray-500">work as a photographer and
                                a graphic designer.</h3>
                            <p className="text-xl font-light text-gray-500">Volunteer to share knowledge
                                about computer engineering to
                                high school students.</p>
                        </div>
                        <div className="md:col-end-7 md:col-span-2 mt-5 md:mt-0">
                            <Modal src={Proj1} />
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-6 mt-5">
                        <div className="md:col-start-1 md:col-span-4 md:pe-5 text-start">
                            <div className="flex items-center">
                                <Image src={GDGLogo} alt="GDG" className="w-20 h-20 me-3 rounded-full"></Image>
                                <h3 className="text-3xl font-medium text-gray-800">Core Team - Google
                                    Developer Groups
                                    (GDG) on Campus, KKU</h3>
                            </div>
                            <h3 className="text-2xl font-normal text-gray-500">work as a IT Blogger</h3>
                            <p className="text-xl font-light text-gray-500">Write a blog for giving Khon Kaen
                                University students interested in
                                technology and software
                                development knowledge.</p>
                            <div className="flex mt-2">
                                <a href="https://medium.com/@thunyaluk.sa" className="text-white focus:ring-4 focus:ring-gray-300 font-normal text-base rounded-lg px-3 py-2 me-2 bg-black dark:hover:bg-gray-800 focus:outline-none dark:focus:ring-gray-300">Medium - Read articles</a>
                            </div>
                        </div>
                        <div className="md:col-end-7 md:col-span-2 mt-5 md:mt-0">
                            <Modal src={GDGimg} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}