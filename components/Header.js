import React from 'react'
import { HomeIcon, UserIcon, DocumentTextIcon, CollectionIcon, MailIcon, MenuIcon } from '@heroicons/react/solid'
import { SocialIcon } from 'react-social-icons';


function Header() {

    return (
        <div id="about" className="mt-0 flex-col md:flex-row items-center flex transition justify-between sticky z-10 mb-8 top-0 bg-white  w-full shadow-md">
            {/*Logo*/}
           <h1 className="text-xl bg-white font-bold pb-2 pt-3 px-4">Rhoman James</h1>
           <ul className="bg-white flex px-4 py-2 text-sm space-x-4 ">
                <li> <a className="border-b-4 flex p-2 rounded-lg border-transparent hover:shadow-md hover:bg-green-500 transition" href="#about"><UserIcon className="h-5  text-black" /></a></li>
                <li> <a className="border-b-4 flex p-2 rounded-lg border-transparent hover:shadow-md hover:bg-green-500 transition" href="#resume"> <DocumentTextIcon className="h-5   text-black" /></a></li>
                <li> <a className="border-b-4 flex p-2 rounded-lg border-transparent hover:shadow-md hover:bg-green-500 transition" href="#projects"> <CollectionIcon className="h-5 text-black" /></a></li>
                <li> <a className="border-b-4 flex p-2 rounded-lg border-transparent hover:shadow-md hover:bg-green-500 transition" href="#contact"> <MailIcon className="h-5 text-black" /></a></li>
            </ul> 
        </div>
    )
}

export default Header
