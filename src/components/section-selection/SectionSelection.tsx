import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import s from './SectionSelect.module.scss';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../btn/Button';
import { DirectionButtons } from '../direction-btn/DirectionButtons';
import { SpecialOffers } from '../special-offers/SpecialOffers';
import { OurSelection } from '../our-selection/OurSelection';
import { sum1, sum2 } from '../../hooks/useCustomCounter';
import { onNext, onPrev } from '../../hooks/direction';
import { addPopUpBackCall } from '../../redux/actions/action';
import { useValueValidate } from '../../hooks/useValueValidate';
import { Input } from '../Input';
import { ellipse, wing } from '../../assets';

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

export default function SectionSelect({ refSpecialOffers }: any) {
  const refSpecialOff = useRef<(HTMLDivElement | any)[]>([]);
  const refBlock = useRef<(HTMLDivElement | any)[]>([]);
  const refInput = useRef<HTMLInputElement | null>(null);
  const { valuePhone, setValuePhone, onChange } = useValueValidate();
  const dispatch = useDispatch();

  function onSubmit(e: any) {
    e.preventDefault();
    if (valuePhone) {
      dispatch(addPopUpBackCall('offer'));
      setValuePhone('');
    } else {
      refInput.current?.focus();
    }
  }

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
      <div id="SpecialOffers" className={s.selection__sentence}>
        <div className={s['selection__sentence-imgWing']}>
          <LazyLoadImage effect="blur" src={wing} alt="перчатки" width="100%" height="100%" />
        </div>
        <img src={ellipse} alt="ellipse" />
        <div className={s.selection__sentence_title}>
          <h2>Перебьем предложения от конкурентов!</h2>
          <p>
            Скидки от <span>10 до 25%</span> на стоимость автомобиля{' '}
          </p>
          <form onSubmit={onSubmit} className={s.selection__sentence_btn}>
            <Input
              placeholder="Ваш телефон"
              type="tel"
              refInput={refInput}
              value={valuePhone}
              onChange={onChange}
            />

            <Button
              title="Получить предложение"
              click={() => valuePhone && dispatch(addPopUpBackCall('offer'))}
            />
          </form>
          <span>
            Нажимая кнопку “Отправить” Вы даете согласие на обработку своих персональных данных
          </span>
        </div>
      </div>
      <DirectionButtons
        refSpecialOffers={refSpecialOffers}
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
