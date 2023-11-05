import './style.css';
import logoPath from '../../images/footer-logo.svg';
import telegramPath from '../../images/footer-telegram.svg';
import vkPath from '../../images/footer-vk.svg';

export default function Footer() {
  return(
    <footer className='footer'>
      <div className='auto-width'>
        <div className='footer__content auto-padding'>
          <div className='footer__links'>
            <a className='footer__link footer__logo-link' href="#">
              <img className='footer__logo' src={logoPath} alt="sun логотип Namesite" />
            </a>
            <div className='footer__center-block'>
              <a className='footer__link footer__project-link' href="https://ya.ru" target='_blank'>
                О проекте
              </a>
              <a className='footer__link footer__contacts-link' href="https://ya.ru" target='_blank'>
                Контакты
              </a>
            </div>
            <div className='footer__right-links'>
              <a className='footer__link footer__mail-link' href="mailto:go@namesite.ru" target='_blank'>
                go@namesite.ru
              </a>
              <a className='footer__link footer__telegram-link' href="https://ya.ru" target='_blank'>
                <img className='footer__social-icon' src={telegramPath} alt="telegram телеграм" />
              </a>
              <a className='footer__link' href="https://ya.ru" target='_blank'>
                <img className='footer__social-icon' src={vkPath} alt="vk vkontakte вк вконтакте" />
              </a>
            </div>
          </div>
          <div className='footer__other'>
            <p className='footer__copyright'>
              © 2022-2023, Namesite
            </p>
            <div className='footer__other-links'>
              <a className='footer__privacy' href="https://ya.ru" target='_blank'>
                Политика приватности
              </a>
              <a className='footer__contract' href="https://ya.ru" target='_blank'>
                Договор офферты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}