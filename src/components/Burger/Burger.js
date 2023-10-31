import './style.css';
import telegramPath from '../../images/telegram.svg';
import vkPath from '../../images/vk.svg';

export default function Burger({ burgerOpen }) {
  return (
    <div className={burgerOpen ? 'burger burger_active' : 'burger'}>
      <div className='burger__links'>
        <p className='burger__links-text'>
          Мы онлайн:
        </p>
        <div className='burger__links-container'>
          <a className='burger__link' href='https://ya.ru' target='_blank'>
            <img style={{ display: 'block' }} src={telegramPath} alt="telegram телеграм" />
          </a>
          <a className='burger__link' href='https://ya.ru' target='_blank'>
            <img style={{ display: 'block' }} src={vkPath} alt="vk vkontakte вконтакте вк" />
          </a>
        </div>
      </div>
      <div className='burger__phone-info'>
        <p className='burger__phone-text'>
          Звоните, сейчас работаем
        </p>
        <p className='burger__phone-number'>
          8 960 200-04-04
        </p>
      </div>
      <button className='burger__call-btn' type="button">
        Обратный звонок
      </button>
    </div>
  );
}