import React, { useState } from "react";
import { FaTimes, FaMinus, FaCog } from "react-icons/fa";
import { FiSend, FiImage } from "react-icons/fi";
import { PiUserRectangleDuotone } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom"; // use this hook to navigate between pages

import TicTacToeSection from "../components/TicTacToeSection";

const Chat = ({ chat1Name, chat2Name }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputText2, setInputText2] = useState("");
  const navigate = useNavigate(); // React Router hook for redirection

  const handlePhotoUpload = (e, sender) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: <img src={imageUrl} alt="Uploaded" className="max-w-1/4" />,
          sender,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen justify-between mx-2 sm:mx-5 items-center gap-3">
      {/* Log Out Button */}
      <div className="relative mb-4 sm:absolute sm:top-10 sm:right-10">
        <Link to="/">
          <button className="bg-red-500 text-white p-2 rounded">
            Log Out
          </button>
        </Link>
      </div>

      {/* Chat 1 */}
      <div className="flex flex-col h-full w-full max-w-xs sm:max-w-lg sm:mt-36 mx-auto">
        <div className="border-2 border-black h-3/4 flex flex-col">
          {/* Header with Chat 1 Name */}
          <div className="flex justify-between items-center p-3 bg-gray-100 border-b">
            <h1 className="font-bold text-lg flex justify-center items-center gap-2">
              <PiUserRectangleDuotone />
              {chat1Name}
            </h1>
          </div>

          {/* Messages Section */}
          <div className="flex-grow overflow-y-auto p-4 bg-white">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 rounded mb-2 shadow-sm ${
                  message.sender === "chat1"
                    ? "bg-blue-100 self-end text-right max-w-xs"
                    : "bg-gray-100 self-start text-left max-w-xs"
                }`}
              >
                <div>
                  {typeof message.text === "string" ? message.text : message.text}
                </div>
                <div className="text-xs text-gray-500">{message.time}</div>
              </div>
            ))}
          </div>

          {/* Input Section for Chat 1 */}
          <div className="flex items-center p-4 bg-gray-50 border-t">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  if (inputText.trim()) {
                    setMessages((prevMessages) => [
                      ...prevMessages,
                      {
                        text: inputText,
                        sender: "chat1",
                        time: new Date().toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        }),
                      },
                    ]);
                    setInputText("");
                  }
                }
              }}
              className="flex-grow border border-black rounded p-2 mr-2 resize-none"
              rows={2}
            />

            {/* Upload Photo Button */}
            <button className="bg-gray-100 text-black p-2 mr-2 flex items-center">
              <label
                htmlFor="upload-photo1"
                className="cursor-pointer flex items-center"
              >
                <FiImage className="mr-1" />
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
                    {
                      text: inputText,
                      sender: "chat1",
                      time: new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      }),
                    },
                  ]);
                  setInputText("");
                }
              }}
              className="bg-gray-100 text-black p-2 flex items-center"
            >
              <FiSend className="mr-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Game Section */}
      <div className="   w-full sm:w-1/3 h-3/4">
        <TicTacToeSection playerX={chat1Name} playerO={chat2Name} />
      </div>

      {/* Chat 2 */}
      <div className="flex flex-col h-full w-full max-w-xs  sm:mt-36 sm:max-w-lg mx-auto">
        <div className="border-2 border-black h-3/4 flex flex-col">
          {/* Header with Chat 2 Name */}
          <div className="flex justify-between items-center p-3 bg-gray-100 border-b">
            <h1 className="font-bold text-lg flex justify-center items-center gap-2">
              <PiUserRectangleDuotone />
              {chat2Name}
            </h1>
          </div>

          {/* Messages Section */}
          <div className="flex-grow overflow-y-auto p-4 bg-white">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 rounded mb-2 shadow-sm ${
                  message.sender === "chat2"
                    ? "bg-blue-100 self-end text-right max-w-xs"
                    : "bg-gray-100 self-start text-left max-w-xs"
                }`}
              >
                <div>
                  {typeof message.text === "string" ? message.text : message.text}
                </div>
                <div className="text-xs text-gray-500">{message.time}</div>
              </div>
            ))}
          </div>

          {/* Input Section for Chat 2 */}
          <div className="flex items-center p-4 bg-gray-50 border-t">
            <textarea
              value={inputText2}
              onChange={(e) => setInputText2(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  if (inputText2.trim()) {
                    setMessages((prevMessages) => [
                      ...prevMessages,
                      {
                        text: inputText2,
                        sender: "chat2",
                        time: new Date().toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        }),
                      },
                    ]);
                    setInputText2("");
                  }
                }
              }}
              className="flex-grow border border-black rounded p-2 mr-2 resize-none"
              rows={2}
            />

            {/* Upload Photo Button */}
            <button className="bg-gray-100 text-black p-2 mr-2 flex items-center">
              <label
                htmlFor="upload-photo2"
                className="cursor-pointer flex items-center"
              >
                <FiImage className="mr-1" />
              </label>
              <input
                id="upload-photo2"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handlePhotoUpload(e, "chat2")}
              />
            </button>

            {/* Send Message Button */}
            <button
              onClick={() => {
                if (inputText2.trim()) {
                  setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                      text: inputText2,
                      sender: "chat2",
                      time: new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      }),
                    },
                  ]);
                  setInputText2("");
                }
              }}
              className="bg-gray-100 text-black p-2 flex items-center"
            >
              <FiSend className="mr-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
