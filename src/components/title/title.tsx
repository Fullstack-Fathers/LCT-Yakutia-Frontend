import React from 'react';
import './title.css';

const Title = () => {
  return (
    <div className="grid">
      <section className="content item1">
        <h1 className="h01">FullStack Father</h1>
        <p className="p01">
          Веб-сервис для поиска дела, которому не стыдно посвятить время!{' '}
        </p>
      </section>
      <section className="card item2">
        <h2 className="h02">Кто я? Зачем я здесь?</h2>
      </section>
      <section className="card item3"></section>
      <section className="card item4"></section>
      <section className="card item5">
        <h2 className="h02">Кем я хочу быть в этой жизни?</h2>
      </section>
      <section className="card item7"></section>
      <section className="card item8">
        <h2 className="h02">
          Чем я хочу заниматься и что для этого нужно делать?
        </h2>
      </section>
      <section className="card item9"></section>
      <section className="card item10"></section>
      <section className="card item11">
        <h2 className="h02">Я не знаю чем хочу заниматься?</h2>
      </section>
    </div>
  );
};

export default Title;
