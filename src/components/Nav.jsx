import React from 'react'
import image5 from '../assets/Pasted Graphic 5.png'

const Nav = () => {
    return (
      <div className="mx-auto bg-gray-100 py-4 w-full">
        <nav className="flex justify-center items-center gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-10 h-10 border-2 border-black bg-custom rounded-full">
              <img src={image5} alt="XO GAME LOGO" className="w-10 h-10 object-cover rounded-full" />
            </div>
          ))}
        </nav>
      </div>
    );
  };
  
  export default Nav;
  
 