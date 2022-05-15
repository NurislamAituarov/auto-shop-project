import { NavLink } from 'react-router-dom';
import s from './Taxi.module.scss';

import { Down } from '../../components/Svg';
import taxi from '../../Images/taxi.png';
import { BlockCart } from './components/BlockCart';
import { MadeMoney } from './components/MadeMoney';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CreditCalculator } from './components/CreditCalculator';

const additional = [
  'Льготный автокредит от 1,9%',
  'Оклейка авто в подарок',
  'Акция действует до 13 сентября!',
  'Первоначальный взнос 0%',
];

export default function Taxi() {
  return (
    <section className={s.section__taxi}>
      <div className={s.banner__wrapper}>
        <div className={s.banner__fon}></div>
        <div className={s.taxi}>
          <LazyLoadImage effect="blur" src={taxi} alt="taxi" />
        </div>
        <div className={s.banner}>
          <div className={s.routing__title}>
            <NavLink to="/auto-shop-project">
              <p onClick={() => localStorage.setItem('active', 'Подбор авто')}>Главная</p>
            </NavLink>
            <Down />
            <p>Такси в кредит</p>
          </div>
          <h1>Специальное предложение на покупку авто под такси</h1>
          <div className={s.additional}>
            {additional.map((el, i) => {
              return (
                <div key={i} className={s.additional__item}>
                  <div className={s.additional__svg}>
                    <svg
                      width="39"
                      height="39"
                      viewBox="0 0 39 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.5 39C8.74377 39 0 30.2562 0 19.5C0 8.74377 8.74377 0 19.5 0C30.2562 0 39 8.74377 39 19.5C39 30.2562 30.2562 39 19.5 39ZM19.5 3.77046C10.8256 3.77046 3.74733 10.8256 3.74733 19.5231C3.74733 28.1975 10.8025 35.2758 19.5 35.2758C28.1744 35.2758 35.2527 28.2206 35.2527 19.5231C35.2527 10.8256 28.1744 3.77046 19.5 3.77046Z"
                        fill="white"
                      />
                      <path
                        d="M17.2999 27.9919C16.791 27.9919 16.3284 27.8068 15.9814 27.4367L11.5864 23.0417C11.2394 22.6947 11.0312 22.209 11.0312 21.7232C11.0312 21.2143 11.2163 20.7517 11.5864 20.4047C11.9334 20.0577 12.4192 19.8495 12.9049 19.8495C13.3907 19.8495 13.8764 20.0346 14.2234 20.4047L17.0686 23.2499C17.138 23.3193 17.2074 23.3424 17.2999 23.3424C17.3925 23.3424 17.4619 23.3193 17.5313 23.2499L26.9921 13.789C27.3391 13.4421 27.8248 13.2339 28.3106 13.2339C28.7964 13.2339 29.2821 13.4189 29.6291 13.789C30.3693 14.5293 30.3693 15.709 29.6291 16.4492L18.6184 27.4599C18.2715 27.8068 17.7857 27.9919 17.2999 27.9919Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p>{el}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <BlockCart />
      <MadeMoney />
      <CreditCalculator />
    </section>
  );
}
