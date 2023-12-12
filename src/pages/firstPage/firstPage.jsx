import React, { useEffect } from 'react';
import './firstPage.css';
import image from '../../assets/images/111.jpg';
import image1 from '../../assets/images/star.svg';
import image2 from '../../assets/images/2.jpg';
import image3 from '../../assets/images/arrow.svg';
import image4 from '../../assets/images/hero-banner 2.png';
import image5 from '../../assets/images/map 1.png';
import image6 from '../../assets/images/binocular 1.png';
import image7 from '../../assets/images/backpack 1.png';
import image8 from '../../assets/images/ukelele 1.png';




const FirstPage = () => {

 return (
<>
  <div className="main">
    <div className="container">
      <div id="circle" className="circle" />
      <div id="scene1" className="rellax" data-rellax-speed="4">
        <div className="circle" />
      </div>
      <div id="scene2" className="rellax" data-rellax-speed="1">
        <div className="circle" />
      </div>
      <div id="scene3" className="rellax" data-rellax-speed="2">
        <div className="circle" />
      </div>
      <div id="scene4" className="rellax" data-rellax-speed="2">
        <div className="circle" />
      </div>
      <div id="scene5" className="rellax" data-rellax-speed="3.45">
        <div className="circle" />
      </div>
      <div id="scene6" className="rellax" data-rellax-speed="5">
        <div className="circle" />
      </div>
      <div id="scene7" className="rellax" data-rellax-speed="3.7">
        <div className="circle" />
      </div>
      <div id="scene8" className="rellax" data-rellax-speed="1.2">
        <div className="circle" />
      </div>
      <div id="scene9" className="rellax" data-rellax-speed="1.2">
        <div className="circle" />
      </div>
      <div id="scene10" className="rellax" data-rellax-speed="1.8">
        <div className="circle" />
      </div>
      <div id="scene11" className="rellax" data-rellax-speed="2.3">
        <div className="circle" />
      </div>
      <div id="scene12" className="rellax" data-rellax-speed="3">
        <div className="circle" />
      </div>
      <div id="scene13" className="rellax" data-rellax-speed="1.5">
        <div className="circle" />
      </div>
    </div>
  </div>
  {/* div .wrapp */}
  <div id="luxy" className="wrapp">
    {/* div .header */}
    <header className="header">
      <h1 className="title" data-splitting="">
        <span className="title_paralax">Сервис для проф</span>
        <span className="stroke">ориентации</span>
      </h1>
      <div className="header__img">
        <img src={image} alt={1} />
      </div>
      <div className="header__marq">
        <div className="header__marq-wrapp">
          <span className="header__marq-txt">
            FullStack Father
            <span className="header__marq-star">
              <img src={image1} alt="" />
            </span>
          </span>
          <span className="header__marq-txt">
            FullStack Father
            <span className="header__marq-star">
              <img src={image1} alt="" />
            </span>
          </span>
          <span className="header__marq-txt">
            FullStack Father
            <span className="header__marq-star">
              <img src={image1} alt="" />
            </span>
          </span>
          <span className="header__marq-txt">
            FullStack Father
            <span className="header__marq-star">
              <img src={image1} alt="" />
            </span>
          </span>
        </div>
      </div>
    </header>
    <div className="main">
      {/* div .about */}
      <section className="about">
        <div className="about__wrapp">
          <div className="about__img">
            <img src={image2} alt={2} />
          </div>
          <div className="about__txt">
            <h2 className="section-title">
              abo<span className="stroke">ut</span>
              <span className="section-title__square" />
            </h2>
            <p className="about__p">
              Мы команда лучших в мире разработчиков. Наш сервис поможет вам в
              решении проблемы, которая стоит перед вами. Кароче, пользуйтесь
              наздоровье и ни о чем ни думайте. Мы профессионалы своего дела и
              все нам нипочем!
            </p>
          </div>
        </div>
      </section>
      {/* div .benefits */}
      <section className="benefits">
        <div className="content">
          <h2 className="section-title">
            Возмож<span className="stroke">ности</span>
            <span className="section-title__square" />
          </h2>
          <ul className="benefits__list">
            <li className="benefits__item">
              <span className="benefits__num" data-speed={-200}>
                /01
              </span>
              <p className="benefits__p">
                Найти профессию, которая тебе подходит.
              </p>
            </li>
            <li className="benefits__item">
              <span className="benefits__num" data-speed={-150}>
                /02
              </span>
              <p className="benefits__p">
                Пройти тестирование и понять - чем ты хочешь заниматься.
              </p>
            </li>
            <li className="benefits__item">
              <span className="benefits__num" data-speed={-150}>
                /03
              </span>
              <p className="benefits__p">
                Узнать много нового и получить уникальный опыт.
              </p>
            </li>
            <li className="benefits__item">
              <span className="benefits__num" data-speed={-150}>
                /04
              </span>
              <p className="benefits__p">
                Найти все необходимые материалы для подготовки к устройсту на
                работу.
              </p>
            </li>
            <li className="benefits__item">
              <span className="benefits__num" data-speed={-110}>
                /05
              </span>
              <p className="benefits__p">
                Прокачать свои скилы в области, которая тебе интересна.
              </p>
            </li>
            <li className="benefits__item">
              <span className="benefits__num" data-speed={-200}>
                /06
              </span>
              <p className="benefits__p">
                Пройти консультацию со специалистом и разобраться в проблеме.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <div>
        {/* div .serv */}
        <section className="serv">
          <div className="content">
            <h2 className="section-title">
              servic<span className="stroke">es</span>
              <span className="section-title__square" />
            </h2>
            <div className="serv__list">
              <div className="serv__item">
                <span className="serv__item-arrow" data-speed={500}>
                  <img src={image3} alt="" />
                </span>
                <div className="serv__item-txt">
                  <span className="serv__item-text">/Умные рекомендации</span>
                </div>
              </div>
              <div className="serv__item">
                <span className="serv__item-arrow" data-speed={400}>
                  <img src={image3} alt="" />
                </span>
                <div className="serv__item-txt">
                  <span className="serv__item-text">/Курсы для подготовки</span>
                </div>
              </div>
              <div className="serv__item">
                <span className="serv__item-arrow" data-speed={800}>
                  <img src={image3} alt="" />
                </span>
                <div className="serv__item-txt">
                  <span className="serv__item-text">/Тестирование</span>
                </div>
              </div>
              <div className="serv__item">
                <span className="serv__item-arrow" data-speed={600}>
                  <img src={image3} alt="" />
                </span>
                <div className="serv__item-txt">
                  <span className="serv__item-text">/Крутой сервис</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="banner seaside">
          <img className="seaside" src={image4} alt="" />
          <div className="banner__message">
            <h2 className="message1">Пришло время</h2>
            <h2 className="message2">Открыть для себя новый мир!</h2>
            <button id="planYourTripBtn">План работы</button>
          </div>
        </div>
        <div className="discover filter">
          <div className="filter__item">
            <label>
              <span>Направление</span>
              <select>
                <option value="AE">Программирование</option>
                <option value="Phuket" selected="">
                  Медицина
                </option>
              </select>
            </label>
          </div>
          <div className="filter__item">
            <label>
              <span>Профессия</span>
              <input type="text" name="" id="" />
            </label>
          </div>
          <div className="filter__item">
            <label>
              <span>Зарплата</span>
              <input type="text" name="" id="" />
            </label>
          </div>
          <div className="filter__item">
            <button id="discoverNowBtn">Посмотреть</button>
          </div>
        </div>
        <div className="steps">
          <div className="step first_step">
            <div className="step__content">
              <div className="step__image">
                <img src={image5} alt="" />
              </div>
              <h3 className="step__header">Найди себя</h3>
              <div className="step__description">
                Мы поможем тебе узнать себя лучше
              </div>
            </div>
          </div>
          <div className="step">
            <div className="step__content">
              <div className="step__image">
                <img src={image6} alt="" />
              </div>
              <h3 className="step__header">Найди работу</h3>
              <div className="step__description">
                Мы поможем тебе найти работу мечты
              </div>
            </div>
          </div>
          <div className="step">
            <div className="step__content">
              <div className="step__image">
                <img src={image7} alt="" />
              </div>
              <h3 className="step__header">Начни зарабатывать</h3>
              <div className="step__description">
                Мы поможем найти профессию с хорошим уровнем заработка
              </div>
            </div>
          </div>
          <div className="step">
            <div className="step__content">
              <div className="step__image">
                <img src={image8} alt="" />
              </div>
              <h3 className="step__header">Живи лучше</h3>
              <div className="step__description">
                Благодаря нам, твоя жизнь изменится к лучшему
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="content_for_modal platTripContent">
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti dolorem
      quod saepe voluptates? Maxime sed architecto quisquam excepturi. Cumque
      sapiente impedit officiis amet ipsum sit ex mollitia repellat unde non.
    </p>
    <button className="doSomething">Do something for me</button>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti dolorem
      quod saepe voluptates? Maxime sed architecto quisquam excepturi. Cumque
      sapiente impedit officiis amet ipsum sit ex mollitia repellat unde non.
    </p>
  </div>
  <div className="content_for_modal discoverNowContent">
    <p>Hello!</p>
  </div>
  <div className="modal" id="planTripModal">
    <div className="modal__container">
      <div className="modal__body">
        <div className="modal__header">Some test header</div>
        <div className="modal__close">
          <a href="#">×</a>
        </div>
        <div className="modal__content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            dolorem quod saepe voluptates? Maxime sed architecto quisquam
            excepturi. Cumque sapiente impedit officiis amet ipsum sit ex
            mollitia repellat unde non.
          </p>
          <div className="modal__buttonbar">
            <button className="buttonbar__ok">Ok</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

 );
};

export default FirstPage;
