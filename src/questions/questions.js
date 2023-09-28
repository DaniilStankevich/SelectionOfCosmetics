 export const questions = [
	{
		question: "Сколько вам лет ?",
		answers: [ 'Нужные средства для ребенка младше 10 лет',
                    'Мне меньше 25 лет',
                    'От 25 до 35 лет',
                    'От 35 до 45 лет',
                    'Мне больше 45 лет']

	},

	{
		question: "Какой у вас тип кожи ?",
		answers: [  'Сухая', 
                    'Нормальная', 
                    'Комбинировання', 
                    'Жирная'],
	},

	{
		question: "Беспокоят ли восплаения на лице ?",
		answers: ['Да', 'Нет', 'Иногда']
	},

];


/*
import React, { useState } from 'react';

function YourComponent() {
  const questions = [ ваш массив вопросов и ответов ];
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswerChange = (questionIndex, answerIndex) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  return (
    <div>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <ul>

            {question.answers.map((item, answerIndex) => (
              <li key={answerIndex}>
                <label>
                  <input
                    type="radio"
                    name={`answer${questionIndex}`}
                    checked={selectedAnswers[questionIndex] === answerIndex}
                    onChange={() => handleAnswerChange(questionIndex, answerIndex)}
                  />
                  {item}
                </label>
              </li>
            ))}




          </ul>
        </div>
      ))}
    </div>
  );
}

export default YourComponent;
*/