import Image from 'next/image'
import profileImg from "../images/profile.jpg";

export default function MainContent() {
    return (
        <div className="relative isolate bg-white px-6 pb-12 pt-16 lg:px-8 " id='home'>
            <div className="mx-auto max-w-2xl max-h-full py-18 pb-36">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                </div>
                <div className="text-center">
                    <div className='mt-16'>
                        <Image src={profileImg} className="rounded-full w-60 mx-auto" alt="Profile image"></Image>
                    </div>
                    <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Welcome to my resume</h1>
                    <h1 className="text-2xl mt-4 font-normal tracking-tight text-gray-900 sm:text-4xl">Bigboss | Thunyaluk Sasiwarinkul</h1>
                    <p className="mt-6 text-pretty text-lg font-normal text-gray-600 sm:text-xl/8">I am a <b className='font-normal text-blue-700'>Computer Engineering student</b> with a strong interest in <b className='font-normal text-blue-700 break-words'>Full Stack development.</b> I want to grow up in environments that allow me to solve problems, develop efficient systems, and learn new technologies.
                        I am currently seeking internship and cooperative education opportunities where I can further develop my skills, contribute to impactful projects, and collaborate with industry professionals.</p>
                </div>
            </div>
        </div>
    )
}