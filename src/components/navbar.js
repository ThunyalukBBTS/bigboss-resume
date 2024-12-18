'use client'

import { useState } from "react";
import UserIcon from "@/images/user-profile.png"
import Image from "next/image";

// template reference: https://flowbite.com/docs/components/navbar/

export default function NavBar(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 transition ease-in-out delay-150">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src={UserIcon} className="h-8 w-8" alt="ICON" />
                        <span className="self-center text-2xl font-medium whitespace-nowrap text-white">
                            Resume | Bigboss
                        </span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            onClick={toggleMenu}
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded={menuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ml-auto ${
                            menuOpen ? "block" : "hidden"
                        }`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-normal border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    href="#home"
                                    className={`block py-2 px-3 ${props.activeSection === "MainContent" ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" } `}
                                    aria-current="page"
                                    onClick={toggleMenu}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#education"
                                    className={`block py-2 px-3 ${props.activeSection === "Education" ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" } `}
                                    onClick={toggleMenu}
                                >
                                    Education
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className={`block py-2 px-3 ${props.activeSection === "Skills" ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" } `}
                                    onClick={toggleMenu}
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#achievement"
                                    className={`block py-2 px-3 ${props.activeSection === "Achievement" ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" } `}
                                    onClick={toggleMenu}
                                >
                                    Achievement
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className={`block py-2 px-3 ${props.activeSection === "Projects" ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" } `}
                                    onClick={toggleMenu}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#activities"
                                    className={`block py-2 px-3 ${props.activeSection === "Activities" ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" } `}
                                    onClick={toggleMenu}
                                >
                                    Activities
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
