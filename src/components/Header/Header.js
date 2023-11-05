import './style.css';
import logoPath from '../../images/logo.svg';
import telegramPath from '../../images/telegram.svg';
import vkPath from '../../images/vk.svg';

export default function Header() {
  return (
    <header data-aos="fade-down-right" className="header">
      <div className='auto-width'>
        <div className='header__content auto-padding'>
          <div className='header__company-info'>
            <a className='header__logo-link' href='#'>
              <img className='header__logo' src={logoPath} alt="звезда логотип vnqr.online" />
            </a>
            <p className='header__company-name'>VNQR.ONLINE</p>
          </div>
          <div className='header__links'>
            <p className='header__links-text'>
              Мы онлайн<br />пишите:
            </p>
            <div className='header__links-container'>
              <a className='header__link' href='https://ya.ru' target='_blank'>
                <img style={{display: 'block'}} src={telegramPath} alt="telegram телеграм" />
              </a>
              <a className='header__link' href='https://ya.ru' target='_blank'>
                <img style={{display: 'block'}} src={vkPath} alt="vk vkontakte вконтакте вк" />
              </a>
            </div>
          </div>
          <div className='header__phone-info'>
            <p className='header__phone-text'>
              Звоните, сейчас работаем
            </p>
            <p className='header__phone-number'>
              8 960 200-04-04
            </p>
          </div>
          <button className='header__call-btn' type="button">
            Обратный звонок
          </button>
        </div>
      </div>
    </header>
  );
}