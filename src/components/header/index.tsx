import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Header.scss';

import { TitleInfo } from './components/TitleInfo';
import { HeaderNav } from './HeaderNav';
import { HeaderSelect } from './components/HeaderSelect';
import { HeaderSelectSVG } from './components/HeaderSelectSVG';
import { BackCall } from '../back-call/BackCall';
import { addCarListItemsAsync, fetchUserLocation } from '../../redux/actions';
import { useAppSelector } from '../../hooks/Hooks';
import { carOptions, navMenuItems } from '../../lib/constants';
import { useLocation } from 'react-router-dom';

const text: string[] = [
  'Страна, Город, 38КМ МКАД, 6Бс1',
  'Время работы: c 08:00 до 21:00',
  'Whatsapp',
];

const Header = memo(({ refHeader }: any) => {
  const locationAddress = useAppSelector((state) => state.reducer.location);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [activeClass, setActiveClass] = useState(localStorage.getItem('active') || 'Подбор авто');
  const [size, setSize] = useState('desktop');
  const [arrTitle, setArrTitle] = useState(text);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.length <= 2) {
      setActiveClass('Подбор авто');
    }

    const regex = /\btaxi\b/;
    if (regex.test(location.pathname)) setActiveClass('');
  }, [location]);

  useEffect(() => {
    // dispatch(fetchUserLocation());
    dispatch(addCarListItemsAsync());

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
        size={size}
        setActiveClass={setActiveClass}
        activeClass={activeClass}
        isOpenMenu={isOpenMenu}
        setIsOpenMenu={setIsOpenMenu}
      />

      <div className="header__select flex">
        {carOptions.map((el, i) => {
          return <HeaderSelect key={i} title={el} setIsOpenMenu={setIsOpenMenu} />;
        })}
        <HeaderSelectSVG />
      </div>
    </header>
  );
});

export default Header;
