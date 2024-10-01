import React, { useState } from "react";
import Login from "./pages/Login";
import Chat from "./pages/Chat";


const App = () => {
  const [names, setNames] = useState({ chat1: "", chat2: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSetNames = (chat1Name, chat2Name) => {
    setNames({ chat1: chat1Name, chat2: chat2Name });
    setIsLoggedIn(true); // Switch to chat once names are set
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onSetNames={handleSetNames} />
      ) : (
        <Chat chat1Name={names.chat1} chat2Name={names.chat2} />
      )}
    </div>
  );
};

export default App;
