import React from 'react'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import Thanks from '../components/Thanks'

function Body() {
    return (
        
        <div>
            <div className="w-5/6  md:w-2/3  transition flex mb-8 shadow-lg ml-auto mr-auto md:mt-0 md:p-8 bg-white  rounded-lg">
                < AboutMe />
            </div>
            <div id="resume" ></div>
            <div className="w-5/6  md:w-2/3 hover:border-blue-200 transition flex mb-8 shadow-lg ml-auto mr-auto border-4  md:mt-0 md:p-8 bg-white border-gray-200 rounded-lg">
                < Resume />
            </div>
            <div id="projects" className="mb-16"></div>
            <div className="w-5/6  md:w-2/3 hover:border-blue-200 transition flex mb-8 shadow-lg ml-auto mr-auto border-4  md:mt-0 md:p-8 bg-white border-gray-200 rounded-lg">
                < Projects />
            </div>
            <div id="contact" className="w-5/6 md:w-2/3 hover:border-blue-200  transition flex mb-8 shadow-lg ml-auto mr-auto border-4  md:mt-0 md:p-8 bg-white border-gray-200 rounded-lg">
                < Contact />
            </div>
            <div id="thanks" className="w-5/6 md:w-2/3 hover:border-blue-200 transition flex mb-8 shadow-lg ml-auto mr-auto border-4  md:mt-0 md:p-8 bg-white border-gray-200 rounded-lg">
                < Thanks />
            </div>
        </div>

        
    )
}

export default Body
