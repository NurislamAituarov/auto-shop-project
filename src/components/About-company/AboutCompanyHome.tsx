import s from './AboutCompanyHome.module.scss';
import cn from 'classnames';
import { useRef, useState } from 'react';

import { DirectionButtons } from '../Direction-btn/DirectionButtons';
import { onNext, onPrev } from '../../Hooks/direction';
import { sum6 } from '../../Hooks/useCustomCounter';

import blog from '../../Images/blog.png';
import company from '../../Images/company-img.png';
import play from '../Svg/play.svg';

const blogList = [
  { date: '25 октября', title: 'Тест Skoda Karoq Scout - городской карлик или настоящий скаут' },
  { date: '05 ноября', title: 'Тест Skoda Karoq Scout - городской карлик или настоящий скаут' },
  { date: '13 сентебря', title: 'Тест Skoda Karoq Scout - городской карлик или настоящий скаут' },
  { date: '06 июля', title: 'Тест Skoda Karoq Scout - городской карлик или настоящий скаут' },
  { date: '30 марта', title: 'Тест Skoda Karoq Scout - городской карлик или настоящий скаут' },
  { date: '18 апреля', title: 'Тест Skoda Karoq Scout - городской карлик или настоящий скаут' },
];
const linkList = ['Автосалон', 'Трейд-ин', 'Покупка'];

export default function AboutCompanyHome() {
  const [active, setActive] = useState('Автосалон');
  const refBlock = useRef<(HTMLDivElement | any)[]>([]);

  return (
    <section className={s.section}>
      <h2>О компании</h2>
      <p className={s.subtitle}>
        Мы располагаем огромной торговой площадкой более 5000 квадратных метров, у нас в наличии не
        менее 200 автомобилей как отечественного, так и иностранного производства. В штате
        автосалона «Альтера» работают настоящие профессионалы, которые знают особенности каждого
        конкретного автомобиля.
      </p>
      <div className={s.img}>
        <img className={s.img__fon} src={company} alt="фото компаний" />
        <img className={s.img__play} src={play} alt="play" />
      </div>

      <div className={s.direction}>
        <DirectionButtons
          title="Блог"
          subtitle="Все статьи"
          onPrev={() => onPrev('Блог', refBlock, sum6)}
          onNext={() => onNext('Блог', refBlock, sum6)}
        />
      </div>
      <div className={s.blog}>
        <div className={s.blog__wrapper}>
          {blogList.map((el, i) => {
            return (
              <div ref={(el) => (refBlock.current[i] = el)} className={s.blog__item} key={i}>
                <img src={blog} alt="blog" />
                <span>{el.date}</span>
                <p>{el.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={s.aboutTheAutoShop}>
        <div className={s.aboutTheAutoShop__link}>
          {linkList.map((el, i) => {
            return (
              <p
                onClick={() => setActive(el)}
                className={cn({ [s.active]: active === el })}
                tabIndex={0}
                key={i}>
                {el}
              </p>
            );
          })}
        </div>
        <div className={s.aboutTheAutoShop__title}>
          <h2>Об автосалоне ABC</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor
            tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin
            dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula
            justo. Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet
            vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet
            vel, rhoncus nec sem. Phasellus at mollis magna, in bibendum massa. Praesent malesuada
            sit amet nibh ut vestibulum. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Nulla iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra
            faucibus. Phasellus id enim libero.
          </p>
        </div>
      </div>
    </section>
  );
}
