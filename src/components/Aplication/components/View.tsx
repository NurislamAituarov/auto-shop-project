import s from './styles.module.scss';
import cn from 'classnames';

import { IValues } from '../Application';
import { IItemCar } from '../../../types';
import { car } from '../../../assets';

interface IView {
  brandList: IItemCar;
  value: IValues;
}

export function View({ brandList, value }: IView) {
  return (
    <div className={s.setting__view}>
      {!brandList ? (
        <img src={car} alt="car" />
      ) : (
        <img src={brandList.url_img} alt="фото машины" width="424" />
      )}
      <div className={s.setting__view__container}>
        <div className={cn({ [s.active_credit]: value.value3 })}>
          <p>
            {value.value3}
            {value.value1 > 0 && ' руб.'}
          </p>
          <p>
            {value.value1 - value.value3} {value.value1 > 0 && ' руб.'}
          </p>
        </div>
        <hr className={cn({ [s.active_hr]: value.value3 })} />
        <div className={cn({ [s.active_sum]: value.value3 })}>
          <p>Первоначальный взнос</p>
          <p>Остаток по кредиту</p>
        </div>
      </div>
    </div>
  );
}
