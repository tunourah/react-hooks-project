import React, { useState } from "react";
import { FaTimes, FaMinus, FaCog } from "react-icons/fa";
import { FiSend, FiImage } from "react-icons/fi";  
import TicTacToeSection from "../components/TicTacToeSection";
 
  
  

const Chat = ({ chat1Name, chat2Name }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputText2, setInputText2] = useState("");

  // Function to handle photo upload
  const handlePhotoUpload = (e, sender) => {
    const file = e.target.files[0];
    if (file) {
      // Create a URL for the image and add it to messages
      const imageUrl = URL.createObjectURL(file);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: <img src={imageUrl} alt="Uploaded" className="max-w-1/4" />, sender },
      ]);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row mx-auto h-screen justify-center items-center gap-3">
      {/* Chat 1 */}
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="border-2 border-black w-full max-w-lg m-2 h-3/4 flex flex-col">
          {/* Header with Chat 1 Name */}
          <div className="flex justify-between items-center p-3 bg-gray-100 border-b">
            <h1 className="font-bold text-lg">{chat1Name}</h1>
            {/* <div className="space-x-2 flex">
              <button className="bg-red-500 text-white p-2 rounded flex items-center">
                <FaTimes className="mr-1" />
              </button>
              <button className="bg-blue-500 text-white p-2 rounded flex items-center">
                <FaMinus className="mr-1" />
              </button>
              <button className="bg-blue-500 text-white p-2 rounded flex items-center">
                <FaCog className="mr-1" />
              </button>
            </div> */}
          </div>

          {/* Messages Section */}
          <div className="flex-grow overflow-y-auto p-4 bg-white">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 rounded mb-2 shadow-sm ${
                  message.sender === "chat1"
                    ? "bg-blue-100 self-end text-right   max-w-xs"
                    : "bg-gray-100 self-start text-left   max-w-xs"
                }`}
              >
                {typeof message.text === "string" ? message.text : message.text}
              </div>
            ))}
          </div>

          {/* Input Section for Chat 1 */}
          <div className="flex items-center p-4 bg-custom  border-t">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-grow border border-black rounded p-2 mr-2"
            />

            {/* Upload Photo Button */}
            <button className="bg-gray-100 text-black p-2 mr-2 flex items-center">
              <label htmlFor="upload-photo1" className="cursor-pointer flex items-center">
                <FiImage className="mr-1" /> {/* Photo icon */}
              </label>
              <input
                id="upload-photo1"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handlePhotoUpload(e, "chat1")}
              />
            </button>

            {/* Send Message Button */}
            <button
              onClick={() => {
                if (inputText.trim()) {
                  setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: inputText, sender: "chat1" },
                  ]);
                  setInputText("");
                }
              }}
              className="bg-gray-100 text-black p-2 flex items-center"
            >
              <FiSend className="mr-1" /> {/* Send icon */}
            </button>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <TicTacToeSection playerX={chat1Name} playerO={chat2Name} />


      {/* Chat 2 */}
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="border-2 border-black w-full max-w-lg m-2 h-3/4 flex flex-col">
          {/* Header with Chat 2 Name */}
          <div className="flex justify-between items-center p-3 bg-gray-100 border-b">
            <h1 className="font-bold text-lg">{chat2Name}</h1>
            {/* <div className="space-x-2 flex">
              <button className="bg-red-500 text-white p-2 rounded flex items-center">
                <FaTimes className="mr-1" />
              </button>
              <button className="bg-blue-500 text-white p-2 rounded flex items-center">
                <FaMinus className="mr-1" />
              </button>
              <button className="bg-blue-500 text-white p-2 rounded flex items-center">
                <FaCog className="mr-1" />
              </button>
            </div> */}
          </div>

          {/* Messages Section */}
          <div className="flex-grow overflow-y-auto p-4 bg-white">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 rounded mb-2 shadow-sm ${
                  message.sender === "chat2"
                    ? "bg-blue-100 self-end text-right   max-w-xs"
                    : "bg-gray-100 self-start text-left   max-w-xs"
                }`}
              >
                {typeof message.text === "string" ? message.text : message.text}
              </div>
            ))}
          </div>

          {/* Input Section for Chat 2 */}
          <div className="flex items-center p-4 bg-custom border-t">
            <input
              type="text"
              value={inputText2}
              onChange={(e) => setInputText2(e.target.value)}
              className="flex-grow border border-gray-400 rounded p-2 mr-2"
            />
            
            {/* Upload Photo Button for Chat 2 */}
            <button className="bg-gray-100 text-black p-2 mr-2 flex items-center">
              <label htmlFor="upload-photo2" className="cursor-pointer flex items-center">
                <FiImage className="mr-1" /> {/* Photo icon */}
              </label>
              <input
                id="upload-photo2"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handlePhotoUpload(e, "chat2")}
              />
            </button>

            {/* Send Message Button for Chat 2 */}
            <button
              onClick={() => {
                if (inputText2.trim()) {
                  setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: inputText2, sender: "chat2" },
                  ]);
                  setInputText2("");
                }
              }}
              className="bg-gray-100 text-black p-2 flex items-center"
            >
              <FiSend className="mr-1" /> {/* Send icon */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
