import React, { useState, FC } from 'react';
import './testPage.css';
import Starter from '../../components/quiz/Starter';
import Quiz from '../../components/quiz/Quiz';
import Answer from '../../components/quiz/Answer';
import Message from '../../components/quiz/Message';

const Questions=[
  {
   question:'Какова цель профессиональной ориентации?',
   answers:[
     {
       value:'Помочь индивидуумам понять свои интересы, навыки и ценности'
     },
     {
       value:'Помочь индивидуумам понять свои карьерные цели'
     },
     {
       value:'Помочь индивидуумам понять свой карьерный путь'
     },
   ],
  },
  {
   question:'Какой первый шаг в профессиональной ориентации?',
   answers:[
     {
       value:'Самоанализ'
     },
     {
       value:'Планирование карьеры'
     },
     {
       value:'Карьерное консультирование'
     },
   ],
  },
  {
   question:'Какова роль карьерного консультанта в профессиональной ориентации?',
   answers:[
     {
       value:'Направлять индивидуума в понимании своих интересов, навыков и ценностей'
     },
     {
       value:'Помочь индивидуумам установить свои карьерные цели'
     },
     {
       value:'Помочь индивидуумам спланировать свой карьерный путь'
     },
   ],
  },
  {
   question:'Какова важность профессиональной ориентации?',
   answers:[
     {
       value:'Она помогает индивидуумам принимать обоснованные решения о своей карьере'
     },
     {
       value:'Она помогает индивидуумам понять свои карьерные цели'
     },
     {
       value:'Она помогает индивидуумам понять свой карьерный путь'
     },
   ],
  },
 ]
 
 
  
 Questions.forEach((quest) => {
  quest.answers.sort(() => Math.random() - 0.5);
 });
 
 function TestPage() {
  const [points, setPoints] = useState(null);
  const [counter, setCounter] = useState(null);
  const [question, setQuestions] = useState(Questions);
  const [is_started, setStart] = useState(false);
  const [is_end, setEnd] = useState(false);
 
  function start() {
    setCounter(0);
    setPoints(0);
    setStart(!is_started);
    setEnd(false);
  }
 
  function checkAnswer(e) {
    console.log(is_end);
    if (e.target.dataset.correct === 'true') {
      setPoints(points + 1);
    }
 
    let nextQuestion = counter + 1;
    if (counter < question.length - 1) {
      setCounter(nextQuestion);
    } else {
      setEnd(!is_end);
      setStart(!is_started);
      setCounter(0);
    }
  }
 
  return (
    <div className='Quiz'>
      {!is_started && <h1 className='name'>Тест на профориетацию</h1>}
      {!is_started && <Starter start={start} />}
      {is_started && (
        <Quiz question={question[counter].question}>
          {question[counter].answers.map((answer, index, arr) => (
            <Answer
              key={index}
              answer={answer.value}
              checkAnswer={checkAnswer}
            />
          ))}
        </Quiz>
      )}
      {is_end && <Message/>}
    </div>
  );
 }
 
 export default TestPage;