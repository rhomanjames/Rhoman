import React from 'react'
import Image from 'next/image'
import { HeartIcon, MailIcon } from '@heroicons/react/solid'
import { SocialIcon } from 'react-social-icons';


function Thanks() {
    return (
        <div id="contact" className="w-full flex flex-col med:flex-row items-center text-center align-center">
             {/*Image and title*/}
            <div className="w-full py-2 text-center justify-center flex flex-grow  align-center items-center">
                <div className="justify-center text-center flex align-center w-full">
                <h1 id="text" className=" w-full text-center h-full mt-auto flex-grow flex ">Thank you for stopping by! I look forward to hearing from you.</h1>
                </div>

            </div>
        </div>

        
    )
}

export default Thanks