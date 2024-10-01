import React, { useState } from "react";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Header from "./components/Header";
import './App.css';

const App = () => {
  const [names, setNames] = useState({ chat1: "", chat2: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSetNames = (chat1Name, chat2Name) => {
    setNames({ chat1: chat1Name, chat2: chat2Name });
    setIsLoggedIn(true); // Switch to chat once names are set
  };

  return (
    
    <div className='flex flex-col w-screen h-screen border-8 overflow-hidden border-primary  '>
      
      <div className='flex flex-grow w-full h-full border-8 border-white rounded-lg'>
        <div className='flex flex-grow w-full h-full border-4 border-secondary rounded-lg'>
          <div className='flex flex-grow w-full h-full'>
            {!isLoggedIn ? (
              <Login onSetNames={handleSetNames} />
            ) : (
              <Chat chat1Name={names.chat1} chat2Name={names.chat2} />
            )}
          </div>
       
        </div>
      
        </div>
      <div>
      <Header/>
      </div>
     
      </div>

    

  );
};

export default App;
