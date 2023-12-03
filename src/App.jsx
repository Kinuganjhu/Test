import React, { useState } from 'react';
import './styles.scss';
import Board from './Components/Board';
import calculateWinner from './Components/winner';
import StatusMessage from './Components/statusMessage';
import History from './Components/History';

export default function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null), isXNext: false }]);
  const [currentMove, setCurrentMove] = useState(0);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);
  const gamingBoard = history[currentMove];

  const handleSquareClick = (clickedPosition) => {
    if (gamingBoard.squares[clickedPosition] || winner) {
      return;
    }

    const nextSquareState = gamingBoard.squares.map((squareValue, position) =>
      clickedPosition === position ? (gamingBoard.isXNext ? 'X' : 'O') : squareValue
    );

    const updatedHistory = history.slice(0, currentMove + 1);
    updatedHistory.push({
      squares: nextSquareState,
      isXNext: !gamingBoard.isXNext,
    });

    setHistory(updatedHistory);
    setCurrentMove(updatedHistory.length - 1);
    setSquares(nextSquareState);
    setIsXNext(!gamingBoard.isXNext);
  };

  return (
    <div className='App'>
      <StatusMessage winner={winner} squares={squares} isXNext={isXNext} gamingBoard={gamingBoard} />
      <Board squares={squares} handleSquareClick={handleSquareClick} gamingBoard={gamingBoard} />
      <History history={history} />
    </div>
  );
}
