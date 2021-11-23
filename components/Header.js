import React from 'react'
import Image from 'next/image'

import { HomeIcon, UserIcon, DocumentTextIcon, CollectionIcon, MailIcon, MenuIcon } from '@heroicons/react/solid'
import { SocialIcon } from 'react-social-icons';

function Header() {

    function nightmode() {

        if (document.getElementById('name').classList.contains('text-black')) {
    
            let home = document.getElementById('test');
            home.classList.add('text-white');
            home.classList.add('bg-black');
            home.classList.remove('text-black');
            home.classList.remove('bg-white');

            let skills = document.getElementById('skills');
            skills.classList.add('text-white');
            skills.classList.add('bg-black');
            skills.classList.remove('text-black');
            skills.classList.remove('bg-white');

            let header = document.getElementById('header');
            header.classList.add('text-white');
            header.classList.add('bg-black');
            header.classList.remove('text-black');
            header.classList.remove('bg-white');
            

            let resume = document.getElementById('resume');
            resume.classList.add('text-white');
            resume.classList.add('bg-black');
            resume.classList.remove('text-black');
            resume.classList.remove('bg-white');
            

            let projects = document.getElementById('projects');
            projects.classList.add('text-white');
            projects.classList.add('bg-black');
            projects.classList.remove('text-black');
            projects.classList.remove('bg-white');
           

            let contact = document.getElementById('contact');
            contact.classList.add('text-white');
            contact.classList.add('bg-black');
            contact.classList.remove('text-black');
            contact.classList.remove('bg-white');
            

            let name = document.getElementById('name');

            name.classList.add('text-white');
            name.classList.remove('text-black');

            let mode = document.getElementById('mode');
            mode.innerText = 'Light Mode';
            mode.classList.remove('animate-pulse'); 

            let email = document.getElementById('email');
            email.classList.add('text-white');
            email.classList.remove('text-black');


        }
        else  {
            let home = document.getElementById('test');
            home.classList.remove('text-white');
            home.classList.remove('bg-black');
            home.classList.add('text-black');
            home.classList.add('bg-white');
            home.classList.remove('border-black');


            let skills = document.getElementById('skills');
            skills.classList.remove('text-white');
            skills.classList.remove('bg-black');
            skills.classList.add('text-black');
            skills.classList.add('bg-white');
            skills.classList.remove('border-black');

            let header = document.getElementById('header');
            header.classList.remove('text-white');
            header.classList.remove('bg-black');
            header.classList.add('text-black');
            header.classList.add('bg-white');
            header.classList.remove('border-black');

            let resume = document.getElementById('resume');
            resume.classList.remove('text-white');
            resume.classList.remove('bg-black');
            resume.classList.add('text-black');
            resume.classList.add('bg-white');
            resume.classList.remove('border-black');

            let projects = document.getElementById('projects');
            projects.classList.remove('text-white');
            projects.classList.remove('bg-black');
            projects.classList.add('text-black');
            projects.classList.add('bg-white');
            projects.classList.remove('border-black');

            let contact = document.getElementById('contact');
            contact.classList.remove('text-white');
            contact.classList.remove('bg-black');
            contact.classList.add('text-black');
            contact.classList.add('bg-white');
            contact.classList.remove('border-black');

            let name = document.getElementById('name');
            name.classList.add('text-black');
            name.classList.remove('text-white');

            let mode = document.getElementById('mode');
            mode.innerText = 'Dark Mode';

            let email = document.getElementById('email');
            email.classList.add('text-black');
            email.classList.remove('text-white');
        }

    }

    return (
        <div id="navbar" className="bg-white text-black shadow-md flex  sm:mb-8 flex-col h-8">
        <   div id="header" className="flex justify-center">
            <h1 id="name" className=" text-center p-2 flex align-center hidden text-black justify-center font-bold">John James</h1>
            <button onClick={nightmode}
                id="mode" className="right-4 hidden md:block text-sm bg-black p-2 rounded-full text-white absolute">Dark Mode</button>
            {/*Logo*/}  
            </div>
            <div className="flex fixed justify-center space-x-8 font-bold y z-30 p-2 bg-white w-full text-black">
                <a href="#about">About</a>
                <a href="#resume">Resume</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <button onClick={nightmode}
                id="mode" className="right-4 hidden md:block text-xs  p-1 rounded-full text-black absolute">Change Theme</button>
            </div>
        </div>
            
            
    )
        function header () {
            var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
        }

}

export default Header