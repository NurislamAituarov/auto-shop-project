import { LazyLoadImage } from 'react-lazy-load-image-component';
import cn from 'classnames';
import s from './CarAvailable.module.scss';
import { memo } from 'react';

import { IItemCar } from '../../Type';
import gift from '../Svg/gift.svg';
import sec from '../Svg/sec.svg';
import speed from '../Svg/speed.svg';
import petrol from '../Svg/petrol.svg';
import power from '../Svg/power.svg';
import { Diagram, Heart } from '../Svg';
import car_skeleton from '../../Images/car-skeleton.png';

interface IListItem {
  el: IItemCar;
  i: number;
  addCarSelect: (item: IItemCar, index: number) => void;
}

export default memo(function ListItem({ el, i, addCarSelect }: IListItem) {
  const img = el.url_img ? el.url_img : car_skeleton;

  return (
    <div className={s.item}>
      <div className={cn(s.item__svg)}>
        <Heart addCarSelect={() => addCarSelect(el, i)} active={el.active} width="18" height="16" />
        <Diagram height="16" />
      </div>

      <div className={s.fon}>
        <LazyLoadImage effect="blur" src={img} alt="картинка авто" height="150" />
      </div>

      <h3>{el.name_car} 1.6 MPI MT Active </h3>

      <div className={s.item__btns}>
        <button className={s.active}>Предложение дня</button>
        <button>Выгода до 300 000 ₽</button>
      </div>

      <div className={s.item__gifts}>
        <div>
          <img src={gift} alt="картинка подарка" />
        </div>
        <p>
          Оборудование <br /> <span>в подарок</span>
        </p>
      </div>
      <div className={s.item__gifts}>
        <div>
          <img src={gift} alt="картинка подарка" />
        </div>
        <p>
          КАСКО <br /> <span>в подарок</span>
        </p>
      </div>
      <div className={s.item__gifts}>
        <div>
          <img src={gift} alt="картинка подарка" />
        </div>
        <p>
          Комплект <br /> <span>в подарок</span>
        </p>
      </div>

      <div className={s.price}>
        <p>{el.price}</p>
        <p>Кредит от 115 000 ₽/мес. </p>
      </div>

      <div className={s.item__characteristics}>
        <div className="flex">
          <img src={power} alt="мощность" />
          <p>{el.characteristics.power}</p>
        </div>
        <div className="flex">
          <img src={petrol} alt="бензин" />
          <p>{el.characteristics.petrol}</p>
        </div>
        <div className="flex">
          <img src={speed} alt="скорость" />
          <p>{el.characteristics.speed}</p>
        </div>
        <div className="flex">
          <img src={sec} alt="секундамер" />
          <p>{el.characteristics.sec}</p>
        </div>
      </div>

      <div className={s.footer__btn}>
        <button>Резерв онлайн</button>
        <button>Купить</button>
        <button>Подробнее</button>
      </div>
    </div>
  );
});
