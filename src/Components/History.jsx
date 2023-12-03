import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div>
      <ul>
        {history.map((_, index) => (
          <li key={index}>
  
<button className={`btn-move ${currentMove === index ? 'active' : ''}`} onClick={() => moveTo(index)}>
  
{index === 0 ? 'go to game start' : `go to move #${index}`}
  
  
</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
