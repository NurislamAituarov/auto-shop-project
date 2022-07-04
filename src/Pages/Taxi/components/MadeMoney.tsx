import s from './MadeMoney.module.scss';
import taxi from '../../../Assets/Images/taxi1.png';
import { Tag } from '../../../components/Tag';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const pros = [
  'Авто в личной собственности по ПТС',
  'Платеж по кредиту от 90 руб. в день',
  'Рассрочка 0% без первоначального взноса',
  'Бесплатная установка ГБО для экономии топлива',
  'Оклейка автомобиля по ГОСТу',
  'Быстрое оформление всех документов под ключ',
];

const flaw = [
  'Авто в собственности автопарка',
  'Платеж за арендованное такси от 1200 руб. в ден',
  'Риск скрытых комиссий и переплат',
  'Нельзя установить доп. оборудование',
  'Возможно несоответствие нормам ГОСТ',
  'Долгое оформление документов',
];

export function MadeMoney() {
  return (
    <div className={s.block__madeMoney}>
      <h2>Сколько можно заработать на такси?</h2>
      <div className={s.block__madeMoney_advantage}>
        <Tag title="Преимущества" />
        <h2>Свое такси</h2>
        <div>
          {pros.map((el, i) => {
            return (
              <div className={s.item} key={i}>
                <div>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.26653 2.86792H8V5.04906H5.26653V8H2.74148V5.04906H0V2.86792H2.74148V0H5.26653V2.86792Z"
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
      <div className={s.block__madeMoney_flaw}>
        <Tag title="Недостатки" />
        <h2>Аренда такси</h2>
        <div>
          {flaw.map((el, i) => {
            return (
              <div className={s.item} key={i}>
                <div>
                  <svg
                    width="8"
                    height="4"
                    viewBox="0 0 8 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.26653 0.86792H8V3.04905H5.26653H2.74148H0V0.86792H2.74148H5.26653Z"
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
      <div className={s.block__madeMoney_img}>
        <LazyLoadImage effect="blur" src={taxi} alt="taxi" />
      </div>
    </div>
  );
}
