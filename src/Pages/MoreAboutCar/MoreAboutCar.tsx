import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IItemCar } from '../../Type';
import s from './MoreAboutCar.module.scss';

import { getCarItem } from '../../Api/client';
import { addCar } from '../../Actions/action';
import { Button } from '../../components/Btn/Button';
import { BlockApplication } from './components/Block-application';
import { Advantageous } from './components/Advantageous';

import eye from '../../Assets/Svg/eye-open.svg';
import characteristic1 from '../../Assets/Svg/characteristic1.svg';
import characteristic2 from '../../Assets/Svg/characteristic2.svg';
import characteristic3 from '../../Assets/Svg/characteristic3.svg';
import characteristic4 from '../../Assets/Svg/characteristic4.svg';
import { Diagram, Heart } from '../../components/Svg';
import service from '../../Images/beautiful-girl.png';
import service1 from '../../Images/couple.png';
import service2 from '../../Images/studio-shot.png';

const services = [
  { title: 'Рассрочка от ВТБ', subtitle: 'Рассрочка 0%', tag: 'Рассрочка', img: service },
  {
    title: 'Выгода по Trade-in',
    subtitle: 'Дополнительная выгода до 200 000 руб ',
    tag: 'Trade-in',
    img: service1,
  },
  { title: 'Первоначальный взнос 0%', subtitle: 'Кредит 1,9%', tag: 'Скидка', img: service2 },
];

export default function MoreAboutCar() {
  const [carItem, setCarItem] = useState<IItemCar>();
  const [resize, setResize] = useState(false);
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
          return (
            <div key={i} className={s.block__services_item}>
              <LazyLoadImage effect="blur" src={el.img} alt={el.title} />
              <div className={s.block__services_info}>
                <div className={s.titleWrapper}>
                  <div>{getSvg(i)}</div>
                  <h5>{el.title}</h5>
                </div>
                <p>{el.subtitle}</p>
                <div className={s.tagWrapper}>{el.tag}</div>
              </div>
            </div>
          );
        })}
      </div>
      <BlockApplication />

      <Advantageous name={carItem?.name_car} />
    </section>
  );
}

