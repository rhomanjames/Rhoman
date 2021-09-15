import React from 'react'
import Image from 'next/image'
import { HeartIcon, MailIcon } from '@heroicons/react/solid'


function Resume() {
    
    return (
        <div className="w-full flex-col med:flex-row items-center align-center">
             {/*Image and title*/}
            <div className="w-full lg:pl-4 px-8 border-b-2 py-2 flex pr-4 flex-grow  align-center items-center">
                <div className="w-full">
                <h1 id="text" className="text-xl  w-full align-center h-full mt-auto flex-grow flex font-bold">Resume</h1>
                </div>

            </div>
            <div className="w-full transition  p-4 ">
                {/*Content Text*/}
                <div className="flex border-b-2 lg:pb-4 lg:p-0 space-y-3 p-4 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-xl font-bold"> Developer and Community Liaison</h1>
                    <p id="text" className="text-sm md:text-md text-gray-400"> Fayette County Public Schools | Lexington, KY <br /> March 2020 - Present </p>
                    <h1 className="">Create web applications to promote districtwide initiatives.<br /> <br /> Create a mobile application in partnership with the Lexington Health Department to keep stakeholders informed on the current number of COVID-19 cases in the district. <br /> <br /> Analyze various data to report to the Superintendent's cabinet. <br /> <br />Coach teachers and school leaders on current best-practices in technology.<br /> </h1>
                </div>
                <br/>
                <div className="flex lg:p-0 lg:pb-4 border-b-2 p-4 space-y-3 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-xl font-bold">Behavior Researcher</h1>
                    <p id="text" className="text-sm md:text-md text-gray-400"> Centre College | Danville, KY <br /> August 2018- May 2019 </p>
                    <h1 className="">Write code for computer software to assess delays in response time due to mobile device distractions.<br /> <br /> Analyze empirical data about User Experience (UX) and present to college faculty and students. <br /> </h1>
                </div>
                <br /> 
                <div className="flex mb-4 lg:p-0 p-4 space-y-3 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-xl font-bold">AP Computer Science Principles Instructor</h1>
                    <p id="text" className="text-sm md:text-md text-gray-400">Uncommon Schools | Boston, MA<br /> June 2018-August 2018 </p>
                    <h1 className="">Serve as an AP Computer Science instructor to 15 rising 11th graders.<br /> <br /> Complete various coding challenges daily.<br /> <br />  100% pass rate for students on the end-of-semester exam.</h1>
                </div>
            </div>
        </div>

        
    )
}

export default Resume