import React, { useState } from 'react';
import Square from './Square';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setXIsNext] = useState(false); // Adjusted initial value to true

  const handleSquareClick = (clickedPosition) => {
    if (squares[clickedPosition]) {
      return;
    }
    
    setSquares((currentSquares) => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O'; // Changed '0' to 'O' for 'O' symbol
        }
        return squareValue;
      });
    });
    setXIsNext((currentIsNext) => !currentIsNext); // Fixed syntax for setting isXNext state
  };

  const renderSquare = (position) => {
    return <Square value={squares[position]} onClick={() => handleSquareClick(position)} />;
  };

  return (
    <>
      {/* First line row */}
      <div className='board'>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>

        {/* Second line row */}
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>

        {/* Third line row */}
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </>
  );
}