function getSvg(id: number) {
  switch (id) {
    case 1:
      return (
        <svg
          width="16"
          height="21"
          viewBox="0 0 16 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.533956 11.2391C0.415224 10.21 0.514168 9.21666 0.783294 8.29846C1.67774 5.24704 4.48378 3.003 7.81225 2.96342V0.96872C7.81225 0.857903 7.95077 0.798537 8.0418 0.865818L12.146 3.88162C12.2133 3.93307 12.2133 4.03597 12.146 4.08346L8.04575 7.09926C7.95077 7.16655 7.81621 7.10718 7.81621 6.99636V5.00562C5.62757 5.04124 3.75952 6.39083 2.9561 8.29846C2.65135 9.01877 2.497 9.81428 2.54053 10.6494C2.5999 11.7971 3.03129 12.8538 3.71202 13.7087C4.07614 14.1638 3.98907 14.8287 3.51809 15.1731C3.07087 15.5016 2.44555 15.4105 2.10122 14.9752C1.25822 13.9224 0.696224 12.6401 0.533956 11.2391ZM12.3834 7.40797C13.0681 8.25888 13.4995 9.31956 13.5549 10.4673C13.5985 11.3063 13.4402 12.1019 13.1394 12.8182C12.3359 14.7258 10.4679 16.0794 8.27926 16.111V14.1203C8.27926 14.0095 8.14074 13.9501 8.04971 14.0174L3.94553 17.0332C3.87825 17.0847 3.87825 17.1876 3.94553 17.235L8.04575 20.2508C8.14074 20.3181 8.2753 20.2588 8.2753 20.1479V18.1532C11.6038 18.1176 14.4138 15.8736 15.3043 12.8182C15.5734 11.9 15.6684 10.9066 15.5536 9.8776C15.3953 8.47656 14.8333 7.19425 13.9903 6.14149C13.642 5.70614 13.0206 5.61511 12.5734 5.9436C12.1064 6.28793 12.0193 6.95283 12.3834 7.40797Z"
            fill="white"
          />
        </svg>
      );
    case 2:
      return (
        <svg
          width="14"
          height="14"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.69886 9.74403C3.48991 9.74403 2.52432 9.33317 1.80209 8.51147C1.07986 7.68976 0.71875 6.57348 0.71875 5.16263C0.71875 3.76728 1.07986 2.65876 1.80209 1.83705C2.52432 1.01534 3.48991 0.604492 4.69886 0.604492C5.90781 0.604492 6.8734 1.01534 7.59562 1.83705C8.31785 2.65876 8.67897 3.76728 8.67897 5.16263C8.67897 6.57348 8.31785 7.68976 7.59562 8.51147C6.8734 9.33317 5.90781 9.74403 4.69886 9.74403ZM14.0486 0.744027H16.4743L5.97061 17.2557H3.54486L14.0486 0.744027ZM4.69886 7.74403C5.7508 7.74403 6.27677 6.88356 6.27677 5.16263C6.27677 3.4572 5.7508 2.60449 4.69886 2.60449C3.64692 2.60449 3.12095 3.4572 3.12095 5.16263C3.12095 6.88356 3.64692 7.74403 4.69886 7.74403ZM15.2968 17.3952C14.0721 17.3952 13.0987 16.9843 12.3765 16.1626C11.6542 15.3254 11.2931 14.2091 11.2931 12.8138C11.2931 11.4184 11.6542 10.3099 12.3765 9.48821C13.1144 8.66651 14.0878 8.25565 15.2968 8.25565C16.5057 8.25565 17.4713 8.66651 18.1935 9.48821C18.9158 10.3099 19.2769 11.4184 19.2769 12.8138C19.2769 14.2246 18.9158 15.3409 18.1935 16.1626C17.4713 16.9843 16.5057 17.3952 15.2968 17.3952ZM15.2968 15.3952C16.3487 15.3952 16.8747 14.5347 16.8747 12.8138C16.8747 11.1084 16.3487 10.2557 15.2968 10.2557C14.2291 10.2557 13.6953 11.1084 13.6953 12.8138C13.6953 14.5347 14.2291 15.3952 15.2968 15.3952Z"
            fill="white"
          />
        </svg>
      );
    case 0:
      return (
        <svg
          width="26"
          height="9"
          viewBox="0 0 26 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.76649 0L1.32459 1.16812H7.44831L7.89021 0H1.76649ZM1.1035 1.75192L0.661606 2.91977H6.78532L7.22722 1.75192H1.1035ZM0.441898 3.50383L0 4.67169H6.12372L6.56534 3.50383H0.441898Z"
            fill="#009FDF"
          />
          <mask
            id="mask0_1565_26943"
            // style="mask-type:alpha"
            maskUnits="userSpaceOnUse"
            x="9"
            y="1"
            width="17"
            height="8">
            <path d="M9.1875 8.92989H25.9505V1.77441H9.1875V8.92989Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1565_26943)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.0186 5.11687V5.14152C13.2985 5.24065 13.5658 5.41399 13.7059 5.5253C14.1386 5.87198 14.3296 6.32997 14.3296 6.9242C14.3296 7.90248 13.795 8.60802 12.9167 8.83092C12.6494 8.90514 12.3695 8.93005 11.8474 8.93005H9.1875V1.77441H11.5422C12.0259 1.77441 12.3567 1.79906 12.6494 1.87327C13.5023 2.09617 14.0623 2.66575 14.0623 3.56928C14.0623 4.05219 13.8841 4.46089 13.5914 4.73309C13.4641 4.85686 13.2859 5.00556 13.0186 5.11687ZM10.6639 5.87198V7.75379H11.6823C11.9875 7.75379 12.2676 7.72914 12.4714 7.54334C12.675 7.35755 12.7641 7.12245 12.7641 6.81288C12.7641 6.57779 12.7003 6.35489 12.5731 6.19401C12.3567 5.934 12.0894 5.87198 11.6313 5.87198H10.6639ZM10.6511 4.63396H11.4784C11.7329 4.63396 11.8602 4.63396 11.9875 4.59686C12.3314 4.49773 12.5477 4.20089 12.5477 3.79218C12.5477 3.30954 12.3185 3.09883 11.9875 2.99997C11.8474 2.96287 11.7076 2.95041 11.4275 2.95041H10.6511V4.63396ZM16.5442 8.93005V2.97506H14.4187V1.77441H20.3247L19.9047 2.97506H18.0207V8.93005H16.5442ZM20.7827 8.93005V1.77441H25.5687L25.1488 2.97506H22.2466V4.55975H23.4304C24.385 4.55975 24.8815 4.78265 25.2251 5.06731C25.4924 5.29021 25.9505 5.78531 25.9505 6.76359C25.9505 7.72914 25.4796 8.26134 25.085 8.53381C24.6269 8.84311 24.1432 8.93005 23.1631 8.93005H20.7827ZM22.2466 7.72914H23.3541C23.774 7.72914 24.0285 7.63001 24.2067 7.40711C24.2958 7.29579 24.4231 7.09754 24.4231 6.72621C24.4231 6.35489 24.2958 6.09488 24.0413 5.90908C23.8887 5.79777 23.6849 5.73602 23.3413 5.73602H22.2466V7.72914Z"
              fill="white"
            />
          </g>
        </svg>
      );
    default:
      return;
  }
}
