// App.js
import React, { useState } from "react";
import Header from "./components/Header"; // Assuming you still want the header
import MainContainer from "./components/MainContainer"; // Import the new component
import './App.css';

const App = () => {
  const [names, setNames] = useState({ chat1: "", chat2: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSetNames = (chat1Name, chat2Name) => {
    setNames({ chat1: chat1Name, chat2: chat2Name });
    setIsLoggedIn(true); // Switch to chat once names are set
  };

  return (
    <div className='sm:w-screen sm:h-screen'>
     
      <MainContainer 
        isLoggedIn={isLoggedIn} 
        handleSetNames={handleSetNames} 
        names={names} 
      />
    </div>
  );
};

export default App;
