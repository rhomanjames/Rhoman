import React from 'react'
import Image from 'next/image'
import { HeartIcon, MailIcon, DownloadIcon } from '@heroicons/react/solid'


function Resume() {
    
    return (
        <div className="w-full flex-col med:flex-row items-center align-center">
             {/*Image and title*/}
            <div className="w-full lg:pl-4 px-8 border-b-2 py-2 flex pr-4 flex-grow  align-center items-center">
                <div className="w-full flex justify-between">
                <h1 id="text" className="text-xl  w-full align-center h-full mt-auto flex-grow flex font-bold">Resume</h1>
                </div>

            </div>
            <div className="w-full transition  p-4 ">
                {/*Content Text*/}
                <div className="flex border-b-2 lg:pb-4 lg:p-0 space-y-3 p-4 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-xl font-bold"> App Developer</h1> 
                    <p id="text" className="text-xs md:text-md text-gray-400"> Fayette County Public Schools 
                    <Image 
                    src= "/FCPS_star.jpg"
                    alt="FCPS"
                    className="m-4 absolute right-4 object-left
                    object-contain border-4 border-solid border-gray-100" 
                    height={15}
                    width={15}/> | Lexington, KY   
                    <br /> March 2020 - Present </p>
                    <h1 className="">Created a  cross platform application for Fayette county’s Student Support Professional Institute (SSPI) to promote districtwide initiatives. <br /> <br /> Published the SSPI application as a mechanism to facilitate the SSPI district wide conference for medical health professionals.</h1>
                </div>
                <div className="flex border-b-2 lg:pb-4 lg:p-0 lg:pt-4 space-y-3 p-4 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-xl font-bold"> Superintendent Apprentice</h1>
                    <p id="text" className="text-xs md:text-md text-gray-400"> Fayette County Public Schools 
                    <Image 
                    src= "/FCPS_star.jpg"
                    alt="FCPS"
                    className="m-4 absolute right-4 object-left
                    object-contain border-4 border-solid border-gray-100" 
                    height={15}
                    width={15}/>
                    | Lexington, KY <br /> March 2020 - Present </p>
                    <h1 className="">Work with the Superintendent's cabinet and Lexington Fayette County Health Department to build a mobile application to inform stakeholders about COVID-19.</h1>
                </div>
                <br/>
                <div className="flex lg:p-0 lg:pb-4 border-b-2 p-4 space-y-3 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-xl font-bold">Behavior Research Fellow</h1>
                    <p id="text" className="text-xs md:text-md text-gray-400"> Centre College 
                    <Image 
                    src= "/centre.png"
                    alt="FCPS"
                    className="m-4 absolute right-4 object-left
                    object-contain border-4 border-solid border-gray-100" 
                    height={15}
                    width={15}/> | Danville, KY <br /> August 2018 - May 2019 </p>
                    <h1 className="">Programmed a cognitive test using Inquisit software for a psychological study which assessed delays in response time due to mobile device distractions.<br /> <br /> Analyzed empirical data about User Experience (UX) and presented to college faculty and students. <br /> </h1>
                </div>
                <br /> 
                <div className="flex mb-4 lg:p-0 p-4 space-y-3 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-xl font-bold"> Computer Science Teaching Fellow </h1>
                    <p id="text" className="text-xs md:text-md text-gray-400">Uncommon Schools | Boston, MA<br /> June 2018 - August 2018 </p>
                    <h1 className="">Curated 10 weeks of various lessons, effectively teaching the fundamentals of computer science resulting in 100 percent of students passing the final exam.</h1>
                </div>
            </div>
        </div>

        
    )
}

export default Resume