import React from 'react';

const History = ({ history }) => {
  return (
    <div>
      <ul>
        {history.map((move, index) => (
          <li key={index}>
            <div>Move  is{index}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
