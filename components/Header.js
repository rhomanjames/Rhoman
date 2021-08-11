import React from 'react'
import { HomeIcon, UserIcon, DocumentTextIcon, CollectionIcon, MailIcon } from '@heroicons/react/solid'


function Header() {

    return (
        <div id="about" className="mt-0 flex transition flex-col sticky z-10 mb-8 top-0 justify-between bg-white  w-full text-center shadow-md">
            {/*Logo*/}
           <h1 className="text-xl font-bold pb-2 pt-3 px-4">Rhoman James</h1> 
           <ul className="flex w-full ml-auto justify-evenly md:justify-center px-4 pb-2 text-sm space-x-4 md:space-x-16">
                <li> <a className="border-b-4 flex p-2 rounded-lg border-transparent hover:shadow-md hover:bg-blue-200 transition" href="#about"><UserIcon className="h-5  text-black" /></a></li>
                <li> <a className="border-b-4 flex p-2 rounded-lg border-transparent hover:shadow-md hover:bg-blue-200 transition" href="#resume"> <DocumentTextIcon className="h-5   text-black" /></a></li>
                <li> <a className="border-b-4 flex p-2 rounded-lg border-transparent hover:shadow-md hover:bg-blue-200 transition" href="#projects"> <CollectionIcon className="h-5 text-black" /></a></li>
                <li> <a className="border-b-4 flex p-2 rounded-lg border-transparent hover:shadow-md hover:bg-blue-200 transition" href="#contact"> <MailIcon className="h-5 text-black" /></a></li>
            </ul> 
        </div>
    )
}

export default Header
