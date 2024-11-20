import Image from "next/image"
import ENKKUlogo from "@/images/ENKKULogo.png"
import MCSLogo from "@/images/MCSLogo.png"

export default function Education() {
    return (
        <div className="bg-gray-900" id="education">
            <div className="mx-auto max-w-screen-md max-h-full py-18 px-8 pt-28">
                <div className="text-center mb-10">
                    <h1 className="text-5xl text-blue-500 font-medium">Education</h1>
                </div>
                <ol className="relative border-s border-gray-200 dark:border-gray-700">

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-orange-500"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-500">2022 - Present</time>
                        <div className="grid grid-cols-6">
                            <div className="col-start-1 col-span-5 ...">
                            <h3 className="text-lg font-medium text-gray-400">Bachelor's degree</h3>
                        <h3 className="text-xl font-medium text-white mb-1">Khon Kaen University, Computer Engineering</h3>
                        <p className="text-base font-normal text-gray-400">GPA: 3.78 (2022 semester 1 - 2023 semester 2)</p>
                            </div>
                            <div className="col-end-7 col-span-1 ...">
                                <Image src={ENKKUlogo} alt="EN-KKU Logo"></Image>
                            </div>
                        </div>
                        
                    </li>
                    <li className="ms-4">
                        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-500">2019 - 2022</time>
                        <div className="grid grid-cols-6">
                            <div className="col-start-1 col-span-5 ...">
                            <h3 className="text-lg font-medium text-gray-400">High school</h3>
                        <h3 className="text-xl font-medium text-white mb-1">Manchasuksa School, Science-Math Program</h3>
                        <p className="text-base font-normal text-gray-400">GPA: 3.96</p>
                            </div>
                            <div className="col-end-7 col-span-1 ...">
                                <Image src={MCSLogo} alt="Manchasuksa school Logo"></Image>
                            </div>
                        </div>
                    </li>
                </ol>


            </div>
        </div>
    )
}