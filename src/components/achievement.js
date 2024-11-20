import Image from "next/image";
import Modal from "@/components/modal"
import TGR1 from "@/images/TGR2024-1.jpg";
import TGR2 from "@/images/TGR2024-2.jpg";
import TGR3 from "@/images/TGR2024-3.jpg";
import TGR4 from "@/images/TGR2024-4.png";

export default function Achievement() {
    return (
        <div className="bg-white" id="achievement">
            <div className="mx-auto max-w-screen-xl max-h-full py-18 pb-16 px-8 pt-20">
                <div className="text-center mb-10">
                    <h1 className="text-5xl text-blue-700 font-medium mb-5">Achievement</h1>
                    <button type="button" className="text-white bg-orange-700 focus:ring-orange-300 font-normal rounded-full text-lg px-5 py-1 text-center me-2 mb-2 dark:bg-orange-600 hover:cursor-auto">2nd Runner-up</button>
                    <h1 className="text-3xl text-gray-900 font-medium ">TESA Top Gun Rally #18</h1>
                    <h1 className="text-xl text-gray-500 font-normal">The Best of the Best Embedded System Developers 2024</h1>
                    <h1 className="text-2xl text-gray-900 font-normal">Topic : Acoustic and AI-Based Predictive Maintenance with Edge Computing</h1>
                    <h1 className="text-2xl text-gray-500 font-normal">working in the role of Machine Learning Developer (MATLAB)</h1>
                    <div>
                        <div className="mt-5 md:grid md:grid-cols-2 items-center">
                            <div className="md:col-span-1 px-1 py-1 md:px-2 md:py-2"><Modal src={TGR1} /></div>
                            <div className="md:col-span-1 px-1 py-1 md:px-2 md:py-2"><Modal src={TGR2} /></div>
                            <div className="md:col-span-1 px-1 py-1 md:px-2 md:py-2"><Modal src={TGR3} /></div>
                            <div className="md:col-span-1 px-1 py-1 md:px-2 md:py-2"><Modal src={TGR4} /></div>

                        </div>
                    </div>
                    <p className="mt-6 text-xl font-light text-gray-600">This project aims to detect anomalies in molds used in factories and predict whether the detected sounds indicate normal or abnormal mold operations. The goal is to <a className="font-medium">enhance production efficiency in factories</a> located in Thailand's EEC (Eastern Economic Corridor). The system utilizes a Raspberry Pi 5 to capture audio signals, processes them using signal processing techniques, and applies a machine learning model to predict the machinery's operational status.</p>

                    <div className="flex items-center mt-3">
                        <p className="ms-auto me-2 text-xl font-light text-gray-600">Tech stack: </p>
                        <img className="me-auto" alt="skillicons" src="https://skillicons.dev/icons?i=matlab&theme=dark" ></img>
                    </div>

                    <div className="mt-5">
                        <a href="https://th.kku.ac.th/206727/" className="text-white focus:ring-4 focus:ring-orange-300 font-normal text-base rounded-lg px-3 py-2 me-2 bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">Read the KKU news</a>
                    </div>

                </div>

            </div>
        </div>
    )
}