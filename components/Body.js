import React from 'react'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Contact from '../components/Contact'

function Body() {
    return (
        
        <div id="about">
            <div className="w-3/4 md:w-2/4 hover:border-blue-300 transition flex mb-8 shadow-lg ml-auto mr-auto border-2 md:mt-0 md:p-8 bg-white border-gray-200 rounded-lg">
                < AboutMe />
            </div>
            <div className="w-3/4 md:w-2/4 hover:border-blue-300 transition flex mb-8 shadow-lg ml-auto mr-auto border-2 md:mt-0 md:p-8 bg-white border-gray-200 rounded-lg">
                < Resume />
            </div>
            <div className="w-3/4 md:w-2/4 hover:border-blue-300 transition flex mb-8 shadow-lg ml-auto mr-auto border-2 md:mt-0 md:p-8 bg-white border-gray-200 rounded-lg">
                < Projects />
            </div>
            <div id="contact" className="w-3/4 md:w-2/4 hover:border-blue-300 transition flex mb-8 shadow-lg ml-auto mr-auto border-2 md:mt-0 md:p-8 bg-white border-gray-200 rounded-lg">
                < Contact />
            </div>
        </div>

        
    )
}

export default Body
