import { LazyLoadImage } from 'react-lazy-load-image-component';
import cn from 'classnames';
import s from './CarAvailable.module.scss';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { IItemCar } from '../../types';
import { Diagram, Heart } from '../svg';
import { addCar } from '../../redux/actions/action';
import { car_skeleton, gift, petrol, power, sec, speed } from '../../assets';

interface IListItem {
  el: IItemCar;
  i: number;
  dispatch: any;
}

export default memo(function ListItem({ el, i, dispatch }: IListItem) {
  const img = el.url_img ? el.url_img : car_skeleton;

  function addCarSelect(item: IItemCar, id: number) {
    dispatch(addCar(id));
  }

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
        <button className={s.footer__btn_item}>Резерв онлайн</button>
        <button className={s.footer__btn_item}>Купить</button>
        <NavLink className={s.footer__btn_item} to={`/item${el.id}`}>
          <p>Подробнее</p>
        </NavLink>
      </div>
    </div>
  );
});
