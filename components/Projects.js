import React from 'react'
import Image from 'next/image'
import { HeartIcon, MailIcon } from '@heroicons/react/solid'


function Projects() {
    function Like(clicked_id)
    {
        document.clicked_id.style.color = 'red';
    }
    return (
        <div className="w-full flex-col med:flex-row items-center align-center">
             {/*Image and title*/}
            <div className="w-full lg:pl-4 border-b-2 pb-4 px-8 py-2 flex pr-4 flex-grow  align-center items-center">

                <div className="w-full">
                <h1 className="text-xl  w-full align-center h-full mt-auto flex-grow flex font-bold">Projects</h1>
                </div>

            </div>
            <div className="w-full p-4 ">
                {/*Portfolio*/}
                <div className="flex mt- transition border-b-2  lg:p-0 p-4 space-y-4 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-lg lg:text-xl font-bold">This Portfolio</h1>
                    <h4>Clean UI, easy to navigate, vibrant colors. </h4>
                    {/*Hashtags*/}
                    <div className="flex space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">React JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2   p-2 rounded-lg font-semibold text-black">Next JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2   p-2 rounded-lg font-semibold text-black">Tailwind CSS</h4>
                    </div>
                    {/*Buttons*/}
                    <div className="flex  space-x-4 pb-4">
                        <a target="_blank" href="https://github.com/rhomanjames/rhoman"><h4 id="location" className="text-xs bg-black p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition cursor-pointer text-white">GitHub</h4></a>
                    </div>
                </div>

                {/*Google*/}
                <div className="flex mt-8 lg:p-0 transition justify-center w-full  p-4 border-b-2 object-left space-y-4 flex-col text-center ">
                <Image 
                    src= "/Google1.png"
                    alt="Google"
                    className=" Class
                    Properties
                    object-contain border-4 border-solid border-gray-100" 
                    height={200}
                    width={200}/> 
                    <h1 id="text" className="text-lg justify-center w-full md:text-lg lg:text-xl font-bold">Google Clone</h1>
                    <h4> Google's UI with search functionality powered by the Google API. </h4>
                    {/*Hashtags*/}
                    <div className="flex overflow-x-scroll w-full justify-center sm:overflow-x-visible space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">React JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">Next JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">Tailwind CSS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">Responsive</h4>
                    </div>
                    {/*Buttons*/}
                    <div className="flex  w-full justify-center space-x-4 pb-4">
                        <a target="_blank"  href="https://google-remade.vercel.app/"> <h4 id="location" className="text-xs bg-yellow-300 animate-pulse  p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-black">Live Demo</h4></a>
                        <a target="_blank"  href="https://github.com/rhomanjames/googly_moogly"> <h4 id="location" className="text-xs bg-black p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition cursor-pointer text-white">GitHub</h4> </a> 
                    </div>
                </div>

                {/*Weather*/}
                <div className="flex mt-8  lg:p-0 p-4 transition  space-y-4 flex-col text-center">
                    <h1 id="text" className="text-lg md:text-lg lg:text-xl font-bold">Big City Weather</h1>
                    <h4>Weather app powered by the OpenWeatherMap API. Click the temperature to change between celsius and farenheit.</h4>
                    {/*Hashtags*/}
                    <div className="flex w-full justify-center overflow-x-scroll  sm:overflow-x-visible space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">HTML</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">CSS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">Javascript</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">API</h4>
                    </div>
                    {/*Buttons*/}
                    <div className="flex w-full justify-center space-x-4 border-b-2 pb-8">
                        <a target="_blank" href="https://rhomanjames.github.io/weather-smether/"><h4 id="location" className="text-xs p-2 rounded-lg font-semibold bg-yellow-300 animate-pulse  hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-black">Live Demo</h4></a>
                        <a target="_blank" href="https://github.com/rhomanjames/weather-smether"><h4 id="location" className="text-xs bg-black p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition cursor-pointer text-white">GitHub</h4></a>
                    </div> 
                </div>

                {/*Indeed*/}
                <div className="flex mt-8 border-b-2 transition  lg:p-0 p-4 space-y-4 flex-col text-center">
                    <h1 id="text" className="text-lg md:text-lg lg:text-xl font-bold">Indeed UI Clone</h1>
                    <h4>Clone of Indeed's UI.</h4>
                    {/*Hashtags*/}
                    <div className="flex overflow-x-scroll w-full justify-center sm:overflow-x-visible space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">React JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">Next JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">Tailwind CSS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">Responsive</h4>
                    </div>
                    {/*Buttons*/}
                    <div className="flex w-full justify-center space-x-4 pb-4">
                        <a target="_blank"  href="https://minority-hire.vercel.app/"> <h4 id="location" className="text-xs bg-yellow-300 animate-pulse p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-black">Live Demo</h4></a>
                        <a target="_blank"  href="https://github.com/rhomanjames/minority_hire"> <h4 id="location" className="text-xs bg-black p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition cursor-pointer text-white">GitHub</h4> </a> 
                    </div>
                </div>

                {/*Scriptures*/}
                <div className="flex mt-8  lg:p-0 p-4 transition border-b-2 border-gray-50  space-y-4 flex-col text-center">
                    <h1 id="text" className="text-lg md:text-lg lg:text-xl font-bold">Daily Scripture Generator</h1>
                    <h4>Random scripture generator with a clean UI that is structured around object orentied programming. Share to social media with one click.</h4>
                    {/*Hashtags*/}
                    <div className="flex overflow-x-scroll w-full justify-center sm:overflow-x-visible space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">OOP</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">React JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">Next JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">Tailwind CSS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">NPM</h4>
                    </div>
                    {/*Buttons*/}
                    <div className="flex w-full justify-center space-x-4 pb-8">
                        <a target="_blank"  href="https://yahdaily.vercel.app/"> <h4 id="location" className="text-xs bg-yellow-300 animate-pulse  p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-black">Live Demo</h4></a> 
                        <a target="_blank"  href="https://github.com/rhomanjames/daily-scripture-generator"><h4 id="location" className="text-xs bg-black p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition cursor-pointer text-white">GitHub</h4></a>
                    </div>
                </div>
                
            </div>
        </div>

        
    )
}

export default Projects