import s from './AboutCompanyHome.module.scss';
import cn from 'classnames';
import { useRef, useState } from 'react';

import { DirectionButtons } from '../Direction-btn/DirectionButtons';
import { onNext, onPrev } from '../../Hooks/direction';
import { sum6 } from '../../Hooks/useCustomCounter';

import blog from '../../Images/blog.png';
import company from '../../Images/company-img.png';
import play from '../Svg/play.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import BasicTabs from './ComponentAbout';

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
        <LazyLoadImage effect="blur" className={s.img__fon} src={company} alt="фото компаний" />
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
                <LazyLoadImage effect="blur" src={blog} alt="blog" />
                <span>{el.date}</span>
                <p>{el.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <BasicTabs />
    </section>
  );
}
