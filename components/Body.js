import React from 'react'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import Thanks from '../components/Thanks'
import { HeartIcon, MailIcon, DownloadIcon } from '@heroicons/react/solid'

function Body() {
    return (
        
        <div className="">
            <a target="_blank" href="JohnJamesResume.pdf" download="John James || Front End Developer"><DownloadIcon className="h-8 md:h-12 text-white fixed bottom-3 right-3 shadow-md animate-pulse z-20 bg-green-400 rounded-full p-1 md:p-2 hover:animate-bounce cursor-pointer" /></a>
            <div id="aboutMe" className="w-5/6 sm:absolute md:fixed ml-auto mr-auto md:w-1/6 left-4 transition mb-8 shadow-lg mr-auto md:mt-0 md:ml-8 md:p-2 bg-white  rounded-lg">
                < AboutMe />
            </div>
            <div id="Skills" className="w-5/6 sm:absolute md:fixed ml-auto mr-auto md:w-1/6 md:right-4 transition mb-8 shadow-lg md:mt-0 md:mr-8 md:p-2 bg-white  rounded-lg">
                < Skills />
            </div>
            <div className="w-5/6  md:w-1/2 hover:border-blue-200 transition flex mb-8 shadow-lg ml-auto mr-auto border-1  md:mt-0 md:p-2 bg-white border-gray-200 rounded-lg">
                < Resume />
            </div>
            <div className="w-5/6  md:w-1/2 hover:border-blue-200 transition flex mb-8 shadow-lg ml-auto mr-auto border-1  md:mt-0 md:p-2 bg-white border-gray-200 rounded-lg">
                < Projects />
            </div>
            <div id="contact" className="w-5/6 md:w-1/2 md:right-4 transition mb-8 shadow-lg ml-auto mr-auto md:mt-0 md:p-2 bg-white  rounded-lg">
                < Contact />
            </div>
            <div id="thanks" className="w-5/6 md:w-1/2 hover:border-blue-200 transition flex mb-8 shadow-lg ml-auto mr-auto border-4  md:mt-0 md:p-8 bg-white border-gray-200 rounded-lg">
                < Thanks />
            </div>
        </div>

        
    )
}

export default Body
