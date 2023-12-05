import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Header.scss';

import { TitleInfo } from './components/TitleInfo';
import { HeaderNav } from './HeaderNav';
import { HeaderSelect } from './components/Header-select';
import { HeaderSelectSVG } from './components/HeaderSelectSVG';
import { BackCall } from '../back-call/BackCall';
import { addListItem, location } from '../../redux/actions';
import { useAppSelector } from '../../hooks/Hooks';
import { carOptions, listMenu } from '../../lib/constants';

const text: string[] = [
  'Страна, Город, 38КМ МКАД, 6Бс1',
  'Время работы: c 08:00 до 21:00',
  'Whatsapp',
];

const Header = memo(({ refHeader }: any) => {
  const locationAddress = useAppSelector((state) => state.reducer.location);
  const [activeClass, setActiveClass] = useState(localStorage.getItem('active') || 'Подбор авто');
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
        setActiveClass={setActiveClass}
        activeClass={activeClass}
      />

      <div className="header__select flex">
        {carOptions.map((el, i) => {
          return <HeaderSelect key={i} title={el} setActiveClass={setActiveClass} />;
        })}
        <HeaderSelectSVG />
      </div>
    </header>
  );
});

export default Header;
