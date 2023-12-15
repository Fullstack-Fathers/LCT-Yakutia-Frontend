import React, { FC } from 'react';

interface QuizProps {
 question: string;
 children: React.ReactNode;
}

const Quiz: FC<QuizProps> = ({ question, children }) => {
 return (
   <div className='quiz'>
     <div className='question'>{question}</div>
     <div className='answers'>{children}</div>
   </div>
 );
}

export default Quiz;
