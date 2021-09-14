import React from 'react'
import { HomeIcon, UserIcon, DocumentTextIcon, CollectionIcon, MailIcon, MenuIcon } from '@heroicons/react/solid'
import { SocialIcon } from 'react-social-icons';


function Header() {

    return (
        <div id="about" className="mt-0 flex-col md:flex-row items-center flex transition justify-between sticky z-10 mb-8 top-0 bg-white  w-full shadow-md">
            {/*Logo*/}
           <h1 className="text-lg font-bold text-black pb-2 pt-3 px-4">John James</h1>
           <ul className=" flex px-4 py-2 text-black text-sm space-x-4 ">
                <li> <a className="border-b-4 flex p-2 rounded-lg border-transparent hover:shadow-md hover:bg-black transition" href="#about"><UserIcon className="h-5  text-gray-500" /></a></li>
                <li> <a className="border-b-4 flex p-2 rounded-lg border-transparent hover:shadow-md hover:bg-black transition" href="#resume"> <DocumentTextIcon className="h-5   text-gray-500" /></a></li>
                <li> <a className="border-b-4 flex p-2 rounded-lg border-transparent hover:shadow-md hover:bg-black transition" href="#projects"> <CollectionIcon className="h-5 text-gray-500" /></a></li>
                <li> <a className="border-b-4 flex p-2 rounded-lg border-transparent hover:shadow-md hover:bg-black transition" href="#contact"> <MailIcon className="h-5 text-gray-500" /></a></li>
            </ul> 
        </div>
    )
}

export default Header
