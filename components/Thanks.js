import React from 'react'
import Image from 'next/image'
import { HeartIcon, MailIcon } from '@heroicons/react/solid'
import { SocialIcon } from 'react-social-icons';


function Thanks() {
    return (
        <div id="contact" className="w-full flex-col med:flex-row items-center align-center">
             {/*Image and title*/}
            <div className="w-full lg:pl-4 px-8 py-2 justify-center flex pr-4 flex-grow  align-center items-center">
                <div className="justify-center text-center align-center w-full">
                <h1 id="text" className="text-xl  w-full align-center h-full mt-auto flex-grow flex font-bold">Thank you for stopping by! I look forward to hearing from you.</h1>
                </div>

            </div>
        </div>

        
    )
}

export default Thanks