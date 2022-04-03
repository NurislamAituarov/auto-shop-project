import './Header.scss';
import { TitleInfo } from './TitleInfo';
import { HeaderNav } from './HeaderNav';
import { HeaderSelect } from './Header-select';
import { HeaderSelectSVG } from './HeaderSelectSVG';
import { BackCall } from '../BackCall/BackCall';
import { useEffect, useState } from 'react';

const text: string[] = [
  'Страна, Город, 38КМ МКАД, 6Бс1',
  'Время работы: c 08:00 до 21:00',
  'Whatsapp',
];
export const listMenu: string[] = ['Подбор авто', 'О компании', 'Техцентр', 'Отзывы', 'Контакты'];
export const listSelect: string[] = [
  'Каталог авто',
  'Авто с пробегом',
  'Кредит и рассрочка',
  'Спецпредложения',
  'Такси в кредит',
];

export default function Header() {
  const [size, setSize] = useState('desktop');
  const [arrTitle, setArrTitle] = useState(text);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSize('normal');
    }
    if (window.innerWidth > 768) {
      setSize('desktop');
    }
    if (window.innerWidth < 525) {
      setSize('mobile');
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setSize('normal');
      }
      if (window.innerWidth > 768) {
        setSize('desktop');
      }
      if (window.innerWidth < 525) {
        setSize('mobile');
      }
    });
  }, []);
  // useEffect(() => {
  //   const successfulLookup = (position: any) => {
  //     const { latitude, longitude } = position.coords;
  //     fetch(
  //       `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.REACT_APP_OPENCAGE_DATA_KEY}`,
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setArrTitle(arrTitle.splice(0, 1, data.results[0].formatted));
  //       });
  //   };
  //   navigator.geolocation.getCurrentPosition(successfulLookup, console.log);
  // }, [arrTitle]);

  return (
    <header className="header">
      {size === 'mobile' && <BackCall />}
      <div className="title_info flex">
        {text.map((el, i) => {
          return <TitleInfo key={i} text={el} index={i + 1} />;
        })}
      </div>

      <HeaderNav listMenu={listMenu} size={size} />

      <div className="header__select flex">
        {listSelect.map((el, i) => {
          return <HeaderSelect key={i} title={el} />;
        })}
        <HeaderSelectSVG />
      </div>
    </header>
  );
}
