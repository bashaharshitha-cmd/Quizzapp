import React from 'react';

function Quizzdata({ questionText, options, handleClick, answer }) {
  return (
    <div>
      <h2>{questionText}</h2>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleClick(option)}
            className={answer === option ? 'selected' : ''}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quizzdata;
