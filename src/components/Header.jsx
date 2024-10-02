import React from 'react';
import image from '../assets/Pasted Graphic.png';  
import image2 from '../assets/Pasted Graphic 1.png';  
import image3 from '../assets/Pasted Graphic 2.png'; 
import image4 from '../assets/Pasted Graphic 3.png';  
import { Link } from 'react-router-dom';
import { MdNotStarted } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <div className='flex flex-col  sm:justify-between    sm:items-stretch sm:flex-row justify-center items-center   p-5 gap-4 w-full' >
        <div>
          <h1 className='font-bold'>Play and Chat</h1>
         
        </div>
        <div className='flex justify-center items-center sm:items-start gap-4 transition-all duration-300 ' >
            {/* left */}
          <div>
            {/* Use the imported image variable here */}
            <img src={image} alt='profile' className='w-50 h-20 transition-all duration-300 hover:w-24 hover:h-24' />
          </div>
          {/* right */}
          <div>
            <div className='flex gap-2 w-full'>
            <img src={image2} alt='profile' className='w-20 h-10 transition-all duration-300 hover:w-24 hover:h-12' />
            <img src={image3} alt='profile' className='w-20 h-10 transition-all duration-300 hover:w-24 hover:h-12' />
            </div>
            <div className='mt-2'>
                <img src={image4} alt='profile' className='w-40 h-10 transition-all duration-300 hover:w-24 hover:h-12' />
            </div>
          </div>
          </div>
         
       
        </div>
      </div>
    
  );
};

export default Header;
