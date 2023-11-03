import './style.css';
import { useState } from 'react';
import AccordionItem from './AccordionItem';

export default function Faq() {
  const [openId, setId] = useState(null);

  const faqList = [
    {
      q: "В каком формате проходит игра",
      a: "Lorem ipsum dolor sit amet consectetur. Sed quis aliquet nec ultrices sollicitudin diam scelerisque fusce. Donec gravida volutpat donec pellentesque aenean. Sapien amet nam habitasse est cursus quis nisl integer id.",
    },
    {
      q: "В каком формате проходит игра",
      a: "Lorem ipsum dolor sit amet consectetur. Sed quis aliquet nec ultrices sollicitudin diam scelerisque fusce. Donec gravida volutpat donec pellentesque aenean. Sapien amet nam habitasse est cursus quis nisl integer id. Lorem ipsum dolor sit amet consectetur. Sed quis aliquet nec ultrices sollicitudin diam scelerisque fusce. Donec gravida volutpat donec pellentesque aenean. Sapien amet nam habitasse est cursus quis nisl integer id. Lorem ipsum dolor sit amet consectetur. Sed quis aliquet nec ultrices sollicitudin diam scelerisque fusce. Lorem ipsum dolor sit amet consectetur. Sed quis aliquet nec ultrices sollicitudin diam scelerisque fusce. Lorem ipsum dolor sit amet consectetur. Sed quis aliquet nec ultrices sollicitudin diam scelerisque fusce. Lorem ipsum dolor sit amet consectetur. Sed quis aliquet nec ultrices sollicitudin diam scelerisque fusceLorem ipsum dolor sit amet consectetur. Sed quis aliquet nec ultrices sollicitudin diam scelerisque fusce. Lorem ipsum dolor sit amet consectetur. Sed quis aliquet nec ultrices sollicitudin diam scelerisque fusceLorem ipsum dolor sit amet consectetur. Sed quis aliquet nec ultrices sollicitudin diam scelerisque fusce. Lorem ipsum dolor sit amet consectetur. Sed quis aliquet nec ultrices sollicitudin diam scelerisque fusceLorem ipsum dolor sit amet consectetur. Sed quis aliquet nec ultrices sollicitudin diam scelerisque fusce. Lorem ipsum dolor sit amet consectetur. Sed quis aliquet nec ultrices sollicitudin diam scelerisque fusce",
    },
    {
      q: "В каком формате проходит игра",
      a: "Lorem ipsum dolor sit amet consectetur. Sed quis aliquet nec ultrices sollicitudin diam scelerisque fusce. Donec gravida volutpat donec pellentesque aenean. Sapien amet nam habitasse est cursus quis nisl integer id.",
    },
    {
      q: "В каком формате проходит игра",
      a: "Lorem ipsum dolor sit amet consectetur. Sed quis aliquet nec ultrices sollicitudin diam scelerisque fusce. Donec gravida volutpat donec pellentesque aenean. Sapien amet nam habitasse est cursus quis nisl integer id.",
    },
  ];

  return (
    <section className='faq'>
      <div className='auto-width'>
        <div className='faq__content auto-padding'>
          <p className='faq__sub-heading sub-heading'>
            Узнайте больше об игре
          </p>
          <h2 className='faq__heading heading'>
            Ответы на частые вопросы
          </h2>
          <div className='faq__questions'>
            {faqList.map((elem, id) => {
              return (
                <AccordionItem faqItem={elem} key={id} isOpen={id === openId} onClick={() => id === openId ? setId(null) : setId(id)}/>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}