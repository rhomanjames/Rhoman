import React from 'react'
import Image from 'next/image'
import { HeartIcon, MailIcon } from '@heroicons/react/solid'


function AboutMe() {
    return (
        <div className="w-full flex-col med:flex-row items-center align-center">
             {/*Image and title*/}
            <div className="w-full lg:pl-4 px-8 border-b-2 py-2 flex pr-4 flex-grow  align-center items-center">
                <div>
                    <Image src="https://centrecolonels.com/images/2018/7/24//rhoman_james_mtrack_2017_18.jpg?" 
                    alt="Picture of the author"
                    className="rounded-lg" 
                    height={52.5}
                    width={38}/>
                </div>
                <div className=" ml-4 w-full">
                <h1 id="text" className="text-3xl  w-full align-center h-full mt-auto flex-grow flex font-bold">About Me</h1>
                </div>

            </div>
            <div className="w-full p-4 ">
                {/*Content Text*/}
                <div className="flex mb-4 lg:p-0 p-4 space-y-4 flex-col text-left">
                    <h1 className="text-md md:text-lg lg:text-xl font-bold">My name is Rhoman James and I'm a web developer and community liaison at Fayette County Public Schools in KY. <br /> <br id="resume" /> I love front-end web development and I really enjoy creating modern, engaging websites with a pleasant user experience.</h1>
                </div>
            </div>
        </div>

        
    )
}

export default AboutMe
