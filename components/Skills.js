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
                        <h1 id="text" className=" font-semi-bold">Master's Degree</h1>
                        <p id="text" className="text-xs md:text-md text-gray-400"> Behavioral Psychology <br/> Eastern Kentucky University 
                         <br /> Richmond, KY <br /> 2020-2022 </p>
                    </div>
                    <div className="flex text-center lg:p-0 lg:pb-4 p-4 flex-col text-left">
                        <h1 id="text" className=" font-semi-bold">Bachelor's Degree</h1>
                        <p id="text" className="text-xs md:text-md text-gray-400"> Psychology <br/> Centre College 
                     <br /> Danville, KY <br /> 2015-2019 </p>
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
                <div className="flex mb-4 space-x-4 lg:p-0 p-2 space-y-4 flex-col text-left">
                    <h1 className="justify-center text-sm md:flex-col md:text-sm lg:text-md text-center flex">
                        <ul className="mx-4 w-1/2  md:mx-0">
                            <li>UI/UX</li>
                            <li>Research</li> 
                            <li>Figma</li>
                            <li>Adobe Suite</li>
                            <li>Git/Github</li>
                            <li>React JS</li>
                            <li>APIs</li>
                        </ul>
                        <ul className="px-4 w-1/2  md:px-0 md:border-l-0">
                            <li>HTML</li>
                            <li>CSS</li> 
                            <li>Javascript</li>
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                            <li>Communication</li>
                            <li>Spanish</li> 
                            
                        </ul>
                    </h1>
                </div>
            </div>
        </div>

        
    )
}

export default Skills
