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
            <div className="w-full border-b-2 pb-4 px-8 py-2 flex pr-4 flex-grow  align-center items-center">

                <div className="w-full">
                <h1 className="text-xl  w-full align-center justify-center h-full mt-auto flex-grow flex font-bold">Projects</h1>
                </div>

            </div>
            <div className="w-full p-4 ">

                {/*88 Hacks*/}
                <div className="flex mt-8  lg:p-0 p-4 transition  space-y-4 flex-col text-center">
                <Image 
                    src= "/DesignHacks.png"
                    alt="88 Design Hacks"
                    className="rounded-lg
                    object-contain border-4 border-solid border-gray-100" 
                    height={300}
                    width={300}/> 
                    <h1 id="text" className="text-lg md:text-lg lg:text-xl font-bold">88 UI/UX Design Hacks You Must Know</h1>
                    <h4 className="md:w-3/4 ml-auto mr-auto">Free eBook I wrote to help new UI/UX developers understand core concepts. Set to release in October 2021.</h4>
                    {/*Buttons*/}
                    <div className="flex w-full justify-center space-x-4 border-b-2 pb-8">
                        <a target="_blank" download="88 UI and UX Design Hacks You Must Know" href="/88Hacks.pdf"><h4 id="location" className="text-xs p-2 rounded-lg font-semibold bg-yellow-300 animate-pulse  hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-black">Preview Book</h4></a>
                    </div> 
                </div>

                {/*Portfolio*/}
                <div className="flex mt- transition border-b-2  lg:p-0 p-4 space-y-4 flex-col text-left">
                <Image 
                    src= "/Portfolio.png"
                    alt="Portfolio"
                    className=" Class
                    Properties
                    object-contain border-4 border-solid border-gray-100" 
                    height={216}
                    width={384}/> 
                    <h1 id="text" className="text-lg text-center pt-2 md:text-lg lg:text-xl font-bold">This Portfolio</h1>
                    <h4 className="text-center">Clean UI, easy to navigate, vibrant colors. </h4>
                    {/*Hashtags*/}
                    <div className="flex justify-center w-full space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">React JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2   p-2 rounded-lg font-semibold text-black">Next JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2   p-2 rounded-lg font-semibold text-black">Tailwind CSS</h4>
                    </div>
                    {/*Buttons*/}
                    <div className="flex justify-center w-full space-x-4 pb-4">
                        <a target="_blank" href="https://github.com/rhomanjames/rhoman"><h4 id="location" className="text-xs bg-black p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition cursor-pointer text-white">GitHub</h4></a>
                    </div>
                </div>

                {/*Google*/}
                <div className="flex mt-8 lg:p-0 transition justify-center w-full  p-4 border-b-2 object-left space-y-4 flex-col text-center ">
                <Image 
                    src= "/Onward.png"
                    alt="Onward"
                    className=" Class
                    Properties
                    object-contain border-4 border-solid border-gray-100" 
                    height={216}
                    width={384}/> 
                    <h1 id="text" className="text-lg justify-center w-full md:text-lg lg:text-xl font-bold">Onward Upward</h1>
                    <h4> Built for a youth mentoring group to compile learning resources. </h4>
                    {/*Hashtags*/}
                    <div className="flex overflow-x-scroll w-full justify-center sm:overflow-x-visible space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">HTML</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">CSS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">Responsive</h4>
                    </div>
                    {/*Buttons*/}
                    <div className="flex  w-full justify-center space-x-4 pb-4">
                        <a target="_blank"  href="https://rhomanjames.github.io/Onward-Upward/"> <h4 id="location" className="text-xs bg-yellow-300 animate-pulse  p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-black">Live Demo</h4></a>
                        <a target="_blank"  href="https://github.com/rhomanjames/Onward-Upward"> <h4 id="location" className="text-xs bg-black p-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition cursor-pointer text-white">GitHub</h4> </a> 
                    </div>
                </div>

                {/*Indeed*/}
                <div className="flex mt-8 border-b-2 transition  lg:p-0 p-4 space-y-4 flex-col text-center">
                <Image 
                    src= "/IndeedPic.png"
                    alt="Google"
                    className=" Class
                    Properties
                    object-contain border-4 border-solid border-gray-100" 
                    height={216}
                    width={384}/> 
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

                {/*Design Hacks*/}
                <div className="flex mt-8  lg:p-0 p-4 transition border-b-2 border-gray-50  space-y-4 flex-col text-center">
                <Image 
                    src= "/Scriptures.png"
                    alt="Scripture"
                    className="rounded-lg
                    object-contain border-4 border-solid border-gray-100" 
                    height={216}
                    width={384}/> 
                    <h1 id="text" className="text-lg md:text-lg lg:text-xl font-bold">Daily Scripture Generator</h1>
                    <h4>Random scripture generator with a clean UI that is structured around object orentied programming. Share to social media with one click.</h4>
                    {/*Hashtags*/}
                    <div className="flex overflow-x-scroll w-full justify-center sm:overflow-x-visible space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">React JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">Next JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-lg font-semibold text-black">Tailwind CSS</h4>
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