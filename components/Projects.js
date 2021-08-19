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
                <h1 className="text-3xl  w-full align-center h-full mt-auto flex-grow flex font-bold">Projects</h1>
                </div>

            </div>
            <div className="w-full p-4 ">
                {/*Portfolio*/}
                <div className="flex mt-2  lg:p-0 p-4 space-y-4 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-lg lg:text-xl font-bold">This Portfolio</h1>
                    <h4>I had alot of fun making this website! I developed this portfolio to mimic something we all use: social media!</h4>
                    {/*Hashtags*/}
                    <div className="flex space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2 border-black p-2 rounded-lg font-semibold text-black">React JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">Next JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">Tailwind CSS</h4>
                    </div>
                    {/*Buttons*/}
                    <div className="flex  space-x-4 border-b-2 pb-4">
                        <a target="_blank" href="https://github.com/rhomanjames/rhoman"><h4 id="location" className="text-xs bg-black p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition cursor-pointer text-white">GitHub</h4></a>
                    </div>
                </div>

                {/*Google*/}
                <div className="flex mt-8  lg:p-0 p-4 space-y-4 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-lg lg:text-xl font-bold">Google Clone</h1>
                    <h4> Yes, I cloned Google! Not only does it look like Google, it also works like Google thanks to the Google API! I intend on making more improvements as a continue to learn more skills. </h4>
                    {/*Hashtags*/}
                    <div className="flex overflow-x-scroll md:overflow-auto space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">React JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">Next JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">Tailwind CSS</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">Responsive</h4>
                    </div>
                    {/*Buttons*/}
                    <div className="flex  space-x-4 pb-4">
                        <a target="_blank"  href="https://google-remade.vercel.app/"> <h4 id="location" className="text-xs bg-green-500 animate-pulse  p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">Live Demo</h4></a>
                        <a target="_blank"  href="https://github.com/rhomanjames/googly_moogly"> <h4 id="location" className="text-xs bg-black p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition cursor-pointer text-white">GitHub</h4> </a> 
                    </div>
                </div>

                {/*Weather*/}
                <div className="flex mt-8  lg:p-0 p-4 space-y-4 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-lg lg:text-xl font-bold">Big City Weather</h1>
                    <h4>Want to know what the weather is right now in Sydney, Australia? What about Cancun, Mexico? Look no further! Powered by OpenWeatherAPI, you can look up the current weather in any major city in the world. Prefer farenheit rather than celsius? Don't sweat it (hehe, weather joke). Click the temperature to change between farenheit and celsius.</h4>
                    {/*Hashtags*/}
                    <div className="flex  overflow-x-scroll md:overflow-auto space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">HTML</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">CSS</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">Javascript</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">API</h4>
                    </div>
                    {/*Buttons*/}
                    <div className="flex  space-x-4 border-b-2 pb-8">
                        <a target="_blank" href="https://rhomanjames.github.io/weather-smether/"><h4 id="location" className="text-xs p-2 rounded-lg font-semibold bg-green-500 animate-pulse  hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">Live Demo</h4></a>
                        <a target="_blank" href="https://github.com/rhomanjames/weather-smether"><h4 id="location" className="text-xs bg-black p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition cursor-pointer text-white">GitHub</h4></a>
                    </div> 
                </div>

                {/*Indeed*/}
                <div className="flex mt-8  lg:p-0 p-4 space-y-4 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-lg lg:text-xl font-bold">Indeed UI Clone</h1>
                    <h4>I've spent so much time on Indeed applying to jobs in my lifetime that I decided clone the Indeed UI (and make it even cleaner!) -- Go to Indeed and see the similarities and slight improvements I've made. This is actually phase 1 of a greater project, a job site specifically for minority job candidates called MinoHire.</h4>
                    {/*Hashtags*/}
                    <div className="flex overflow-x-scroll md:overflow-auto space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">React JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">Next JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">Tailwind CSS</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">Responsive</h4>
                    </div>
                    {/*Buttons*/}
                    <div className="flex  space-x-4 pb-4">
                        <a target="_blank"  href="https://minority-hire.vercel.app/"> <h4 id="location" className="text-xs bg-green-500 animate-pulse p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">Live Demo</h4></a>
                        <a target="_blank"  href="https://github.com/rhomanjames/minority_hire"> <h4 id="location" className="text-xs bg-black p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition cursor-pointer text-white">GitHub</h4> </a> 
                    </div>
                </div>

                {/*Scriptures*/}
                <div className="flex mt-8  lg:p-0 p-4 space-y-4 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-lg lg:text-xl font-bold">Daily Scripture Generator</h1>
                    <h4>In my free time I love reading scriptures. I saw that my wife was going to a "Daily Bible Verse" app everyday and I thought, "Maybe I could make one of those, but better." -- So I did! Quickly refresh the screen and find new scriptures along with a call to action to assist in understanding biblical concepts more. Want to share the verse? Share it on social media by clicking the beautiful Facebook and Twitter Icons from the react-share npm.</h4>
                    {/*Hashtags*/}
                    <div className="flex overflow-x-scroll md:overflow-auto space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">OOP</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">React JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">Next JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">Tailwind CSS</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">NPM</h4>
                    </div>
                    {/*Buttons*/}
                    <div className="flex  space-x-4 border-b-2 pb-8">
                        <a target="_blank"  href="https://yahdaily.vercel.app/"> <h4 id="location" className="text-xs bg-green-500 animate-pulse  p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">Live Demo</h4></a> 
                        <a target="_blank"  href="https://github.com/rhomanjames/daily-scripture-generator"><h4 id="location" className="text-xs bg-black p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition cursor-pointer text-white">GitHub</h4></a>
                    </div>
                </div>

                {/*Onward Upward*/}
                <div className="flex lg:p-0 p-4 mt-8 space-y-4 flex-col text-left">
                    <h1 id="text" className="text-lg md:text-lg lg:text-xl font-bold">Onward Upward</h1>
                    <h4>I made this for a youth mentoring program I was leading in our school district. We wanted to share some resources that the students could use to continue learning!</h4>
                    {/*Hashtags*/}
                    <div className="flex overflow-x-scroll sm:overflow-auto space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">React JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">Next JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">Tailwind CSS</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">Responsive</h4>
                        <h4 id="location" className="text-xs bg-white border-2 border-black  p-2 rounded-lg font-semibold text-black">API</h4>
                    </div>
                    {/*Buttons*/}
                    <div className="flex  space-x-4 border-b-2 pb-8">
                        <a target="_blank" href="https://rhomanjames.github.io/Onward-Upward/"><h4 id="location" className="text-xs bg-green-500 animate-pulse p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">Live Demo</h4></a>
                        <a target="_blank" href="https://github.com/rhomanjames/onward-upward"><h4 id="location" className="text-xs bg-black p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition cursor-pointer text-white">GitHub</h4></a>
                    </div>
                </div>
                
            </div>
        </div>

        
    )
}

export default Projects