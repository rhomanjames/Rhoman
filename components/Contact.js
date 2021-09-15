import React from 'react'
import Image from 'next/image'
import { HeartIcon, MailIcon } from '@heroicons/react/solid'
import { SocialIcon } from 'react-social-icons';


function Contact() {
    return (
        <div id="contact" className="w-full justify-center flex-col med:flex-row items-center align-center">
             {/*Image and title*/}
            <div className="w-full lg:pl-4 px-8 border-b-2 py-2 flex pr-4 flex-grow  align-center items-center">
                <div className=" w-full">
                <h1 id="text" className="text-xl justify-center w-full align-center h-full mt-auto flex-grow flex font-bold">Contact Me</h1>
                </div>

            </div>
            <div className="w-full transition  p-4 ">
                {/*Content Text*/}
                <div className="flex lg:p-0 justify-center p-4 space-y-4 flex-col text-left">
                    <h1 className="font-bold animate-bounce justify-center flex">JohnJamesCoding@gmail.com</h1>
                    <h1 className=" justify-center flex">859-536-0453</h1>
                    <SocialIcon className="mt-8 ml-auto mr-auto justify-center text-center align-center flex transition" url="https://www.linkedin.com/in/rhoman-james-b39383216/" />
                </div>
                {/*Buttons*/}
            </div>
        </div>

        
    )
}

export default Contact