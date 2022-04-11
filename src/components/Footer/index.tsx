import { listCarr } from '../Quick-selection';
import { Selected } from '../Quick-selection/Select';
import { Date, Phone } from '../Svg';
import s from './Footer.module.scss';
import watch from '../Svg/watch.svg';
import rating_all from '../Svg/rating_all.svg';
import { useAppSelector } from '../../Hooks/Hooks';
import { IItemCar } from '../../Type';

const navMenu = [
  'Каталог авто',
  'Авто с пробегом',
  'Кредит и рассрочка',
  'Спецпредложения',
  'Такси в кредит',
];

export default function Footer() {
  return (
    <footer className={s.container}>
      <nav className={s.footer__nav}>
        {navMenu.map((el) => {
          return <div key={el}>{el}</div>;
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
        <div className={s.footer__bottom_title}>
          <h2>© 2021 Автосалон "ABC AUTO". Официальный дилер</h2>
          <p>Политика конфиденциальности</p>
          <p>Пользовательское соглашение</p>
        </div>
        <p className={s.footer__bottom_subtitle}>
          Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно информационный
          характер и ни при каких условиях не является публичной офертой, определяемой положениями
          Статьи 437 Гражданского кодекса Российской Федерации.
        </p>
        <img src={rating_all} alt="" />
      </div>
    </footer>
  );
}

export function Contacts() {
  const location = useAppSelector<Array<IItemCar>>((state: any) => state.reducer.location);
  return (
    <div className={s.footer__catalog_contacts}>
      <h4>Контакты</h4>
      <div className={s.contact__phone}>
        <div>
          <Phone color="white" />
        </div>
        <div>
          <p>+7 (800) 551-94-31</p>
          <p>+7 (495) 292-18-67</p>
        </div>
      </div>
      <div className={s.contact__phone}>
        <div>
          <img src={watch} alt="date" />
        </div>
        <p>Ежедневно с 08:00 до 21:00</p>
      </div>
      <div className={s.contact__phone}>
        <div>
          <Date color="white" />
        </div>
        <div>
          {location ? <p>{location}</p> : <p>Страна, Город, 38КМ МКАД, 6Бс1</p>}
          <span>Схема проезда</span>
        </div>
      </div>

      <Selected title="Москва" items={['Aстана', 'Костанай']} width={306} />
    </div>
  );
}
