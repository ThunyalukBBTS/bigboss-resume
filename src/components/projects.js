'use client'

import { useEffect, useRef } from "react";

import Image from "next/image";
import Modal from "@/components/modal"
import mqtt from "@/images/mqtt.png"
import Proj1 from "@/images/Proj1.jpg"
import Proj2 from "@/images/Proj2.jpg"

export default function Projects() {
    const divRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    console.log("test");
                }
            },
            { threshold: 0.5 }
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        };
    }, []);

    const display = () => {
        console.log("PP")
    }

    return (
        <div className="bg-white" id="projects">
            <div className="mx-auto max-w-screen-lg max-h-full py-18 pb-16 px-8 pt-20" ref={divRef}>
                <div className="text-center mb-10">
                    <h1 className="text-5xl text-blue-700 font-medium mb-5">Projects</h1>
                    <ol className="relative text-start border-s border-gray-700">

                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-700 bg-gray-700"></div>
                            <time className="mb-1 text-base font-normal leading-none text-gray-500">Sep 2024 - Oct 2024</time>
                            <div className="md:grid md:grid-cols-6">
                                <div className="md:col-start-1 md:col-span-4 md:pe-5">
                                    <h3 className="text-3xl font-medium text-gray-800"> Disaster notification system</h3>
                                    <h3 className="text-2xl font-normal text-gray-500">as an Embedded system developer</h3>
                                    <p className="text-xl font-light text-gray-500">This is a project in the microprocessors and interfacing course. To detect
                                        disasters like earthquakes, fires, and floods, use sensors that are connected
                                        to the ESP32 board. There is a web dashboard that displays status
                                        information and provides disaster warnings via Line Notify.
                                        I worked on the part of coding to read values  from sensors, write disaster
                                        detection</p>
                                    <div className="flex">
                                        <div className="flex items-center mt-1">
                                            <p className="ms-auto me-2 text-lg font-light text-gray-500">Tech stacks: </p>
                                            <img className="me-auto" alt="skillicons" src="https://skillicons.dev/icons?i=arduino,c,github&theme=dark" ></img>
                                            <Image src={mqtt} alt="MQTT" className="w-16 ms-2" />
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-end-7 md:col-span-2 mt-5 md:mt-0">
                                    <Modal src={Proj1} />
                                </div>
                            </div>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-700 bg-gray-700"></div>
                            <time className="mb-1 text-base font-normal leading-none text-gray-500">Dec 2022 - Mar 2023</time>
                            <div className="md:grid md:grid-cols-6">
                                <div className="md:col-start-1 md:col-span-4 md:pe-5">
                                    <h3 className="text-3xl font-medium text-gray-800">XZAM website</h3>
                                    <h3 className="text-2xl font-normal text-gray-500"> as a Full-stack developer</h3>
                                    <p className="text-xl font-light text-gray-500">XZAM is a website that collects links to high school exams. Users can share,
                                        rate, and report the links. This work is a project in the Advanced Computer
                                        Programming course and has been copyrighted with the Department of
                                        Intellectual Property.</p>
                                    <div className="md:flex items-center mt-1">
                                        <p className="ms-auto md:ms-0 me-2 text-lg font-light text-gray-500">Tech stacks: </p>
                                        <img className="me-auto" alt="skillicons" src="https://skillicons.dev/icons?i=js,react,css,bootstrap,github,firebase&theme=dark" ></img>
                                    </div>
                                    <div className="flex mt-2">
                                        <a href="https://xzam-26219.web.app/" className="text-white focus:ring-4 focus:ring-blue-300 font-normal text-base rounded-lg px-3 py-2 me-2 bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Visit website</a>
                                        <a href="https://th.kku.ac.th/165202/" className="text-white focus:ring-4 focus:ring-orange-300 font-normal text-base rounded-lg px-3 py-2 me-2 bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">Read the KKU news</a>
                                    </div>
                                </div>
                                <div className="md:col-end-7 md:col-span-2 mt-5 md:mt-0">
                                    <Modal src={Proj2} />
                                </div>
                            </div>
                        </li>

                    </ol>
                </div>
            </div>
        </div>
    )
}