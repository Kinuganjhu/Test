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

  //for New Game
  const New_Game = [{ squares: Array(9).fill(null), isXNext: false }];

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

  const moveTO = (move) => {
    setCurrentMove(move);
    setSquares(history[move].squares);
    setIsXNext(history[move].isXNext);
  };

  const onNewGame = () => {
  setHistory([{ squares: Array(9).fill(null), isXNext: true }]);
  setCurrentMove(0);
  setSquares(Array(9).fill(null));
  setIsXNext(true);
};

  return (
    <div className='App'>
      <StatusMessage winner={winner} squares={squares} isXNext={isXNext} gamingBoard={gamingBoard} />
      <Board squares={squares} handleSquareClick={handleSquareClick} gamingBoard={gamingBoard} />
      
      <button onClick={() => onNewGame()} className = {`btn-reset ${winner? 'active': ' '}` }>Start New Game</button>

      <h2>Current Game History</h2>
      
      <History history={history} moveTo={moveTO} currentMove={currentMove} />
    </div>
  );
}
