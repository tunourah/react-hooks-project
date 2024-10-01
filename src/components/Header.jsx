import React from 'react';
import image from '../assets/Pasted Graphic.png';  
import image2 from '../assets/Pasted Graphic 1.png';  
import image3 from '../assets/Pasted Graphic 2.png'; 
import image4 from '../assets/Pasted Graphic 3.png';  
import { MdNotStarted } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <div className='flex flex-col border-2 border-black sm:justify-between    sm:items-stretch sm:flex-row justify-center items-center   p-5 gap-4 w-full' >
        <div>
          <h1>Play and Chat</h1>
          <p>By Nora Altuwaim</p>
        </div>
        <div className='flex    justify-center items-center sm:items-strat gap-4  ' >
            {/* left */}
          <div>
            {/* Use the imported image variable here */}
            <img src={image} alt='profile' className='w-20 h-20' />
          </div>
          {/* right */}
          <div>
            <div className='flex gap-1'>
            <img src={image2} alt='profile' className='w-10 h-10' />
            <img src={image3} alt='profile' className='w-10 h-10' />
            </div>
            <div>
                <img src={image4} alt='profile' className='w-full h-10' />
            </div>
          </div>
          </div>
          <div className=' w-full text-center sm:w-1/3 '>
            <h1>Welcome Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos optio molestias omnis repudiandae doloribus corporis tenetur aliquam consequatur veniam quas quaerat deleniti laudantium recusandae aut, quis non cupiditate animi!</h1>
          </div>
          <button className='bg-black text-white p-2 text-4xl w-30 h-30 rounded hover:bg-slate-700'> <MdNotStarted />
          </button>
        </div>
      </div>
    
  );
};

export default Header;
