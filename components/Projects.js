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
            <div className="w-full border-b-2 pb-4 px-8 py-2 flex flex-grow  align-center items-center">

                <div className="w-full">
                <h1 className="text-xl  w-full align-center justify-center h-full mt-auto flex-grow flex font-bold">Projects</h1>
                </div>

            </div>
            <div className="w-full p-4 ">

                {/*Portfolio*/}
                <div className="flex lg:p-0 p-4 transition  space-y-4 flex-col text-center">
                    <h1 id="text" className="text-lg md:text-lg lg:text-xl font-bold">This portfolio</h1>
                    <h4 className="md:w-3/4 ml-auto mr-auto">I designed and built this portfolio with React JS, Next JS and Tailwind CSS, no template. Check out the responsiveness by resizing the screen.</h4>
                    {/*Hashtags*/}
                    <div className="flex overflow-x-scroll w-full justify-center sm:overflow-x-visible space-x-4 border-b-2 pb-8">
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">React JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">Next JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">Tailwind CSS</h4>
                    </div>
                </div>

                {/*88 Hacks*/}
                <div className="flex mt-8  lg:p-0 p-4 transition  space-y-4 flex-col text-center">
                <Image 
                    src= "/DesignHacks.png"
                    alt="88 Design Hacks"
                    className="rounded-full
                    object-contain border-4 border-solid border-gray-100" 
                    height={300}
                    width={300}/> 
                    <h1 id="text" className="text-lg md:text-lg lg:text-xl font-bold">88 UI/UX Design Hacks You Must Know</h1>
                    <h4 className="md:w-3/4 ml-auto mr-auto">An eBook I'm writing to help new UI/UX developers understand core concepts. Still in production.</h4>
                    {/*Buttons*/}
                    <div className="flex w-full justify-center space-x-4 border-b-2 pb-8">
                        <a target="_blank" download="88 UI and UX Design Hacks You Must Know" href="/88Hacks.pdf"><h4 id="location" className="text-xs p-2 rounded-full font-semibold bg-black text-white animate-pulse  hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition">Preview Book</h4></a>
                    </div> 
                </div>

                {/*Portfolio*/}
                <div className="flex transition border-b-2 justify-center align-center lg:p-0 p-4 space-y-4 flex-col text-left">
                <Image 
                    src= "/LairdNew.png"
                    alt="LairdPrototype"
                    className="lg:hidden border-4 border-solid border-gray-100" 
                    height={1080}
                    width={1920}
                    
                className="md:hidden"/>
                <iframe className="ml-auto hidden mr-auto" width="384" height="216" src="https://xd.adobe.com/embed/813503a6-6445-4676-aba4-c4a3f4307d0f-d466/?fullscreen&hints=off" frameborder="0" allowfullscreen></iframe>
                    <a><h1 id="text" className="text-lg cursor-pointer text-center pt-2 md:text-lg lg:text-xl font-bold">Laird Plastics</h1></a>
                    <h4 className="text-center"><strong className=" hidden">Click where the yellow arrow points (above) to follow along.</strong><strong className="block">Click the presentation button below to test it out.</strong> <br /> Substantial user flow improvements to the eCommerce store for one of the top plastics distributors in the nation. </h4>
                    {/*Hashtags*/}
                    <div className="flex justify-center w-full space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">Adobe XD</h4>
                        <h4 id="location" className="text-xs bg-white border-2   p-2 rounded-full font-semibold text-black">UX</h4>
                    </div>
                    <div className="flex  w-full justify-center space-x-4 pb-4">
                        <a target="_blank"  href="https://xd.adobe.com/view/813503a6-6445-4676-aba4-c4a3f4307d0f-d466/?fullscreen&hints=off"> <h4 id="location" className="text-xs bg-black animate-pulse  p-2 rounded-full font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">View Prototype</h4></a>  
                    </div>
                </div>

                {/*Truthify*/}
                <div className="flex mt- transition border-b-2  lg:p-0 p-4 space-y-4 flex-col text-left">
                <Image 
                    src= "/Truthify.png"
                    alt="TruthifyUI-UI"
                    download="/MinoHire.png"
                    className=" Class
                    Properties
                    object-contain border-4 border-solid border-gray-100" 
                    height={216}
                    width={384}/> 
                    <a><h1 href="https://www.canva.com/design/DAEr7U5a44A/dKtOljxJu_Apr1vhX134ew/view?utm_content=DAEr7U5a44A\u0026utm_campaign=designshare\u0026utm_medium=link\u0026utm_source=publishpresent" id="text" className="text-lg cursor-pointer text-center pt-2 md:text-lg lg:text-xl font-bold">Truthify</h1></a>
                    <h4 className="text-center">Dynamic and sleek interface built for a new music streaming app. </h4>
                    {/*Hashtags*/}
                    <div className="flex justify-center w-full space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">UI</h4>
                        <h4 id="location" className="text-xs bg-white border-2   p-2 rounded-full font-semibold text-black">UX</h4>
                    </div>
                    <div className="flex  w-full justify-center space-x-4 pb-4">
                        <a target="_blank"  href="https://www.canva.com/design/DAEr7VXtTrQ/nyA3IWhghgUB3uFInbgFIQ/view?utm_content=DAEr7VXtTrQ&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent"> <h4 id="location" className="text-xs bg-black animate-pulse  p-2 rounded-full font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">View Presentation</h4></a>
                        
                    </div>
                    
                </div>

                {/*Truthify*/}
                <div className="flex mt- transition border-b-2  lg:p-0 p-4 space-y-4 flex-col text-left">
                <Image 
                    src= "/Stack.png"
                    alt="StackPath Website"
                    className=" Class
                    Properties
                    object-contain border-4 border-solid border-gray-100" 
                    height={216}
                    width={384}/> 
                    <a><h1 href="https://www.canva.com/design/DAEr7U5a44A/dKtOljxJu_Apr1vhX134ew/view?utm_content=DAEr7U5a44A\u0026utm_campaign=designshare\u0026utm_medium=link\u0026utm_source=publishpresent" id="text" className="text-lg cursor-pointer text-center pt-2 md:text-lg lg:text-xl font-bold">StackPath Redesign</h1></a>
                    <h4 className="text-center">UI makeover for StackPath -- an edge computing company in Texas. Click 'View Figma files' below to see wireframe and ideation. </h4>
                    {/*Hashtags*/}
                    <div className="flex justify-center w-full space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">Figma</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">UX</h4>
                        <h4 id="location" className="text-xs bg-white border-2   p-2 rounded-full font-semibold text-black">UI</h4>
                    </div>
                    <div className="flex  w-full justify-center space-x-4 pb-4">
                        <a target="_blank"  href="https://www.figma.com/file/HR6HluVYfgT5Eia6mQn7rV/StackPath?node-id=0%3A1"> <h4 id="location" className="text-xs bg-black animate-pulse  p-2 rounded-full font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">View Figma files</h4></a>
                        
                    </div>
                    
                </div>

                {/*Onward*/}
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
                    <h4> Built for a youth mentoring group to compile learning resources. Simple and clean UI optimized for quick access. </h4>
                    {/*Hashtags*/}
                    <div className="flex overflow-x-scroll w-full justify-center sm:overflow-x-visible space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">UX</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">HTML</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">CSS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">Responsive</h4>
                    </div>
                    {/*Buttons*/}
                    <div className="flex  w-full justify-center space-x-4 pb-4">
                    <a target="_blank"  href="https://github.com/rhomanjames/Onward-Upward"> <h4 id="location" className="text-xs bg-white p-2 rounded-full font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition cursor-pointer text-black">GitHub</h4> </a> 
                        <a target="_blank"  href="https://rhomanjames.github.io/Onward-Upward/"> <h4 id="location" className="text-xs bg-black animate-pulse  p-2 rounded-full font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">Live Demo</h4></a>
                        
                    </div>
                </div>

                {/*Design Hacks*/}
                <div className="flex mt-8  lg:p-0 p-4 transition border-b-2 border-gray-50  space-y-4 flex-col text-center">
                <Image 
                    src= "/Scriptures.png"
                    alt="Scripture"
                    className="rounded-full
                    object-contain border-4 border-solid border-gray-100" 
                    height={216}
                    width={384}/> 
                    <h1 id="text" className="text-lg md:text-lg lg:text-xl font-bold">Daily Scripture Generator</h1>
                    <h4>Random scripture generator with a clean UI that is structured around object orentied programming. Share to social media with one click.</h4>
                    {/*Hashtags*/}
                    <div className="flex overflow-x-scroll w-full justify-center sm:overflow-x-visible space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">React JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">Next JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">Tailwind CSS</h4>
                    </div>
                    {/*Buttons*/}
                    <div className="flex w-full justify-center space-x-4 pb-8">
                    <a target="_blank"  href="https://github.com/rhomanjames/daily-scripture-generator"><h4 id="location" className="text-xs bg-white p-2 rounded-full font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition cursor-pointer text-black">GitHub</h4></a>
                        <a target="_blank"  href="https://yahdaily.vercel.app/"> <h4 id="location" className="text-xs  animate-pulse bg-black   p-2 rounded-full font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">Live Demo</h4></a> 
                    </div>
                </div>
                
            </div>
        </div>

        
    )
}

export default Projects