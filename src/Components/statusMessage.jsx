
const StatusMessage = ({ isXNext, squares, winner }) => {
  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';

  const renderMessage = () => {
    if (winner) {
      return (
        <>
          winner is {' '}
          <span className = {isXNext ?'text-orange': 'text-green'}>{winner}</span>
        </>
      );
    }

    if (!winner && noMovesLeft) {
      return (
        <>
          
          <span className = 'text-orange'> O</span> and { ' '}
          <span className = 'text-gree n'> X</span> 

        </>
      );
    }

    if (!winner && !noMovesLeft) {
      return (
        <>
          Next Player is { ' '}
          <span className = {isXNext?'text-orange': 'text-green'}>
            {nextPlayer}
          </span> 
        </>
      );
    }

    return null;
  };

  return (
    <>
      <div><h3 style = {{textAlign: 'center'}}>{renderMessage()}</h3></div>
    </>
  );
};

export default StatusMessage;
