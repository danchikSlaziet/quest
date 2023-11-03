import './style.css';
import qrPath from '../../images/game-qr.png';
import ellipsePath from '../../images/game-ellipse.svg';
import btnArrowPath from '../../images/game-arrow.svg';
import swiperLeftButton from '../../images/game-left-arrow.svg';
import swiperRightButton from '../../images/game-right-arrow.svg';
import sunIMG from '../../images/game-sun.svg';
import fenceIMG from '../../images/photos-fence.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef } from 'react';

export default function Game() {
  const swiperRef = useRef();

  function goNext() {
    if (swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  }
  function goBack() {
    if (swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  }

  return(
    <section className='game'>
      <div className='auto-width'>
        <div className='game__content'>
          <img className='game__fence' src={fenceIMG} alt="забор волнистая линия" />
          <div className='game__about-quest'>
            <img className='game__qr' src={qrPath} alt="qr code код" />
            <div className='game__info'>
              <h3 className='game__title'>
                Что входит в игру:
              </h3>
              <div className='game__cards'>
                <div className='game__card'>
                  <div className='game__card-count'>
                    <img className='game__card-ellipse' src={ellipsePath} alt="эллипс цифра число" />
                    <div className='game__card-num'>
                      01
                    </div>
                  </div>
                  <p className='game__card-title'>
                    Брендированный ТГ-канал (группа ВК)
                  </p>
                  <p className='game__card-text'>
                    Мы создаем на выбор  канал в Телеграме или группу в ВК, где размещаем основные правила квеста
                  </p>
                </div>
                <div className='game__card'>
                  <div className='game__card-count'>
                    <img className='game__card-ellipse' src={ellipsePath} alt="эллипс цифра число" />
                    <div className='game__card-num'>
                      02
                    </div>
                  </div>
                  <p className='game__card-title'>
                    Игровой бот ВК или Телеграм
                  </p>
                  <p className='game__card-text'>
                    Квест может проводится на двух платформах - в Телеграм или ВКонтакте
                  </p>
                </div>
                <div className='game__card'>
                  <div className='game__card-count'>
                    <img className='game__card-ellipse' src={ellipsePath} alt="эллипс цифра число" />
                    <div className='game__card-num'>
                      03
                    </div>
                  </div>
                  <p className='game__card-title'>
                    Тематические вопросы
                  </p>
                  <p className='game__card-text'>
                    Вопросы могут быть как тематические (о вашей компании, о праздничной дате, о конкретном месте или человеке), так и обо всём на свете
                  </p>
                </div>
                <div className='game__card'>
                  <div className='game__card-help'>
                    Прятать<br />вам!
                  </div>
                  <div className='game__card-count'>
                    <img className='game__card-ellipse' src={ellipsePath} alt="эллипс цифра число" />
                    <div className='game__card-num'>
                      04
                    </div>
                  </div>
                  <p className='game__card-title'>
                    QR-коды и подсказки
                  </p>
                  <p className='game__card-text'>
                    Мы изготавливаем QR-коды, придумываем локации, где их прятать и подсказки
                  </p>
                </div>
                <div className='game__card'>
                  <div className='game__card-count'>
                    <img className='game__card-ellipse' src={ellipsePath} alt="эллипс цифра число" />
                    <div className='game__card-num'>
                      05
                    </div>
                  </div>
                  <p className='game__card-title'>
                    Подарок победителю
                  </p>
                  <p className='game__card-text'>
                    По окончанию квеста определяются победители, которые одариваются памятными призами
                  </p>
                </div>
                <button type='button' className='game__button'>
                  <p className='game__button-text'>
                    Заказать<br />сейчас
                  </p>
                  <img className='game__button-arrow' src={btnArrowPath} alt="arrow right стрелка вправо" />
                </button>
              </div>
            </div>
          </div>
          <div className='game__tips'>
            <h2 className='game__tips-title'>
              Примеры вопросов<br/>и подсказок
            </h2>
            <div className='game__tips-swiper'>
              <Swiper
                ref={swiperRef}
                spaceBetween={30}
                slidesPerView={'auto'}
              >
                <SwiperSlide>
                  <div className='game__tip'>
                    <img className='game__tip-img' src={sunIMG} alt="звезда солнце" />
                    <p className='game__tip-text'>
                      Это место знают все, но чаще остальных бывает там бухгалтер
                    </p>
                    <p className='game__tip-subtext'>
                      Ответ: Буфет на втором этаже
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='game__tip'>
                    <img className='game__tip-img' src={sunIMG} alt="звезда солнце" />
                    <p className='game__tip-text'>
                      Ищи qr-код около самого бодрящего места в буфете
                    </p>
                    <p className='game__tip-subtext'>
                      Локация: За кофемашиной
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='game__tip'>
                    <img className='game__tip-img' src={sunIMG} alt="звезда солнце" />
                    <p className='game__tip-text'>
                      Сейчас парк называют Кремлёвским. А как его называли в XIX веке?
                    </p>
                    <p className='game__tip-subtext'>
                      Ответ: Летний сад
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='game__tip'>
                    <img className='game__tip-img' src={sunIMG} alt="звезда солнце" />
                    <p className='game__tip-text'>
                      Код спрятан рядом с кафе с волшебным названием
                    </p>
                    <p className='game__tip-subtext'>
                      Локация: Чародейка
                    </p>
                  </div>
                </SwiperSlide>
                <div className='swiper-tips-buttons'>
                  <img onClick={goBack} className='swiper-tips-button' src={swiperLeftButton} alt="стрелка влево кнопка" />
                  <img onClick={goNext} className='swiper-tips-button' src={swiperRightButton} alt="стрелка вправо кнопка" />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}