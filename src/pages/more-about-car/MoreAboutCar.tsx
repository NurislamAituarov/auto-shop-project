import { useEffect, useMemo, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IItemCar } from '../../types';

import { getCarItem } from '../../api/services';
import { addCar } from '../../redux/actions';
import { Button } from '../../components/btn/Button';
import { BlockApplication } from './components/Block-application';
import { Advantageous } from './components/Advantageous';
import { Diagram, Heart } from '../../components/svg';
import { BlockItem } from './components/BlockItem';
import {
  characteristic1,
  characteristic2,
  eye,
  characteristic3,
  characteristic4,
  service1,
  service,
  service2,
} from '../../assets';
import s from './MoreAboutCar.module.scss';

export default function MoreAboutCar() {
  const [carItem, setCarItem] = useState<IItemCar>();
  const [resize, setResize] = useState(false);
  const services = useMemo(() => {
    return [
      { title: 'Рассрочка от ВТБ', subtitle: 'Рассрочка 0%', tag: 'Рассрочка', img: service },
      {
        title: 'Выгода по Trade-in',
        subtitle: 'Дополнительная выгода до 200 000 руб ',
        tag: 'Trade-in',
        img: service1,
      },
      { title: 'Первоначальный взнос 0%', subtitle: 'Кредит 1,9%', tag: 'Скидка', img: service2 },
    ];
  }, []);
  const { carId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    carId && getCarItem(carId).then((item) => setCarItem(item.data[0]));

    function onResize() {
      if (window.innerWidth <= 768) {
        setResize(true);
      } else {
        setResize(false);
      }
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  function addCarSelect(item: IItemCar, id: number) {
    const newItem = {
      ...item,
      active: item.active === 'false' ? true : 'false',
    };
    setCarItem(newItem);
    dispatch(addCar(id));
  }

  return (
    <section className={s.section__moreAboutCar}>
      <div className={s.title__nav}>
        <NavLink to="/">
          <p>Главная</p>
        </NavLink>
        <span>/ {carItem?.name_car}</span>
      </div>
      <div className={s.block__carItem}>
        {resize && (
          <div className={s.block__carItem_mobile}>
            <div>
              <h1>{carItem?.name_car}</h1>
              <div className={s.block__carItem_watching}>
                <img src={eye} alt="eye" />
                <p>Автомобиль сейчас смотрит 2 человека</p>
              </div>
            </div>
            <p className={s.block__carItem_price}>
              <strong>{carItem?.price}</strong>
              <span>В кредит от 12 000 ₽/мес</span>
            </p>
          </div>
        )}
        <div className={s.block__carItem_img}>
          <LazyLoadImage effect="blur" src={carItem?.url_img} alt="картинка авто" />
          <div className={s.block__carItem_selected}>
            <div className={s.selected__wrapper}>
              <Diagram />
            </div>
            <div className={s.selected__wrapper}>
              <Heart
                addCarSelect={() => carItem && addCarSelect(carItem, carItem.id)}
                active={carItem?.active}
              />
            </div>
          </div>
        </div>
        <div className={s.block__carItem_info}>
          {!resize && (
            <>
              <h1>{carItem?.name_car}</h1>
              <div className={s.block__carItem_watching}>
                <img src={eye} alt="eye" />
                <p>Автомобиль сейчас смотрит 2 человека</p>
              </div>
            </>
          )}

          <div className={s.block__carItem_characteristics}>
            <div className={s.characteristics__item}>
              <img src={characteristic1} alt="" />
              <p>{carItem?.characteristics.petrol}</p>
            </div>
            <div className={s.characteristics__item}>
              <img src={characteristic2} alt="" />
              <p>{carItem?.characteristics.power}</p>
            </div>
            <div className={s.characteristics__item}>
              <img src={characteristic3} alt="" />
              <p>Механика</p>
            </div>
            <div className={s.characteristics__item}>
              <img src={characteristic4} alt="" />
              <p>Передний</p>
            </div>
          </div>

          {!resize && (
            <p className={s.block__carItem_price}>
              <strong>{carItem?.price}</strong>
              <span>
                В кредит <br />
                от 12 000 ₽/мес
              </span>
            </p>
          )}

          <div className={s.block__carItem_btns}>
            <Button title="Забронировать онлайн" />
            <Button title="Купить в кредит" />
          </div>

          <div className={s.block__carItem_additionally}>
            <div className={s.additionally__blockL}>
              <div className={s.additionally__block_item}>
                <div>
                  <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.533956 11.2391C0.415224 10.21 0.514168 9.21666 0.783294 8.29846C1.67774 5.24704 4.48378 3.003 7.81225 2.96342V0.96872C7.81225 0.857903 7.95077 0.798537 8.0418 0.865818L12.146 3.88162C12.2133 3.93307 12.2133 4.03597 12.146 4.08346L8.04575 7.09926C7.95077 7.16655 7.81621 7.10718 7.81621 6.99636V5.00562C5.62757 5.04124 3.75952 6.39083 2.9561 8.29846C2.65135 9.01877 2.497 9.81428 2.54053 10.6494C2.5999 11.7971 3.03129 12.8538 3.71202 13.7087C4.07614 14.1638 3.98907 14.8287 3.51809 15.1731C3.07087 15.5016 2.44555 15.4105 2.10122 14.9752C1.25822 13.9224 0.696224 12.6401 0.533956 11.2391ZM12.3834 7.40797C13.0681 8.25888 13.4995 9.31956 13.5549 10.4673C13.5985 11.3063 13.4402 12.1019 13.1394 12.8182C12.3359 14.7258 10.4679 16.0794 8.27926 16.111V14.1203C8.27926 14.0095 8.14074 13.9501 8.04971 14.0174L3.94553 17.0332C3.87825 17.0847 3.87825 17.1876 3.94553 17.235L8.04575 20.2508C8.14074 20.3181 8.2753 20.2588 8.2753 20.1479V18.1532C11.6038 18.1176 14.4138 15.8736 15.3043 12.8182C15.5734 11.9 15.6684 10.9066 15.5536 9.8776C15.3953 8.47656 14.8333 7.19425 13.9903 6.14149C13.642 5.70614 13.0206 5.61511 12.5734 5.9436C12.1064 6.28793 12.0193 6.95283 12.3834 7.40797Z"
                      fill="#CA0100"
                    />
                  </svg>
                </div>
                <p>Зачёт вашего авто в trade-in</p>
              </div>
              <div className={s.additionally__block_item}>
                <div>
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.69886 9.74403C3.48991 9.74403 2.52432 9.33317 1.80209 8.51147C1.07986 7.68976 0.71875 6.57348 0.71875 5.16263C0.71875 3.76728 1.07986 2.65876 1.80209 1.83705C2.52432 1.01534 3.48991 0.604492 4.69886 0.604492C5.90781 0.604492 6.8734 1.01534 7.59562 1.83705C8.31785 2.65876 8.67897 3.76728 8.67897 5.16263C8.67897 6.57348 8.31785 7.68976 7.59562 8.51147C6.8734 9.33317 5.90781 9.74403 4.69886 9.74403ZM14.0486 0.744027H16.4743L5.97061 17.2557H3.54486L14.0486 0.744027ZM4.69886 7.74403C5.7508 7.74403 6.27677 6.88356 6.27677 5.16263C6.27677 3.4572 5.7508 2.60449 4.69886 2.60449C3.64692 2.60449 3.12095 3.4572 3.12095 5.16263C3.12095 6.88356 3.64692 7.74403 4.69886 7.74403ZM15.2968 17.3952C14.0721 17.3952 13.0987 16.9843 12.3765 16.1626C11.6542 15.3254 11.2931 14.2091 11.2931 12.8138C11.2931 11.4184 11.6542 10.3099 12.3765 9.48821C13.1144 8.66651 14.0878 8.25565 15.2968 8.25565C16.5057 8.25565 17.4713 8.66651 18.1935 9.48821C18.9158 10.3099 19.2769 11.4184 19.2769 12.8138C19.2769 14.2246 18.9158 15.3409 18.1935 16.1626C17.4713 16.9843 16.5057 17.3952 15.2968 17.3952ZM15.2968 15.3952C16.3487 15.3952 16.8747 14.5347 16.8747 12.8138C16.8747 11.1084 16.3487 10.2557 15.2968 10.2557C14.2291 10.2557 13.6953 11.1084 13.6953 12.8138C13.6953 14.5347 14.2291 15.3952 15.2968 15.3952Z"
                      fill="#CA0100"
                    />
                  </svg>
                </div>
                <p>Беспроцентная рассрочка 0%</p>
              </div>
              <div className={s.additionally__block_item}>
                <div>
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.84375 9.54932V16.2743C1.84375 16.893 2.347 17.3951 2.96457 17.3951H8.56869V9.54932H1.84375Z"
                      fill="#CA0100"
                    />
                    <path
                      d="M17.5311 5.06621H13.9848C14.2393 4.89248 14.4578 4.71988 14.6102 4.5652C15.5147 3.65622 15.5147 2.17673 14.6102 1.26774C13.7315 0.382289 12.2005 0.384531 11.3229 1.26774C10.8364 1.7553 9.54748 3.74028 9.72569 5.06621H9.64499C9.82208 3.74028 8.53313 1.7553 8.04782 1.26774C7.16909 0.384531 5.63805 0.384531 4.76044 1.26774C3.85706 2.17673 3.85706 3.65622 4.75932 4.5652C4.91287 4.71988 5.13143 4.89248 5.38586 5.06621H1.83957C1.222 5.06621 0.71875 5.56946 0.71875 6.18704V7.86827C0.71875 8.17762 0.969815 8.42868 1.27916 8.42868H8.56452V6.18704H10.8062V8.42868H18.0915C18.4009 8.42868 18.6519 8.17762 18.6519 7.86827V6.18704C18.6519 5.56946 18.1498 5.06621 17.5311 5.06621ZM8.49839 5.02923C8.49839 5.02923 8.45131 5.06621 8.29104 5.06621C7.51655 5.06621 6.03818 4.26146 5.55511 3.77502C5.08548 3.30204 5.08548 2.53091 5.55511 2.05792C5.78263 1.82927 6.08413 1.70374 6.40469 1.70374C6.72412 1.70374 7.02563 1.82927 7.25315 2.05792C8.00859 2.81784 8.75954 4.75911 8.49839 5.02923ZM11.0785 5.06621C10.9194 5.06621 10.8723 5.03035 10.8723 5.02923C10.6111 4.75911 11.3621 2.81784 12.1175 2.05792C12.5692 1.60175 13.3594 1.5995 13.8156 2.05792C14.2863 2.53091 14.2863 3.30204 13.8156 3.77502C13.3325 4.26146 11.8541 5.06621 11.0785 5.06621Z"
                      fill="#CA0100"
                    />
                    <path
                      d="M10.8047 9.54932V17.3951H16.4088C17.0275 17.3951 17.5296 16.893 17.5296 16.2743V9.54932H10.8047Z"
                      fill="#CA0100"
                    />
                  </svg>
                </div>
                <p>Доп. выгода до 200 000 ₽</p>
              </div>
            </div>
            <div className={s.additionally__blockR}>
              <p>
                Привод: <strong>передний</strong>
              </p>
              <p>
                Кузов: <strong>седан</strong>
              </p>
              <p>
                Год:
                <strong> 2013</strong>
              </p>
              <p>
                Пробег: <strong>1000 км</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.block__services}>
        {services.map((el, i) => {
          return <BlockItem key={i} i={i} el={el} />;
        })}
      </div>
      <BlockApplication />
      <Advantageous name={carItem?.name_car} />
    </section>
  );
}
