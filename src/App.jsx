import React, { useState } from "react";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Header from "./components/Header";
import './App.css';
import Nav from "./components/Nav";

const App = () => {
  const [names, setNames] = useState({ chat1: "", chat2: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSetNames = (chat1Name, chat2Name) => {
    setNames({ chat1: chat1Name, chat2: chat2Name });
    setIsLoggedIn(true); // Switch to chat once names are set
  };

  return (
    
    <div className='  sm:w-screen sm:h-screen border-8 sm:overflow-hidden border-primary  '>
      
      <div className='    border-8 border-white rounded-lg'>
        <div className='   border-4 border-secondary rounded-lg'>
    
          <div className='  '>
    
            {!isLoggedIn ? (
              <Login onSetNames={handleSetNames} />
            ) : (
              <Chat chat1Name={names.chat1} chat2Name={names.chat2} />
            )}
          </div>
       
        </div>
      
        </div>
      <div>
   
      </div>
     
      </div>

    

  );
};

export default App;
