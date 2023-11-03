import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import swiperLeftButton from '../../images/swip-btn-left-pink.svg';
import swiperRightButton from '../../images/swip-btn-right-pink.svg';
import { useRef } from 'react';
import img1 from '../../images/photos-1.png';
import img2 from '../../images/photos-2.jpg';
import img3 from '../../images/photos-3.png';
import img4 from '../../images/photos-4.png';
import fenceIMGPath from '../../images/photos-fence.svg';

export default function Photos() {
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

  return (
    <section className='photos'>
      <div className='auto-width'>
        <div className='photos__content auto-padding'>
          <img className='photos__fence' src={fenceIMGPath} alt="fence забор заборчик" />
          <p className='photos__sub-heading sub-heading'>
            увлекательная, весёлая и оригинальная
          </p>
          <h2 className='photos__heading heading'>
            Игра в лицах
          </h2>
          <div className='photos__swiper-container'>
            <Swiper
              ref={swiperRef}
              spaceBetween={30}
              slidesPerView={'auto'}
            >
              <SwiperSlide>
                <div className='photos__swiper-card photos__swiper-card_bor_1'>
                  <img className='photos__swiper-card-img' src={img1} alt="фото люди квест" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='photos__swiper-card photos__swiper-card_bor_2'>
                  <img className='photos__swiper-card-img' src={img2} alt="фото люди квест" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='photos__swiper-card photos__swiper-card_bor_3'>
                  <img className='photos__swiper-card-img' src={img3} alt="фото люди квест" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='photos__swiper-card photos__swiper-card_bor_4'>
                  <img className='photos__swiper-card-img' src={img4} alt="фото люди квест" />
                </div>
              </SwiperSlide>
              <div className='swiper-buttons'>
                <img onClick={goBack} className='swiper-button' src={swiperLeftButton} alt="стрелка влево кнопка" />
                <img onClick={goNext} className='swiper-button' src={swiperRightButton} alt="стрелка вправо кнопка" />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}