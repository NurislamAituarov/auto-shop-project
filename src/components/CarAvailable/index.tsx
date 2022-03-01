import s from './CarAvailable.module.scss';
import cn from 'classnames';
import { useState } from 'react';
import { Diagram, Heart } from '../Svg';
import { Button } from '../Btn/Button';
import { useDispatch } from 'react-redux';
import { addCar, removeCar } from '../../Actions/action';
import { IItemCar } from '../../Type';

import gift from '../Svg/gift.svg';
import sec from '../Svg/sec.svg';
import speed from '../Svg/speed.svg';
import petrol from '../Svg/petrol.svg';
import power from '../Svg/power.svg';
import car from '../Images/skoda.png';

export function CarAvailable() {
  const [listItem, setListItem] = useState([
    {
      active: false,
      price: 'от 1 615 000 ₽',
      characteristics: { power: '115 л.с.', petrol: '5.3 л/км', speed: '189 км/ч', sec: '10,3 c.' },
    },
    {
      active: false,
      price: 'от 2 615 000 ₽',
      characteristics: { power: '115 л.с.', petrol: '5.3 л/км', speed: '189 км/ч', sec: '10,3 c.' },
    },
    {
      active: false,
      price: 'от 3 615 000 ₽',
      characteristics: { power: '115 л.с.', petrol: '5.3 л/км', speed: '189 км/ч', sec: '10,3 c.' },
    },
    {
      active: false,
      price: 'от 4 615 000 ₽',
      characteristics: { power: '115 л.с.', petrol: '5.3 л/км', speed: '189 км/ч', sec: '10,3 c.' },
    },
    {
      active: false,
      price: 'от 5 615 000 ₽',
      characteristics: { power: '115 л.с.', petrol: '5.3 л/км', speed: '189 км/ч', sec: '10,3 c.' },
    },
    {
      active: false,
      price: 'от 6 615 000 ₽',
      characteristics: { power: '115 л.с.', petrol: '5.3 л/км', speed: '189 км/ч', sec: '10,3 c.' },
    },
  ]);

  const dispatch = useDispatch();

  function addCarSelect(item: IItemCar, index: number) {
    listItem.forEach((el, i) => {
      if (index === i && el.active !== true) {
        dispatch(addCar(item));
        setListItem(
          listItem.map((el, i) => {
            if (index === i) {
              return { ...el, active: true };
            }
            return el;
          }),
        );
      }

      if (index === i && el.active === true) {
        dispatch(removeCar());
        setListItem(
          listItem.map((el, i) => {
            if (index === i) {
              return { ...el, active: false };
            }
            return el;
          }),
        );
      }
    });
  }

  function showMore() {
    setListItem(listItem.concat(listItem.slice(0, 6)));
  }

  return (
    <section className={s.section}>
      <h2>Автомобили в наличии с ПТС</h2>
      <div className={s.wrapper__items}>
        {listItem.map((el, i) => {
          return (
            <div key={i} className={s.item}>
              <div className={s.item__svg}>
                <Heart
                  addCarSelect={() => addCarSelect(el, i)}
                  active={el.active}
                  width="18"
                  height="16"
                />
                <Diagram height="16" />
              </div>
              <div className={s.fon}>
                <img src={car} alt="skoda" />
              </div>
              <h3>Skoda Octavia 1.6 MPI MT Active </h3>

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
        })}
      </div>
      <div className={s.btn__showMore}>
        <Button click={showMore} title="Показать  еще" />
      </div>
    </section>
  );
}
