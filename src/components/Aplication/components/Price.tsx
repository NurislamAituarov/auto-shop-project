import { IValues } from '../Application';
import s from './styles.module.scss';

import { SliderCustom } from './Slider';

interface IPrice {
  value: IValues;
  setValue: (value: any) => void;
}

export function Price({ value, setValue }: IPrice) {
  return (
    <div className={s.setting__price}>
      <div className={s.setting__price_title}>
        <p>Сумма кредита, руб</p>
        <strong>
          {value.value1}
          {value.value1 < 1000000 && value.value1 >= 0 ? 'т' : 'м'}
        </strong>
      </div>
      <SliderCustom setValue={setValue} value={value} typeSlider="price" />
      <div className={s.setting__price_title}>
        <p>Срок кредита, мес.</p>
        <strong>{value.value2} мес.</strong>
      </div>
      <SliderCustom setValue={setValue} value={value} typeSlider="month" />

      <div className={s.setting__price_rub}>
        <p>Первоначальный взнос, руб</p>
        <input type="text" placeholder="0" readOnly value={value.value3} />
      </div>
    </div>
  );
}
