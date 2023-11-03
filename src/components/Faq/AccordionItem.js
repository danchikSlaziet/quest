import './style.css';
import plusIMGPath from '../../images/faq-plus.svg';
import { useRef } from 'react';

export default function AccordionItem({ faqItem, onClick, isOpen }) {
  const itemRef = useRef(null);

  return (
    <li className='accordion-item' 
    >
      <div onClick={() => onClick()} className='faq__question'>
        <p className='faq__question-text'>
          {faqItem.q}
        </p>
        <img className={isOpen ? 'faq__plus faq__plus_active' : 'faq__plus'} src={plusIMGPath} alt="plus плюс" />
      </div>
      <div className='accordion-collapse' style={
        isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
      }>
        <div className='faq__answer' ref={itemRef} >
          {faqItem.a}
        </div>
      </div>
    </li>
  );
}