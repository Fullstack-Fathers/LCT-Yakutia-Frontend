import { useState } from 'react';

import './style.css';
import Card from '../../Components/card/card.jsx';

export const MainPage = () => {

  const courses = [
    {
      courseName: 'JavaScript Разработчик',
      courseDescription: 'View all chapters',
      chapterName: 'Chapter 1',
      chapterDescription: 'Программирование & Web',
      progress: 60,
    },
    {
      courseName: 'React Разработчик',
      courseDescription: 'View all chapters',
      chapterName: 'Chapter 2',
      chapterDescription: 'Программирование & Web',
      progress: 70,
    },
    {
      courseName: 'Python Разработчик',
      courseDescription: 'View all chapters',
      chapterName: 'Chapter 3',
      chapterDescription: 'Программирование & Web',
      progress: 80,
    }
  ];

  return (
    <>
        <div className="card-container">
          <div className="category-title">
            <h1>Рекомендации</h1>
          </div>
          <div className="category">
          <div>
     {courses.map((course, index) => (
       <Card
         key={index}
         courseName={course.courseName}
         courseDescription={course.courseDescription}
         chapterName={course.chapterName}
         chapterDescription={course.chapterDescription}
         progress={course.progress}
         challenges={course.challenges}
       />
     ))}
   </div>
          </div>
          <div className="band">

          </div>
        </div>
  

  </>
);
  }