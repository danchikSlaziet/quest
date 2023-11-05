import './style.css';
import leftEllipse from '../../images/left-ellipse.svg';
import rightEllipse from '../../images/right-ellipse.svg';
import bottomEllipse from '../../images/bottom-ellipse.svg';
import rocksIMGPath from '../../images/home-rocks.svg';
import mainIMGPath from '../../images/home-main-img.png';

export default function SupportImages() {
  return(
    <>
      <img className='ellipse ellipse_left' src={leftEllipse} alt="ellipse эллипс" />
      <img className='ellipse ellipse_right' src={rightEllipse} alt="ellipse эллипс" />
      <img className='ellipse ellipse_bottom' src={bottomEllipse} alt="ellipse эллипс" />
      <img className='roks-img' src={rocksIMGPath} alt="фон белые горы" />
      <img data-aos="slide-left" className='main-img' src={mainIMGPath} alt="фото карты квесты" />
    </>
  );
}