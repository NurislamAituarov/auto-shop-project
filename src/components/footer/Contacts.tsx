import { useMemo } from 'react';

import { useAppSelector } from '../../hooks/Hooks';
import { Date, Phone } from '../svg';
import { Select } from '../select';
import { watch } from '../../assets';
import s from './Footer.module.scss';

export function Contacts() {
  const location = useAppSelector((state) => state.reducer.location);

  const streetArr = useMemo(() => {
    return ['Aстана', 'Костанай', 'Алматы'];
  }, []);

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
      <Select name="Москва" arr={streetArr} />
    </div>
  );
}
