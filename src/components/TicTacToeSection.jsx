import React, { useState } from "react";

const TicTacToeSection = ({ playerX, playerO }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // Helper function to calculate the winner
  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return "X" or "O"
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const currentPlayer = isXNext ? playerX : playerO;
  const isBoardFull = board.every((cell) => cell !== null);

  const handleClick = (index) => {
    if (board[index] || winner) return; // Prevent changing if there's already a value or a winner
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="flex justify-center items-center my-4">
      <div className="relative max-w-lg border-2 border-black rounded-lg bg-white">
        {/* Title Bar */}
        <div className="flex items-center justify-between bg-black text-white p-2 rounded-t-lg">
          <span className="font-bold">Tic-Tac-Toe</span>
          <div className="space-x-1">
            <button className="w-2 h-2 bg-black border-2 border-white rounded-full"></button>
            <button className="w-2 h-2 bg-black border-2 border-white rounded-full"></button>
            <button className="w-2 h-2 bg-black border-2 border-white rounded-full"></button>
          </div>
        </div>

        {/* Tic-Tac-Toe Game Board */}
        <div className="p-4 bg-white grid grid-cols-3 gap-2">
          {board.map((cell, index) => (
            <div
              key={index}
              className={`w-20 h-20 flex items-center justify-center border-2 border-black text-3xl font-bold cursor-pointer ${
                cell === "X" ? "text-black" : "text-gray-600"
              }`}
              onClick={() => handleClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>

        {/* Game Status */}
        <div className="p-4 bg-gray-200 text-center">
          {winner ? (
            <>
              <p className="font-bold text-lg text-black">
                {winner === "X" ? playerX : playerO} wins!
              </p>
              <button
                onClick={handleRestart}
                className="mt-2 px-4 py-2 bg-black text-white rounded"
              >
                Restart Game
              </button>
            </>
          ) : isBoardFull ? (
            <>
              <p className="font-bold text-lg text-black">It's a draw!</p>
              <button
                onClick={handleRestart}
                className="mt-2 px-4 py-2 bg-black text-white rounded"
              >
                Restart Game
              </button>
            </>
          ) : (
            <p className="font-bold text-lg text-black">
              Next player: {currentPlayer}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicTacToeSection;
