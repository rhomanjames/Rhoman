import React from 'react'
import Image from 'next/image'
import { HeartIcon, MailIcon } from '@heroicons/react/solid'


function Case2() {
    function Like(clicked_id)
    {
        document.clicked_id.style.color = 'red';
    }
    return (
        <div className="w-full flex-col med:flex-row items-center align-center">
             {/*Image and title*/}
            <div className="w-full border-b-2 pb-4 px-8 py-2 flex flex-grow  align-center items-center">

                <div className="w-full">
                <h1 className="text-xl  w-full align-center justify-center h-full mt-auto flex-grow flex font-bold">Case Study 2</h1>
                </div>

            </div>
            <div className="w-full p-4 ">

                {/*Portfolio*/}
                <div className="flex transition border-b-2 justify-center align-center lg:p-0 p-4 space-y-4 flex-col text-left">
                <Image 
                    src= "/NAP.png"
                    alt="North American Plastics Presentation"
                    className="lg:hidden border-4 border-solid border-gray-100" 
                    height={1080}
                    width={1920}
                    
                className="md:hidden"/>
                <iframe className="ml-auto hidden mr-auto" width="384" height="216" src="https://xd.adobe.com/embed/813503a6-6445-4676-aba4-c4a3f4307d0f-d466/?fullscreen&hints=off" frameborder="0" allowfullscreen></iframe>
                    <a><h1 id="text" className="text-lg cursor-pointer text-center pt-2 md:text-lg lg:text-xl font-bold">North American Plastics</h1></a>
                    <h4 className="text-center">Unify all 20+ plastics brands under the North American PLastics brand name. NAP is the #1 plastics distributor in North America. </h4>
                    {/*Hashtags*/}
                    <div className="flex justify-center w-full space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">UX Strategy</h4>
                        <h4 id="location" className="text-xs bg-white border-2   p-2 rounded-full font-semibold text-black">UX Research</h4>
                    </div>
                    <div className="flex  w-full justify-center space-x-4 pb-4">
                    <a target="_blank"  onClick={NAPCase}> <h4 id="NAPCase" className="text-xs bg-black  p-2 rounded-full font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">Case Study Overview</h4></a>  
                        <a target="_blank"  href="https://www.canva.com/design/DAEw113XkM0/hnc8mNY4hceLiZ2n0_dBnw/view?utm_content=DAEw113XkM0&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent"> <h4 id="NAPCase" className="text-xs bg-black  p-2 rounded-full font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">View Strategy </h4></a>
                    </div>
                    <div id="NAPCaseStudy" className="hidden">
                        <ol>
                            <li><strong>North American Plastics Digital Transformation</strong></li> <br/>
                            <li>User Experience Lead</li><br/>
                            <li>North Plastics has more than 20 brands under their umbrella, but their online presence is far from unified. NAP needed a <strong>clear strategy to successfully unify their brands digitally.</strong></li>
                            <br/><li>NAP has thrived on a decentralization model, which is great for the traditional sales model (e.g. through invoices, sales reps), but not so much for eCommerce. They needed a plan to <strong> unify these brands under one recognizable brand family.</strong></li>
                            <br/><li>This plan is already in action and is set to roll out successfully over the next 3 years. Phase 1 is expected to be complete by Q2 of 2022.</li>
                            <a target="_blank"  onClick={NAPCase}> <h4 id="location" className="text-xs mb-4 bg-black w-max mt-4  p-2 rounded-full font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">Hide Overview</h4></a>
                        
                        </ol>
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
                    <h4 className="text-center">Substantial user flow improvements to the eCommerce store for one of the top plastics distributors in the nation. </h4>
                    {/*Hashtags*/}
                    <div className="flex justify-center w-full space-x-4 pb-4">
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">Adobe XD</h4>
                        <h4 id="location" className="text-xs bg-white border-2   p-2 rounded-full font-semibold text-black">UX Design</h4>
                    </div>
                    <div className="flex  w-full justify-center space-x-4 pb-4">
                    <a target="_blank"  onClick={LairdCase}> <h4 id="LairdCase" className="text-xs bg-black  p-2 rounded-full font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">Case Study Overview</h4></a>
                        <a target="_blank"  href="https://xd.adobe.com/view/813503a6-6445-4676-aba4-c4a3f4307d0f-d466/?fullscreen&hints=off"> <h4 id="location" className="text-xs bg-black  p-2 rounded-full font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">View Prototype</h4></a>  
                        <a target="_blank"  href="https://www.canva.com/design/DAEwkB1ECdY/3aV5q7URYgCJ6mAdRwuazA/view?utm_content=DAEwkB1ECdY&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent"> <h4 id="LairdCase" className="text-xs bg-black  p-2 rounded-full font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">View Strategy </h4></a>
                    </div>
                    <div id="LairdCaseStudy" className="hidden">
                        <ol>
                            <li><strong>Laird Plastics Digital Transformation</strong></li> <br/>
                            <li>For North American Plastics (Parent Company)</li><br/>
                            <li>Lead UX Designer and Researcher</li><br/>
                            <li>Laird Plastics is one of the top plastics distributors in the country, but their website is causing them to lose out on valuable business. After reviewing data and conducting interviews, I <strong> redesigned their UI to optimize the user experience.</strong></li>
                            <br/><li>B2B eCommerce is different from B2C, so we had to figure out how to effectively <strong>implement a successful UX strategy that would work for B2B and B2C customers.</strong></li>
                            <br/><li>To solve this dilemma, we adapted some common B2C eCommerce trends and integrated it with the B2B requirements. <strong>Therefore we kept the modernity of B2C eCommerce while facilitating the B2B experience. We partnered with a full-service implementation partner to bring this to life.</strong></li>
                            <br/><li>The full plan is set to launch in Q1 of 2022.</li>
                            <a target="_blank"  onClick={LairdCase}> <h4 id="location" className="text-xs mb-4 bg-black w-max mt-4  p-2 rounded-full font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">Hide Overview</h4></a>
                        
                        </ol>
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
                        <a target="_blank"  onClick={StackCase}> <h4 id="StackCase" className="text-xs bg-black  p-2 rounded-full font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">View Case Study</h4></a>
                        
                    </div>
                    <div id="StackCaseStudy" className="hidden">
                        <ol>
                            <li><strong>Stackpath UI Makeover</strong></li> <br/>
                            <li>For Stackpath, a cloud-computing company in Dallas, TX</li><br/>
                            <li>Lead Visual Designer</li><br/>
                            <li>Stackpath is become one of the <strong>world's most valuable edge computing services</strong>, but their website didn't reflect their success. </li>
                            <br/><li>Stackpath has recently shifted their business focus to edge computing, but their website was still catered to their older clients and didn't focus on attracting new customers who want to swiftly have their questions answered. Plus, the UI was very cluttered.</li>
                            <br/><li>The solution I proposed was to <strong>clean up the UI, give a clear course of action and reduce cognitive load </strong>by taking words off of the screen. Overall, it looks <em>much</em> cleaner than what they had it place.</li>
                            <br/><li>This design was praised by the Director of UX, who would like to implement this in 2022.</li>
                            <a target="_blank"  onClick={StackCase}> <h4 id="location" className="text-xs mb-4 bg-black w-max mt-4  p-2 rounded-full font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black cursor-pointer transition text-white">Hide Case Study</h4></a>
                        
                        </ol>
                    </div>
                    
                </div>

                {/*Portfolio*/}
                <div className="flex lg:p-0 p-4 transition  space-y-4 flex-col text-center">
                    <h1 id="text" className="text-lg md:text-lg mt-4 lg:text-xl font-bold">This portfolio</h1>
                    <h4 className="md:w-3/4 ml-auto mr-auto">I designed and built this portfolio with React JS, Next JS and Tailwind CSS, no template. Beautiful, aesthetic gradient, optimized for recruiters and hiring managers to scroll through seamlessly. Check out the responsiveness by resizing the screen.</h4>
                    {/*Hashtags*/}
                    <div className="flex overflow-x-scroll w-full justify-center sm:overflow-x-visible space-x-4 border-b-2 pb-8">
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">React JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">Next JS</h4>
                        <h4 id="location" className="text-xs bg-white border-2  p-2 rounded-full font-semibold text-black">Tailwind CSS</h4>
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


                {/*Onward*/}
                <div className="flex mt-8 lg:p-0 transition justify-center w-full  p-4 border-b-2 object-left space-y-4 flex-col text-center ">
                <Image 
                    src= "/Onward1.png"
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
                
            </div>
        </div>

        
    )
    function LairdCase () {
        if (document.getElementById('LairdCaseStudy').classList.contains('hidden')) {
            let Laird = document.getElementById('LairdCaseStudy')
            let btn = document.getElementById('LairdCase')
        Laird.classList.remove('hidden');
        btn.innerText = 'Hide Case Study'
        }

        else {
            let Laird = document.getElementById('LairdCaseStudy')
            let btn = document.getElementById('LairdCase')
        Laird.classList.add('hidden');
        btn.innerText = 'View Case Study'
        }

    }

    function NAPCase () {
        if (document.getElementById('NAPCaseStudy').classList.contains('hidden')) {
            let NAP = document.getElementById('NAPCaseStudy')
            let btn = document.getElementById('NAPCase')
        NAP.classList.remove('hidden');
        btn.innerText = 'Hide Case Study'
        }

        else {
            let NAP = document.getElementById('NAPCaseStudy')
            let btn = document.getElementById('NAPCase')
        NAP.classList.add('hidden');
        btn.innerText = 'View Case Study'
        }

    }

    function StackCase () {
        if (document.getElementById('StackCaseStudy').classList.contains('hidden')) {
            let Stack = document.getElementById('StackCaseStudy')
            let btn = document.getElementById('StackCase')
        Stack.classList.remove('hidden');
        btn.innerText = 'Hide Case Study'
        }

        else {
            let Stack = document.getElementById('StackCaseStudy')
            let btn = document.getElementById('StackCase')
        Stack.classList.add('hidden');
        btn.innerText = 'View Case Study'
        }

    }
}

export default Case2