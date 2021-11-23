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
            <a className="test" target="_blank" href="JohnJamesUX.pdf" download="John James UX"><DownloadIcon className="h-8 md:h-8 text-white fixed bottom-3 right-3 shadow-md animate-bounce z-20 bg-black rounded-full p-1 hover:animate-pulse cursor-pointer" /></a>
            <div id="test" className="w-5/6 mt-4 md:w-1/2 lg:absolute lg:fixed ml-auto mr-auto lg:w-1/6 left-4 transition mb-8 shadow-lg mr-auto lg:mt-0 lg:ml-8 lg:p-2 bg-white border border-white rounded-lg">
                < AboutMe />
            </div>
            <div id="skills" className="w-5/6 md:w-1/2 border lg:absolute ml-auto mr-auto lg:w-1/6 lg:right-4 transition mb-8 justify-center shadow-lg lg:mt-0 lg:mr-8 lg:p-2 bg-white border-white rounded-lg">
                < Skills />
            </div>
            <div id="resume" className="w-5/6  md:w-1/2 border hover:border-blue-200 transition flex mb-8 shadow-lg ml-auto mr-auto border-1  md:mt-0 md:p-2 bg-white border-white rounded-lg">
                < Resume />
            </div>
            <div id="projects" className="w-5/6  md:w-1/2 border hover:border-blue-200 transition flex mb-8 shadow-lg ml-auto mr-auto border-1  md:mt-0 md:p-2 bg-white border-white rounded-lg">
                < Projects />
            </div>
            <div id="contact" className="w-5/6  md:w-1/2 border hover:border-blue-200 transition flex mb-8 shadow-lg ml-auto mr-auto border-1  md:mt-0 md:p-2 bg-white border-white rounded-lg">
                < Contact />
            </div>
        </div>

        
    )
}

export default Body
