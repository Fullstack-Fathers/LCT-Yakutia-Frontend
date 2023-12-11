import React from 'react';
import './card.css';

// eslint-disable-next-line react/prop-types
const Card = ({ courseName, courseDescription, chapterName, chapterDescription, progress, challenges }) => {
 return (
  <div className="courses-container">
    <div className="course">
      <div className="course-preview">
        <h6>Направление</h6>
        <h2>{courseName}</h2>
        <a href="#">{courseDescription} <i className="fas fa-chevron-right"></i></a>
      </div>
      <div className="course-info">
      <div className="progress-container">
 <div className="progress" style={{width: `${progress}%`}}></div>
 <span className="progress-text">
   Подходит на {progress}%
 </span>
</div>
        <h6>Chapter {chapterName}</h6>
        <h2>{chapterDescription}</h2>
        <button className="btn">Подробнее</button>
      </div>
    </div>
  </div>
 );
};

export default Card;
