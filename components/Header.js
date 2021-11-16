import React from 'react'
import Image from 'next/image'

import { HomeIcon, UserIcon, DocumentTextIcon, CollectionIcon, MailIcon, MenuIcon } from '@heroicons/react/solid'
import { SocialIcon } from 'react-social-icons';


function Header() {

    return (
        <div id="about" className="mt-0 bg-yellow-300 flex-col p-2 md:flex-row items-center justify-center flex transition sticky z-10 mb-8 top-0  w-full shadow-sm">
            {/*Logo*/}
            <Image 
                    href="#home"
                    src= "/logo.png"
                    alt="Picture of the author"
                    className="rounded-full absolute border-4 border-solid border-gray-100" 
                    height={35}
                    width={35}/> 
        </div>
    )
}

export default Header
