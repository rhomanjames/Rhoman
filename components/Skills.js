import React from 'react'
import Image from 'next/image'
import { HeartIcon, MailIcon } from '@heroicons/react/solid'


function Skills() {
    return (
        <div className="w-full left-full flex-col med:flex-row justify-center items-center align-center">
            
            <div className="w-full lg:pl-4 px-2 border-b-2 py-2 justify-center flex flex-grow  align-center items-center">
                <div className="flex align-center justify-center flex-col">
                    <div className="w-full">
                        <h1 id="text" className="text-xl justify-center w-full align-center h-full mt-auto flex-grow flex font-bold">Education</h1>
                    </div>
                    <div className="flex text-center lg:pt-2 lg:pb-4 p-4 flex-col text-left">
                        <h1 id="text" className=" font-bold">Master's Degree</h1>
                        <p id="text" className="text-xs md:text-md"> Behavioral Psychology <br/> Eastern Kentucky University 
                         <br /> Richmond, KY <br /> 2022 (Expected) </p>
                    </div>
                    <div className="flex text-center lg:p-0 lg:pb-4 p-4 flex-col text-left">
                        <h1 id="text" className=" font-bold">Bachelor's Degree</h1>
                        <p id="text" className="text-xs md:text-md"> Psychology <br/> Centre College 
                     <br /> Danville, KY <br /> </p>
                    </div>
                </div>
            </div>

             {/*Skills*/}
            <div className="w-full px-2 pt-4 flex flex-grow  align-center items-center">
                <div className="w-full">
                <h1 id="text" className="text-xl  justify-center w-full align-center h-full mt-auto flex font-bold">Skills</h1>
                </div>

            </div>
            <div className="w-full transition  px-4 pt-2 ">
                {/*Content Text*/}
                <div className="flex mb-4 space-x-4 lg:p-0 p-2 justify-center space-y-4 flex-col text-left">
                    <h1 className="justify-center pb-4 text-sm md:flex-col md:text-sm lg:text-md text-center flex">
                        <ul className="mx-4 w-1/2 md:w-full  md:mx-0">
                            <li>UX Design</li>
                            <li>UX Strategy</li> 
                            <li>UX Research</li> 
                            <li>Wireframes</li>
                            <li>Prototypes</li>
                            <li>Adobe Creative Suite</li>
                        </ul>
                        <ul className="px-3 w-1/2 md:w-full md:px-0 md:border-l-0">
                            <li>Agile SCRUM</li>
                            <li>Management</li>
                            <li>HTML/CSS/JS</li> 
                            <li>Consulting</li>
                            <li>Communication</li>
                            <li>Presentation</li> 
                            
                        </ul>
                    </h1>
                </div>
            </div>
        </div>

        
    )
}

export default Skills
