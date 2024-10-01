import React, { useState } from "react";

const Login = ({ onSetNames }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState(""); // For handling empty input error

  const handleSubmit = () => {
    // Check if both input fields have names
    if (!input1.trim() || !input2.trim()) {
      setError("Both names must be filled!");
      return;
    }
    
    setError(""); // Clear any previous error
    onSetNames(input1, input2); // Pass names to parent component
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1>Enter Chat Participants' Names</h1>

      {/* Input for Chat 1 Name */}
      <input
        type="text"
        placeholder="Enter name for Chat 1"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        className="border border-gray-400 p-2 rounded"
      />

      {/* Input for Chat 2 Name */}
      <input
        type="text"
        placeholder="Enter name for Chat 2"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        className="border border-gray-400 p-2 rounded"
      />

      {/* Error message if inputs are empty */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className={`${
          !input1 || !input2 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500"
        } text-white p-2 rounded`}
        disabled={!input1 || !input2} // Disable button if either input is empty
      >
        Start Chat
      </button>
    </div>
  );
};

export default Login;
