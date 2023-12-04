import s from './AboutCompany.module.scss';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';

import { DirectionButtons } from '../../components/direction-btn/DirectionButtons';
import { add, reward } from '../../components/svg';
import { CarouselSlider } from '../../components/carousel/Carousel-Slider';
import { sum3 } from '../../hooks/useCustomCounter';
import { onNext, onPrev } from '../../hooks/direction';
import { CompanyTitle } from '../../components/company-title';
import Partners from '../../components/partners';
import { imgSalon, map } from '../../assets';

let list = `самые выгодные цены на автомобили в Москве; возможность выбора автомобилей более чем из
двухсот моделей различных цветов и комплектаций; приобретение автомобилей с пробегом,
прошедших предпродажную подготовку и юридическую экспертизу; быстрое и качественное
оформление документов; высокий уровень сервиса и индивидуальный подход; выгодное
приобретение автомобиля по программам Trade-in и утилизация; сотрудничество с самыми
крупными банками Москвы, предлагающими наиболее выгодные условия кредитования; возможность
участия в программах льготного кредитования «Семейный автомобиль», и «Первый автомобиль»,
а также льготное условия для медицинских работников и тех, кто сдает свой автомобиль по
программе Trade-in в счёт оплаты первоначального взноса; акции и подарки от автосалона при
покупке автомобиля.`;

const listBlock = [imgSalon, imgSalon, imgSalon, imgSalon, imgSalon, imgSalon];

export default function AboutCompany() {
  const refBlock = useRef<(HTMLDivElement | any)[]>([]);

  const newList = list.split(';');

  return (
    <section className={s.section}>
      <Helmet>
        <title>About Company</title>
        <meta name="description" content="О компании" />
      </Helmet>

      <CompanyTitle title="О компании" />

      <div className={s.company__title}>
        <p>
          Официальный дилер Азимут Варшавка предлагает широкий выбор автомобилей различных цветов и
          комплектаций на самых выгодных условиях. На территории автосалона представлено свыше
          двухсот новых автомобилей и с пробегом. Среди ассортимента представленных автомобилей
          встречаются наиболее популярные представители европейского, азиатского и российского
          производства. Для каждого клиента в нашем автосалоне предоставляется полная персональная
          консультация по любому из представленных автомобилей. Подробнее о представленных в салоне
          моделях Вы можете узнать на сайте и у наших менеджеров. <br /> <br />
          Выбирая автосалон Азимут Варшавка Вы получаете:
          <br /> <br />
        </p>
        <ul className={s.company__title_ul}>
          {newList.map((list, i) => {
            return <li key={i}>{list}</li>;
          })}
        </ul>
        <p>
          Все вопросы о наличии, цветах и комплектациях автомобилей, а также по работе автосалона Вы
          всегда можете узнать по телефону, указанному на сайте, а также при помощи формы обратной
          связи.
        </p>
        <br />
        <p>Мы ценим каждого клиента и гарантируем высокий уровень сервиса! </p>
        <br />
        <p>Азимут Варшавка — с нами Вам покорятся все направления!</p>
      </div>
      <DirectionButtons
        title="Фото автосалона"
        onPrev={() => onPrev('blok', refBlock, sum3)}
        onNext={() => onNext('blok', refBlock, sum3)}
      />
      <CarouselSlider refBlock={refBlock} listBlock={listBlock} className="company__carfoto" />
      <div className={s.company__map}>
        <div className={s.company__map_num}>
          <h2>12</h2>
          <p>Городов присутствия</p>
          <div className={s.company__map_amounts}>
            <div className={s.company__map_amount}>
              <div className={s.wrapper__svg}>
                <img src={add} alt="add" />
              </div>
              <p>
                1000 <br /> <span>работников</span>
              </p>
            </div>
            <div className={s.company__map_amount}>
              <div className={s.wrapper__svg}>
                <img src={reward} alt="reward" />
              </div>
              <p>
                20 лет <br /> <span>на рынке</span>
              </p>
            </div>
          </div>
        </div>

        <img className={s.company__map_foto} src={map} alt="map" />
      </div>
      <Partners />
    </section>
  );
}
