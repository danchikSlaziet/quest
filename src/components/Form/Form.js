import './style.css';
import helpBG from '../../images/form-bg.svg';
import { useState } from 'react';

export default function Form() {
  const [value, setValue] = useState({
    name: '',
    contacts: ''
  });
  function submitHandler(evt) {
    evt.preventDefault();
  }

  return(
    <section className='form'>
      <div className='auto-width'>
        <div className='form__content auto-padding' data-aos='fade-right'>
          <form className='form__main-form'>
            <img className='form__help-bg' src={helpBG} alt="" />
            <div className='form__info-block'>
              <p className='form__title'>
              Приобретите игру —<br />подарите сотрудникам особое настроение
              </p>
              <div className='form__luring'>
                тем более, это не дорого 😁
              </div>
            </div>
            <div className='form__input-block'>
              <p className='form__subtext'>
                Отправьте заявку, и мы свяжемся с вами удобным для вас способом
              </p>
              <input onChange={(evt) => setValue({...value, name: evt.target.value})} placeholder='Имя' className='form__input' type="text" name="name" value={value.name} />
              <input onChange={(evt) => setValue({...value, contacts: evt.target.value})} placeholder='Телефон, почта, месенджер' className='form__input' type="text" name="contacts" value={value.contacts} />
              <button onClick={submitHandler} className='form__submit' type="submit">
                Отправить
              </button>
              <p className='form__confident'>
                Нажимая кнопку «Отправить», вы принимаете <a href='https://ya.ru' target='_blank' className='form__confident-link'>условия обработки персональных данных</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}