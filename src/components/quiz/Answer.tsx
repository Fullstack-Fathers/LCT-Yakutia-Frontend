import React, { FC } from 'react';

interface AnswerProps {
 correct: boolean;
 answer: string;
 checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Answer: FC<AnswerProps> = ({ answer, checkAnswer }) => {
 return (
   <button className='answer' onClick={checkAnswer}>
     {answer}
   </button>
 );
}

export default Answer;
