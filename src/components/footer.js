// https://react-icons.github.io/react-icons/

import { MdOutlineMailOutline, MdFacebook, MdGithub } from "react-icons/md";

export default function Footer() {
    return (
        <div className="bg-gray-900" id="education">
            <div className="mx-auto max-w-screen-lg max-h-full py-10 px-8">
                <div className="text-start">
                    <div className="md:grid md:grid-cols-2">
                        <div className="md:col-span-1 flex items-end">
                            <p className="text-gray-400 font-light">
                                This website was created by Thunyaluk Sasiwarinkul (Bigboss), a 3rd year student of the Faculty of Engineering, Computer Engineering, Khon Kaen University (KKU).
                                <br />
                                <br />
                                Last updated: 20 November 2024
                            </p>
                        </div>
                        <div className="md:col-span-1 mt-3 md:mt-0 text-end">
                            <h1 className="text-gray-300 text-xl mb-3">
                                Contact
                            </h1>
                            <div className="flex flex-row-reverse mb-2">
                                <a href="https://github.com/ThunyalukBBTS" className="text-white focus:ring-4 focus:ring-gray-300 font-normal text-base rounded-lg px-3 py-1 bg-gray-600 dark:hover:bg-gray-300 focus:outline-none dark:focus:ring-gray-800">GitHub</a>
                                <a href="https://www.facebook.com/BigbossThunyalukSasiwarinkul/" className="text-white focus:ring-4 focus:ring-blue-300 font-normal text-base rounded-lg px-3 py-1 me-2 bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Facebook</a>
                            </div>
                            <div className="flex flex-row-reverse text-gray-400 font-light text-base items-center">
                                <p className="ms-2">thunyaluk.sa@kkumail.com</p>
                                <MdOutlineMailOutline className="text-xl" />
                            </div>
                            <div className="flex flex-row-reverse text-gray-400 font-light text-base items-center">
                                <p className="ms-2">bigboss.thunyaluk@gmail.com</p>
                                <MdOutlineMailOutline className="text-xl" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}