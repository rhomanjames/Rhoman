import React from 'react'
import Image from 'next/image'
import { HeartIcon, MailIcon } from '@heroicons/react/solid'
import { SocialIcon } from 'react-social-icons';


function Contact() {
    return (
        <div id="contact" className="w-full flex-col med:flex-row items-center align-center">
             {/*Image and title*/}
            <div className="w-full lg:pl-4 px-8 border-b-2 py-2 flex pr-4 flex-grow  align-center items-center">
                <div className=" w-full">
                <h1 id="text" className="text-3xl  w-full align-center h-full mt-auto flex-grow flex font-bold">Contact Me</h1>
                </div>

            </div>
            <div className="w-full p-4 ">
                {/*Content Text*/}
                <div className="flex mb-4 lg:p-0 p-4 space-y-4 flex-col text-left">
                    <input type="text" placeholder="Name" className="border-2 p-2"/>
                    <input type="text" placeholder="Email" className="border-2 p-2"/>
                    <input type="text" placeholder="Organization" className="border-2 p-2"/>
                    <textarea type="text" placeholder="Message" className="border-2 p-2"/>
                    <input type="submit" className="bg-blue-400 text-white border-2 p-2 cursor-pointer" />
                </div>
                {/*Buttons*/}
                <SocialIcon className="m-2 animate-bounce transition" url="https://www.linkedin.com/in/rhoman-james-b39383216/" />
                <SocialIcon className="m-2 delay-1000 transition" url="https://github.com/rhomanjames" />
            </div>
        </div>

        
    )
}

export default Contact