import React, { useState } from 'react';
import './Quizz.css';
import Quizzdata from './Quizzdata';

function Quizzz() {
  const questions = [
    {
      questionText: "What is the capital city of Japan?",
      options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
      answer: "Tokyo",
    },
    {
      questionText: "Which planet is known as the Red Planet?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      answer: "Mars",
    },
    {
      questionText: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
      answer: "Leonardo da Vinci",
    },
    {
      questionText: "What is the boiling point of water at sea level?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      answer: "100°C",
    },
    {
      questionText: "Which language runs in a web browser?",
      options: ["Python", "Java", "C", "JavaScript"],
      answer: "JavaScript",
    },
    {
      questionText: "Which data structure uses FIFO (First In First Out)?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      answer: "Queue",
    },
    {
      questionText: "Who discovered gravity?",
      options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Nikola Tesla"],
      answer: "Isaac Newton",
    },
    {
      questionText: "In which year did World War II end?",
      options: ["1940", "1945", "1950", "1939"],
      answer: "1945",
    },
    {
      questionText: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "Hyper Text Marketing Language",
        "Hyper Text Markup Leveler"
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      questionText: "Which organ is responsible for pumping blood in the human body?",
      options: ["Lungs", "Brain", "Heart", "Liver"],
      answer: "Heart",
    }
  ];

  const [data, setData] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    setAnswer(option);
    if (option === questions[data].answer) {
      setScore(score + 1);
    }
  };

  const answerhandle = () => {
    setData(data + 1);
    setAnswer(null);
  };

  return (
    <div className='container'>
      <h2>Quiz App</h2>

      {data < questions.length ? (
        <>
          <Quizzdata
            questionText={questions[data].questionText}
            options={questions[data].options}
            handleClick={handleClick}
            answer={answer}
          />
          <button
            disabled={answer === null}
            className={answer === null ? 'button disabled' : 'button'}
            onClick={answerhandle}
          >
            Next
          </button>
        </>
      ) : (
        <div className="score">
          <h3>Your score is {score} / {questions.length}</h3>
        </div>
      )}
    </div>
  );
}

export default Quizzz;
