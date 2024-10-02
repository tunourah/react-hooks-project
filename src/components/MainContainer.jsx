// MainContainer.js
import React from 'react';
import Login from '../pages/Login';
import Chat from '../pages/Chat';

const MainContainer = ({ isLoggedIn, handleSetNames, names }) => {
  return (
   
          <div className=' '>
            {!isLoggedIn ? (
              <Login onSetNames={handleSetNames} />
            ) : (
              <Chat chat1Name={names.chat1} chat2Name={names.chat2} />
            )}
          </div>
     
  );
};

export default MainContainer;
