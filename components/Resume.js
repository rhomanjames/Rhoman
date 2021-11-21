import React from 'react'
import Image from 'next/image'
import { HeartIcon, MailIcon, DownloadIcon } from '@heroicons/react/solid'


function Resume() {
    
    return (
        <div  id="home" className="w-full flex-col  med:flex-row items-center align-center">
             {/*Image and title*/}
            <div className="w-full lg:pl-4 px-8 border-b-2 py-2 flex pr-4 flex-grow  align-center items-center">
                <div className="w-full flex justify-between">
                <h1 id="text" className="text-xl font-montserrat  w-full align-center h-full mt-auto flex-grow flex font-bold">Resume</h1>
                </div>

            </div>
            <div className="w-full transition  p-4 ">
                {/*Content Text*/}
                <div className="flex border-b-2 lg:pb-4 lg:p-0 space-y-3 p-2 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-xl font-bold"> User Experience Lead</h1> 
                    <p id="text" className="text-xs md:text-md text-gray-400"> North American Plastics
                    | Dallas, TX  
                    <br /> 2021 </p>
                    <h1 className="">Oversee the user experience and user interfaces of our e-commerce stores and landing pages for the #1 plastics distributor in North America and the 20+ plastics companies under our umbrella </h1>
                </div>
                <br/>
                <div className="flex border-b-2 lg:pb-4 lg:p-0 space-y-3 p-2 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-xl font-bold"> User Experience Lead</h1> 
                    <p id="text" className="text-xs md:text-md text-gray-400"> Fayette County Public Schools 
                     | Lexington, KY   
                    <br /> 2021 </p>
                    <h1 className="">Conduct user experience research, build wireframes and prototypes based on stakeholders input<br /> <br /> Build web, and mobile applications to be used by Fayette County Public Schools employees and community partners</h1>
                </div>
                <div className="flex border-b-2 lg:pb-4 lg:p-0 lg:pt-4 space-y-3 p-2 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-xl font-bold">Project Manager</h1>
                    <p id="text" className="text-xs md:text-md text-gray-400"> Fayette County Public Schools 
                    
                    | Lexington, KY <br />2020</p>
                    <h1 className="">Collaborated with Superintendent’s Cabinet and Lexington Health Department to build a mobile application to inform stakeholders about COVID-19 <br /> <br /> Developed the 5 star public safety FCPS KY Matrix app, which is available on Google Play and Apple App Store <br /></h1>
                </div>
                <br/>
                <div className="flex lg:p-0 lg:pb-4 border-b-2 p-2 space-y-3 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-xl font-bold">UX Researcher</h1>
                    <p id="text" className="text-xs md:text-md text-gray-400"> Centre College 
                     | Danville, KY <br /> 2018 </p>
                    <h1 className="">Programmed a cognitive test using Inquisit software for a psychological study which assessed delays in response time due to mobile device distractions<br /> <br /> Analyzed empirical data about User Experience (UX) and presented to college faculty and students <br /> </h1>
                </div>
                <br /> 
                <div className="flex mb-4 lg:p-0 p-2 space-y-3 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-xl font-bold"> Computer Science Instructor</h1>
                    <p id="text" className="text-xs md:text-md text-gray-400">Uncommon Schools | Boston, MA<br /> 2018</p>
                    <h1 className="">Curated 10 weeks of various lessons, effectively teaching the fundamentals of computer science resulting in 100% of students passing the final exam</h1>
                </div>
            </div>
        </div>

        
    )
}

export default Resume