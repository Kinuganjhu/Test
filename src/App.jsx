import React, { useState } from 'react';
import './styles.scss';
import Board from './Components/Board';
import calculateWinner from './Components/winner';

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true); // Changed initial value to true
  const winner = calculateWinner(squares); // Renamed 'Winner' to 'winner' for consistency
  
  const nextPlayer = isXNext ? 'X' : 'O';
  const statusMessage = winner ? `Winner is ${winner}` : `Next Player is ${nextPlayer}`;

  const handleSquareClick = (clickedPosition) => {
    if (squares[clickedPosition] || winner) {
      return; // Stop processing if there's a winner or square is already filled
    }

    setSquares((currentSquares) => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });

    setIsXNext((prevIsNext) => !prevIsNext); // Changed setXIsNext to setIsXNext for clarity
  };

  return (
    <div className='App'>
      <h1>{statusMessage}</h1>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}
