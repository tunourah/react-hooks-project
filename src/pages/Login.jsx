import React, { useState } from "react";
import Header from "../components/Header";
import '../App.css';

const Login = ({ onSetNames }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState(""); // For handling empty input error

  const handleSubmit = () => {
    if (!input1.trim() || !input2.trim()) {
      setError("Both names must be filled!");
      return;
    }
    setError(""); // Clear any previous error
    onSetNames(input1, input2); // Pass names to parent component
  };

  return (
    <div className="flex flex-col items-center mx-auto mt-8">
      <h1 className="mt-2 m-5 text-4xl text-center">
        Watch and Chat
      </h1>
      <div className="flex flex-col items-center mx-auto mt-8 gap-4 p-5 border-2 border-black  border-double h-1/2  bg-custom">
        <h3 className="mt-2 m-5">Enter Participants' Names</h3>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter name for Chat 1"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="border border-gray-400 p-2 rounded"
          />

          <input
            type="text"
            placeholder="Enter name for Chat 2"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="border border-gray-400 p-2 rounded"
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          onClick={handleSubmit}
          className={`${
            !input1 || !input2 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500"
          } text-white p-2 rounded`}
          disabled={!input1 || !input2}
        >
          Start Chat
        </button>
      </div>
     

    </div>
  );
};

export default Login;
