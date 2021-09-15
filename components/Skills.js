import React from 'react'
import Image from 'next/image'
import { HeartIcon, MailIcon } from '@heroicons/react/solid'


function Skills() {
    return (
        <div className="w-full left-full flex-col med:flex-row justify-center items-center align-center">
             {/*Image and title*/}
            <div className="w-full lg:pl-4 px-2 border-b-2 py-2 flex pr-2 flex-grow  align-center items-center">
                <div className="w-full">
                <h1 id="text" className="text-xl justify-center w-full align-center h-full mt-auto flex-grow flex font-bold">Skills</h1>
                </div>

            </div>
            <div className="w-full transition  p-4 ">
                {/*Content Text*/}
                <div className="flex mb-4 lg:p-0 p-2 space-y-4 flex-col text-left">
                    <h1 className="justify-center md:text-sm lg:text-md text-center flex">React JS, Javascript, CSS, HTML, CSS Frameworks, APIs, Git/Github, UI/UX Design, NextJS, Object-Oriented Programming, Responsive Design, Content Management Systems (CMS), Wordpress Themes, Adobe Creative Suite</h1>
                </div>
            </div>
        </div>

        
    )
}

export default Skills
