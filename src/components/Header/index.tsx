import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Header.scss';

import { TitleInfo } from './components/TitleInfo';
import { HeaderNav } from './HeaderNav';
import { HeaderSelect } from './components/Header-select';
import { HeaderSelectSVG } from './components/HeaderSelectSVG';
import { BackCall } from '../BackCall/BackCall';
import { addListItem, location } from '../../redux/actions/action';
import { useAppSelector } from '../../hooks/Hooks';

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

const Header = memo(({ refCarAvailable, refSpecialOffers, refApplication, refHeader }: any) => {
  const locationAddress = useAppSelector((state: any) => state.reducer.location);
  const [size, setSize] = useState('desktop');
  const [arrTitle, setArrTitle] = useState(text);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(location());
    dispatch(addListItem());

    function onResize() {
      if (window.innerWidth <= 938) {
        setSize('normal');
      }
      if (window.innerWidth > 938) {
        setSize('desktop');
      }
      if (window.innerWidth < 525) {
        setSize('mobile');
      }
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    locationAddress && setArrTitle(arrTitle.splice(0, 1, locationAddress));
  }, [locationAddress]);

  return (
    <header ref={refHeader} className="header">
      {size === 'mobile' && <BackCall />}

      <div className="title_info flex">
        {text.map((el, i) => {
          return <TitleInfo key={i} text={el} index={i + 1} />;
        })}
      </div>

      <HeaderNav
        listMenu={listMenu}
        size={size}
        refCarAvailable={refCarAvailable}
        refSpecialOffers={refSpecialOffers}
        refApplication={refApplication}
      />

      <div className="header__select flex">
        {listSelect.map((el, i) => {
          return (
            <HeaderSelect
              key={i}
              title={el}
              refCarAvailable={refCarAvailable}
              refSpecialOffers={refSpecialOffers}
              refApplication={refApplication}
            />
          );
        })}
        <HeaderSelectSVG />
      </div>
    </header>
  );
});

export default Header;
