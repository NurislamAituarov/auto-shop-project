import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { listCarr } from '../quick-selection/list-car';

import { Contacts } from './Contacts';
import { rating_all } from '../../assets';
import { carOptions } from '../../lib/constants';
import { scrollContext } from '../../lib/context';
import { createHref } from '../../lib/helpers';
import s from './Footer.module.scss';

export default function Footer() {
  const scrollContextData = useContext(scrollContext);
  const navigate = useNavigate();

  function followTheAnchor(title: string) {
    if (title === 'Такси в кредит') {
      navigate('/taxi', { replace: false });
      return;
    }

    scrollContextData?.scrollToSection(createHref(title, navigate, scrollContextData));
  }

  return (
    <footer className={s.container}>
      <div className={s.wrapper}>
        <nav className={s.footer__nav}>
          {carOptions.map((el) => {
            return (
              <div onClick={() => followTheAnchor(el)} key={el}>
                {el}
              </div>
            );
          })}
        </nav>
        <div className={s.hr}></div>
        <div className={s.footer__catalog}>
          <div className={s.footer__catalog_auto}>
            <div className={s.catalog_title}>
              <div className={s.catalog_title_main}>
                <h4>Каталог авто</h4>
                <p>Подробнее</p>
              </div>
              <p className={s.map}>Карта сайта</p>
            </div>
            <div className={s.catalog_list}>
              {listCarr.map((el, i) => {
                return (
                  <div key={i}>
                    <p>{el.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={s.footer__catalog_credit}>
            <h4>Кредит и рассрочка</h4>
            <p>Экспресс-кредит</p>
            <p>Семейный автомобиль</p>
            <p>Первый автомобиль</p>
            <p>Работникам медицины</p>
            <p>Рассрочка</p>
            <p> Trade-in</p>
          </div>
          <Contacts />
        </div>
        <div className={s.footer__bottom}>
          <div className={s['footer__bottom-wrapper']}>
            <div className={s.footer__bottom_title}>
              <h2>© 2021 Автосалон "ABC AUTO". Официальный дилер</h2>
              <p>Политика конфиденциальности</p>
              <p>Пользовательское соглашение</p>
            </div>
            <p className={s.footer__bottom_subtitle}>
              Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно
              информационный характер и ни при каких условиях не является публичной офертой,
              определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации.
            </p>
            <img src={rating_all} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
