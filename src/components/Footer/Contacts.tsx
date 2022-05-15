import s from './Footer.module.scss';

import { useAppSelector } from '../../Hooks/Hooks';
import { IItemCar } from '../../Type';
import { Date, Phone } from '../Svg';
import watch from '../../Assets/Svg/watch.svg';
import { Select } from '../Select';

export function Contacts() {
  const location = useAppSelector<Array<IItemCar>>((state: any) => state.reducer.location);
  return (
    <div className={s.footer__catalog_contacts}>
      <h4>Контакты</h4>
      <div className={s.contact__phone}>
        <div>
          <Phone color="white" />
        </div>
        <div>
          <a href="tel:+7 (705) 304-76-62">
            <p>+7 (705) 304-76-62</p>
          </a>
          <a href="tel:+7 (707) 363-68-94">
            <p>+7 (707) 363-68-94</p>
          </a>
        </div>
      </div>
      <div className={s.contact__phone}>
        <div>
          <img src={watch} alt="date" />
        </div>
        <p>Ежедневно с 08:00 до 21:00</p>
      </div>
      <div className={s.contact__phone}>
        <div>
          <Date color="white" />
        </div>
        <div>
          {location ? <p>{location}</p> : <p>Страна, Город, 38КМ МКАД, 6Бс1</p>}
          <span>Схема проезда</span>
        </div>
      </div>
      <Select name="Москва" arr={['Aстана', 'Костанай', 'Алматы']} />
    </div>
  );
}
