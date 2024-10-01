import React from 'react';
import image from '../assets/Pasted Graphic.png'; // Correct import
import image2 from '../assets/Pasted Graphic 1.png'; // Correct import
import image3 from '../assets/Pasted Graphic 2.png'; // Correct import
import image4 from '../assets/Pasted Graphic 3.png'; // Correct import

const Header = () => {
  return (
    <div>
      <div className='flex border-2 border-black  mx-auto justify-center    p-5 gap-4 w-full' >
        <div>
          <h1>Play and Chat</h1>
          <p>By Nora Altuwaim</p>
        </div>
        <div className='flex  items-center gap-4  ' >
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
          <div className=' w-1/3 '>
            <h1>Welcome Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos optio molestias omnis repudiandae doloribus corporis tenetur aliquam consequatur veniam quas quaerat deleniti laudantium recusandae aut, quis non cupiditate animi!</h1>
          </div>
          <button className='bg-blue-500 text-white p-2 rounded'>Start Chat</button>
        </div>
      </div>
    
  );
};

export default Header;
