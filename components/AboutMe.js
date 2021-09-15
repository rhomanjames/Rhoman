import React from 'react'
import Image from 'next/image'
import { HeartIcon, MailIcon } from '@heroicons/react/solid'


function AboutMe() {
    return (
        <div className="w-full left-full flex-col med:flex-row justify-center items-center align-center">
             {/*Image and title*/}
             <div className=" ml-auto flex justify-center mr-auto">
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
            <div className="w-full transition  p-4 ">
                {/*Content Text*/}
                <div className="flex lg:p-0 p-1 space-y-4 flex-col text-left">
                    <h1 className="justify-center md:text-xs lg:text-md flex align-center text-center">My name is John James and I'm a web developer and community liaison at Fayette County Public Schools in KY.<br className="border-b-2 border-gray-50"/></h1>
                </div>
            </div>
        </div>

        
    )
}

export default AboutMe
