import React, { useState } from "react";
import { FaTimes, FaMinus, FaCog } from "react-icons/fa";

const Chat = ({ chat1Name, chat2Name }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputText2, setInputText2] = useState("");

  return (
    <div className="flex flex-col sm:flex-row mx-auto h-screen justify-center items-center gap-3">
      {/* Chat 1 */}
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="border-2 border-blue-600 w-full max-w-lg m-2 h-3/4 flex flex-col">
          {/* Header with Chat 1 Name */}
          <div className="flex justify-between items-center p-3 bg-gray-100 border-b">
            <h1 className="font-bold text-lg">{chat1Name}</h1> {/* Name from props */}
            <div className="space-x-2 flex">
              <button className="bg-red-500 text-white p-2 rounded flex items-center">
                <FaTimes className="mr-1" />
              </button>
              <button className="bg-blue-500 text-white p-2 rounded flex items-center">
                <FaMinus className="mr-1" />
              </button>
              <button className="bg-blue-500 text-white p-2 rounded flex items-center">
                <FaCog className="mr-1" />
              </button>
            </div>
          </div>

          {/* Messages Section */}
          <div className="flex-grow overflow-y-auto p-4 bg-white">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 rounded mb-2 shadow-sm ${
                  message.sender === "chat1"
                    ? "bg-blue-100 self-end text-right"
                    : "bg-gray-100 self-start text-left"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Input Section for Chat 1 */}
          <div className="flex items-center p-4 bg-gray-100 border-t">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-grow border border-gray-400 rounded p-2 mr-2"
            />
            <button
              onClick={() => {
                if (inputText.trim()) {
                  setMessages([
                    ...messages,
                    { text: inputText, sender: "chat1" },
                  ]);
                  setInputText("");
                }
              }}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Chat 2 */}
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="border-2 border-blue-600 w-full max-w-lg m-2 h-3/4 flex flex-col">
          {/* Header with Chat 2 Name */}
          <div className="flex justify-between items-center p-3 bg-gray-100 border-b">
            <h1 className="font-bold text-lg">{chat2Name}</h1> {/* Name from props */}
            <div className="space-x-2 flex">
              <button className="bg-red-500 text-white p-2 rounded flex items-center">
                <FaTimes className="mr-1" />
              </button>
              <button className="bg-blue-500 text-white p-2 rounded flex items-center">
                <FaMinus className="mr-1" />
              </button>
              <button className="bg-blue-500 text-white p-2 rounded flex items-center">
                <FaCog className="mr-1" />
              </button>
            </div>
          </div>

          {/* Messages Section */}
          <div className="flex-grow overflow-y-auto p-4 bg-white">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 rounded mb-2 shadow-sm ${
                  message.sender === "chat2"
                    ? "bg-blue-100 self-end text-right"
                    : "bg-gray-100 self-start text-left"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Input Section for Chat 2 */}
          <div className="flex items-center p-4 bg-gray-100 border-t">
            <input
              type="text"
              value={inputText2}
              onChange={(e) => setInputText2(e.target.value)}
              className="flex-grow border border-gray-400 rounded p-2 mr-2"
            />
            <button
              onClick={() => {
                if (inputText2.trim()) {
                  setMessages([
                    ...messages,
                    { text: inputText2, sender: "chat2" },
                  ]);
                  setInputText2("");
                }
              }}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
