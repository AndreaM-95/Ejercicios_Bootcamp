import React from 'react';
import { SocialMedia } from '../Constants';
import Image from "next/image";

const NavBar = () => {
  return (
    <div className='fixed-top-0 w-full flex'>
      <div className='flex flex-grow gap-3 items-center'>
        
      </div>
      
      <h1 className='twxt-white font-semibold'>Andrea Mejia
        <span className='text-transparent bg-gradient-to-r from-purple-100 to-red-100'>Developer</span>
      </h1>

      <div className='flex flex-row mb-2'>
        {SocialMedia.map((social) => (
          <Image 
            key={social.name}
            src={social.src}
            alt={social.name}
            width={50}
            height={50}
          />
        ))
        }
      </div>
    </div>
  );
}

export default NavBar;