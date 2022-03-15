import { useState } from 'react';
import { Button } from '../Btn/Button';
import { CompanyTitle } from '../Company-title';
import { OurSelection } from './index';
import s from './AllOurSelection.module.scss';

const nameBlock = [
  'Семейные автомобили',
  'Автомобили для путешествий',
  'Городские автомобили',
  'Пикапы',
  'Минивэны',
  'Кроссоверы',
  'Фургоны',
  'Хэтчбеки',
  'Внедорожники',
];

export default function AllOurSelection() {
  const [state, setState] = useState(nameBlock);

  function moreBlock() {
    const newArr = state.concat(nameBlock.slice(0, 3));
    setState(newArr);
  }
  return (
    <section className={s.section}>
      <CompanyTitle title="Наши подборки" />
      <div className={s.selection__wrapper}>
        {state.map((el, i) => {
          return <OurSelection key={i} i={i} el={el} />;
        })}
      </div>

      <Button title="Показать еще" click={moreBlock} />
    </section>
  );
}
