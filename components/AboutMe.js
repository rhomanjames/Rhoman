import React from 'react'
import Image from 'next/image'
import { HeartIcon, MailIcon } from '@heroicons/react/solid'


function AboutMe() {
    return (
        <div className="w-full left-full flex-col med:flex-row justify-center items-center align-center">
             {/*Image and title*/}
             <div className=" ml-auto mt-2 flex justify-center mr-auto">
                    <Image 
                    src= "/portfoliopic.png"
                    alt="Picture of the author"
                    className="rounded-full border-4 justify-center w-full border-solid border-gray-100" 
                    height={100}
                    width={100}/>
            </div>
            <div className="w-full lg:pl-4 px-2 border-b-2 py-2 justify-center text-center flex pr-2 flex-grow  align-center items-center">
                <div className="w-full">
                <h1 id="text" className="text-xl justify-center w-full align-center h-full mt-auto flex-grow flex font-bold">About Me</h1>
                </div>

            </div>
            <div className="w-full transition p-4 ">
                {/*Content Text*/}
                <div className="flex lg:p-0 p-1 space-y-4 flex-col text-left">
                    <h1 className="justify-center md:text-sm lg:text-md flex flex-col align-center text-center">Hey, it's John. <br/> <br/> <b>I'm the skilled, ready-to-go UX Designer you've been searching for.</b></h1>
                </div>
                <br/>
                <a href="#contact" className="ml-auto mr-auto w-full"><button className=" p-2 w-max flex text-center justify-center ml-auto mr-auto rounded-full bg-black text-white text-sm font-semibold bg-black ">Contact me</button></a>
            </div>
        </div>

        
    )
}

export default AboutMe
