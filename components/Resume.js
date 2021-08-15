import React from 'react'
import Image from 'next/image'
import { HeartIcon, MailIcon } from '@heroicons/react/solid'


function Resume() {
    
    return (
        <div className="w-full flex-col med:flex-row items-center align-center">
             {/*Image and title*/}
            <div className="w-full lg:pl-4 px-8 border-b-2 py-2 flex pr-4 flex-grow  align-center items-center">
                <div className="w-full">
                <h1 id="text" className="text-3xl  w-full align-center h-full mt-auto flex-grow flex font-bold">Resume</h1>
                </div>

            </div>
            <div className="w-full p-4 ">
                {/*Content Text*/}
                <div className="flex mb-4 lg:p-0 p-4 space-y-3 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-xl font-bold italic"> Developer and Community Liaison</h1>
                    <p id="text" className="text-sm md:text-md italic"> Fayette County Public Schools<br /> March 2020 - Present </p>
                    <h1 className="text-md md:text-lg font-semibold">Create web applications to promote districtwide initiatives.<br /> <br /> Create a mobile application in partnership with the Lexington Health Department to keep stakeholders informed on the current number of COVID-19 cases in the district. <br /> <br /> Analyze various data to report to the Superintendent's cabinet. <br /> <br />Coach teachers and school leaders on current best-practices in technology.<br /> </h1>
                </div>
                <div>
                    <h1 className="text-lg border-t-2 pt-4 pb-4 md:text-xl font-bold italic">Skills</h1>
                    <h4 className="text-md md:text-lg font-semibold">React JS, Next JS, Tailwind CSS, Node JS, Bootstrap, APIs, Git/Github, UI/UX Design, Figma, Object-Oriented Programming, Adobe Creative Suite, and learning more every day! I'm also fluent in Spanish.</h4>
                </div>
            </div>
        </div>

        
    )
}

export default Resume