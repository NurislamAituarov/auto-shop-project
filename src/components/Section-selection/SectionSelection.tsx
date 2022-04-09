import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import s from './SectionSelect.module.scss';
import { useRef } from 'react';

import wing from '../../Images/pngwing.png';
import ellipse from '../../Images/Ellipse.png';
import { Button } from '../Btn/Button';
import { DirectionButtons } from '../Direction-btn/DirectionButtons';
import { SpecialOffers } from '../Special-offers/SpecialOffers';
import { OurSelection } from '../Our-selection';
import { sum1, sum2 } from '../../Hooks/useCustomCounter';
import { onNext, onPrev } from '../../Hooks/direction';
import { popUpBackCall } from '../../Actions/action';
import { useDispatch } from 'react-redux';

export const arrSpecificOffers = [
  'Первый автомобиль',
  'Семейный автомобиль',
  'Экспресс-кредит',
  'Работникам медицины',
  'Рассрочка',
  'Госпрограмма Trade-in',
];
const arrOurSelection = [
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

export default function SectionSelect() {
  const refSpecialOff = useRef<(HTMLDivElement | any)[]>([]);
  const refBlock = useRef<(HTMLDivElement | any)[]>([]);

  const dispatch = useDispatch();

  return (
    <section className={s.section}>
      <DirectionButtons
        title="Наши подборки"
        subtitle="Все подборки"
        onPrev={() => onPrev('подборки', refBlock, sum1)}
        onNext={() => onNext('подборки', refBlock, sum1)}
        link="our-selections"
      />
      <div className={s.selection__block}>
        <div className={s.selection__block_wrapper}>
          {arrOurSelection.map((el, i) => {
            return <OurSelection key={i} i={i} el={el} refBlock={refBlock} />;
          })}
        </div>
      </div>
      <div className={s.selection__sentence}>
        <LazyLoadImage effect="blur" src={wing} alt="перчатки " />
        <img src={ellipse} alt="ellipse" />
        <div className={s.selection__sentence_title}>
          <h2>Перебьем предложения от конкурентов!</h2>
          <p>
            Скидки от <span>10 до 25%</span> на стоимость автомобиля{' '}
          </p>
          <div className={s.selection__sentence_btn}>
            <input type="text" placeholder="Ваш телефон" />
            <Button title="Получить предложение" click={() => dispatch(popUpBackCall('offer'))} />
          </div>
          <span>
            Нажимая кнопку “Отправить” Вы даете согласие на обработку своих персональных данных
          </span>
        </div>
      </div>
      <DirectionButtons
        title="Спецпредложения"
        onPrev={() => onPrev('спецпредложения', refSpecialOff, sum2)}
        onNext={() => onNext('спецпредложения', refSpecialOff, sum2)}
      />
      <div className={s.selection__specialOffers}>
        <div className={s.selection__specialOffers_block}>
          <div className={s.selection__specialOffers_wrapper}>
            {arrSpecificOffers.map((value, index) => {
              return (
                <SpecialOffers
                  key={index}
                  index={index}
                  value={value}
                  refSpecialOff={refSpecialOff}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
