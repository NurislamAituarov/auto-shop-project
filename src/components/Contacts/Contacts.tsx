import { CompanyTitle } from '../Company-title';
import { Phone } from '../Svg';
import address from '../Svg/address.svg';
import road from '../Svg/arrow-two-way-left-right.svg';
import map from '../../Images/map2.png';
import company_img from '../../Images/company-foto.png';
import s from './Contacts.module.scss';
import cn from 'classnames';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Contacts() {
  return (
    <section className={s.section}>
      <CompanyTitle title="Контакты" />

      <div className={s.block__connections}>
        <div className={s.block__connections_items}>
          <div className={s.wrapper__svg}>
            <Phone color="white" width={20} height={20} />
          </div>
          <div className={s.block__connections_title}>
            <h5>Телефон</h5>
            <p>+7 (800) 551-94-31</p>
            <p>+7 (495) 292-18-67</p>
          </div>
        </div>
        <div className={s.block__connections_items}>
          <div className={s.wrapper__svg}>
            <img src={address} alt="address" />
          </div>
          <div className={s.block__connections_title}>
            <h5>Адрес</h5>
            <p>Россия, Москва, 38КМ МКАД, 6Бс1</p>
            <p className={s.address}>GPS: 55.597068, 37.511805</p>
          </div>
        </div>
        <div className={s.block__connections_items}>
          <div className={s.wrapper__svg}>
            <img src={road} alt="road" />
          </div>
          <div className={cn(s.block__connections_title, s.road)}>
            <h5>Как проехать</h5>
            <p>от МКАД (внутренняя сторона)</p>
            <p>от МКАД (внешняя сторона)</p>
            <p>из области, из центра</p>
          </div>
        </div>
      </div>
      <div className={s.block__map}>
        <img src={map} alt="map" />
      </div>
      <div className={s.block__company}>
        <div className={s.block__company_title}>
          <h2>О Компании</h2>
          <p>
            Мы располагаем огромной торговой площадкой более 5000 квадратных метров, у нас в наличии
            не менее 200 автомобилей как отечественного, так и иностранного производства. В штате
            автосалона «Альтера» работают настоящие профессионалы, которые знают особенности каждого
            конкретного автомобиля.
          </p>
        </div>
        <div className={s.block__company_img}>
          <Carousel
            showArrows={false}
            showThumbs={false}
            autoPlay
            infiniteLoop
            showStatus={false}
            interval={5000}>
            {[1, 2, 3, 4].map((el) => {
              return (
                <div key={el}>
                  <LazyLoadImage effect="blur" src={company_img} alt="фото компании" />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
