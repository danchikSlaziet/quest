import './style.css';
import firstIMGPath from '../../images/rules-icon-1.svg';
import secondIMGPath from '../../images/rules-icon-2.svg';
import thirdIMGPath from '../../images/rules-icon-3.svg';
import fourthIMGPath from '../../images/rules-icon-4.svg';
import fifthIMGPath from '../../images/rules-icon-5.svg';
import yellowLinePath from '../../images/rules-yellow-line.svg';
import purpleLinePath from '../../images/rules-purple-line.svg';
import number1IconPath from '../../images/rules-number-1.svg';
import number2IconPath from '../../images/rules-number-2.svg';
import number3IconPath from '../../images/rules-number-3.svg';
import number4IconPath from '../../images/rules-number-4.svg';
import qrLinePath from '../../images/rules-qr-line.svg';
import qrPath from '../../images/rules-qr.png';

export default function Rules() {
  return(
    <section className='rules'>
      <div className='auto-width'>
        <div className='rules__content auto-padding'>
          <p className='sub-heading rules__sub-heading'>
            увлекательная, весёлая и оригинальная
          </p>
          <h2 className='heading rules__heading'>
            Игра «Городской квест»
          </h2>
          <div className='rules__cards' data-aos='fade-up'>
            <div className='rules__card' data-aos='fade'>
              <img className='rules__card-yellow-line' src={yellowLinePath} alt="пунктирная линия кривая" />
              <img className='rules__card-number-icon rules__card-number-icon_first' src={number1IconPath} alt="номер один 1" />
              <img className='rules__card-img' src={firstIMGPath} alt="иконка сообщение" />
              <p className='rules__card-text'>
                Каждый участник квеста получает персональное приглашение на встречу и правила игры
              </p>
              <p className='rules__card-subtext'>
                Все основные правила квеста прописываются в брендированном Телеграм-канале или в группе ВК. Там же проводится регистрация игроков. 
              </p>
            </div>
            <div className='rules__card'>
              <img className='rules__card-purple-line' src={purpleLinePath} alt="пунктирная линия кривая" />
              <img className='rules__card-number-icon rules__card-number-icon_second' src={number2IconPath} alt="номер два 2" />
              <img className='rules__card-img' src={secondIMGPath} alt="иконка сообщение" />
              <p className='rules__card-text'>
                Игроки собираются в заранее обозначенном месте (офис, парк, база отдыха и т.д.)
              </p>
              <p className='rules__card-subtext'>
                Для всех, кто в игре, проводится краткий инструктаж. Если соревнуются между собой команды, то проводится регистрация капитанов команд. 
              </p>
            </div>
            <div className='rules__card'>
              <img className='rules__card-yellow-line' src={yellowLinePath} alt="пунктирная линия кривая" />
              <img className='rules__card-number-icon rules__card-number-icon_third' src={number3IconPath} alt="номер три 3" />
              <img className='rules__card-img' src={thirdIMGPath} alt="иконка сообщение" />
              <p className='rules__card-text'>
                А дальше вопросы и подсказки о нахождении спрятанных QR-кодов
              </p>
              <p className='rules__card-subtext'>
                Когда игра стартует, в нашем чат-боте появляются вопросы с вариантами ответов: как тематические (в том числе и о вашей компании), так и обо всём на свете. Участники квеста за каждый правильный ответ получают баллы и  подсказку от бота о спрятанных qr-кодах. 
              </p>
            </div>
            <div className='rules__card'>
              <img className='rules__card-purple-line' src={purpleLinePath} alt="пунктирная линия кривая" />
              <img className='rules__card-number-icon rules__card-number-icon_fourth' src={number4IconPath} alt="номер четыре 4" />
              <img className='rules__card-img' src={fourthIMGPath} alt="иконка сообщение" />
              <p className='rules__card-text'>
                И начинается самое интересное - поиск спрятанных qr-кодов
              </p>
              <p className='rules__card-subtext'>
                Наш чат бот в игровой форме будет выдавать подсказки о местах, где спрятаны секретные  QR-коды. Это могут быть любые локации - на свежем воздухе, в помещениях, у конкретных людей, в интернете. За каждый найденный и отсканированный код - начисляются дополнительные баллы. 
              </p>
            </div>
            <div className='rules__card'>
              <img className='rules__card-img' src={fifthIMGPath} alt="иконка сообщение" />
              <p className='rules__card-text'>
                Ну, и, наконец, финал! Призы, поздравления и торт (если есть)
              </p>
              <p className='rules__card-subtext'>
                Побеждает в квесте тот, кто наберет больше всех баллов. Баллы начисляем за правильные ответы на вопросы и за найденные коды. Причем, чем раньше нашел код, тем больше заработал баллов! Победителям квеста - подарки, почёт и уважение от коллег :) 
              </p>
            </div>
            <div className='rules__card-qr rules__card-qr_pos_abs'>
              <p className='rules__qr-text'>
                QR-код выглядит<br />вот так:
              </p>
              <img className='rules__qr-img' src={qrPath} alt="QR code код" />
              <img className='rules__qr-line' src={qrLinePath} alt="line линия" />
            </div>
            <div className='rules__card-qr rules__card-qr_dis_block'>
              <p className='rules__qr-text'>
                QR-код выглядит<br />вот так:
              </p>
              <img className='rules__qr-img' src={qrPath} alt="QR code код" />
              <img className='rules__qr-line' src={qrLinePath} alt="line линия" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}