// App.js
import React, { useState } from "react";
import Header from "./components/Header";  
import MainContainer from "./components/MainContainer";  

const App = () => {
  const [names, setNames] = useState({ chat1: "", chat2: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSetNames = (chat1Name, chat2Name) => {
    setNames({ chat1: chat1Name, chat2: chat2Name });
    setIsLoggedIn(true);  
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
