import './style.css';
import lineIMGPath from '../../images/home-line.svg';
import firstIMGPath from '../../images/home-first-card-img.svg';
import secondIMGPath from '../../images/home-second-card-img.svg';
import thirdIMGPath from '../../images/home-third-card-img.svg';

export default function Home() {
  return(
    <section className='home'>
      <img className='home__line-img' src={lineIMGPath} alt="пунктирная линия" />
      <div className='auto-width'>
        <div className='home__content auto-padding'>
          <div className='home__presential' data-aos="slide-right">
            <p className='home__text'>
              Квест с поиском секретных QR-кодов
            </p>
            <h1 className='home__title'>
              городской<br /> квест
            </h1>
            <button className='home__button' type="button">
              Узнать больше
            </button>
          </div>
          <div className='home__cards'>
            <div className='home__cards-background'> 
            </div>
            <div className='home__card card' data-aos="fade-up">
              <div className='card__new-border'>
                <img className='card__img' src={firstIMGPath} alt="картинка мультик" />
                <p className='card__text'>
                  Увлекательные поиски<br />для каждого сотрудника
                </p>
              </div>
            </div>
            <div className='home__card card' data-aos="fade-up">
              <div className='card__new-border'>
                <img className='card__img' src={secondIMGPath} alt="картинка мультик" />
                <p className='card__text'>
                  Награждайте лучших<br/>и ублажайте худших
                </p>
              </div>
            </div>
            <div className='home__card card' data-aos="fade-up">
              <div className='card__new-border'>
                <img className='card__img' src={thirdIMGPath} alt="картинка мультик" />
                <p className='card__text'>
                  Играйте всей командой<br/>из разных мест и домов
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}