import React, { useState } from 'react';
import Square from './Square';

export default function Board(value) {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleSquareClick = (clickedPosition) => {
    setSquares((currentSquares) => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return 'X';
        }
        return squareValue;
      });
    });
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
