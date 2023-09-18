import { useRef, useState } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import { Hamburger } from '../Hamburger /Hamburger';
import { Phone } from '../Svg';
import { Button } from '../Btn/Button';
import { HeaderSelectSVG } from './components/HeaderSelectSVG';
import { Tag } from '../Tag';
import { NavList } from './components/NavList';
import { addPopUpBackCall } from '../../Redux/Actions/action';

interface IHeaderNav {
  listMenu: string[];
  size: string;
  refCarAvailable: any;
  refSpecialOffers: any;
  refApplication: any;
}

export function HeaderNav({
  listMenu,
  size,
  refCarAvailable,
  refSpecialOffers,
  refApplication,
}: IHeaderNav) {
  const [activeClass, setActiveClass] = useState(localStorage.getItem('active') || 'Подбор авто');
  const [trigger, setTrigger] = useState(false);
  const refPhone = useRef<HTMLParagraphElement>(null);
  const refHeaderNav = useRef<HTMLHeadingElement>(null);
  const dispatch = useDispatch();

  function onMouse(event: string) {
    if (refPhone.current) {
      event !== 'leave'
        ? (refPhone.current.style.color = 'green')
        : (refPhone.current.style.color = '');
    }
  }

  return (
    <>
      <div ref={refHeaderNav} className={cn('header__nav flex ', { trigger: trigger })}>
        <Hamburger
          trigger={trigger}
          setTrigger={setTrigger}
          refCarAvailable={refCarAvailable}
          refSpecialOffers={refSpecialOffers}
          refApplication={refApplication}
        />
        <hr id="hr" />
        <p className="header__nav_subtitle">
          <Tag title="10 лет" link="/" /> превосходим ваши ожидания
        </p>
        <nav className="nav">
          <ul className="flex">
            {listMenu.map((el, i) => {
              return (
                <NavList
                  key={i}
                  el={el}
                  activeClass={activeClass}
                  setActiveClass={setActiveClass}
                  setTrigger={setTrigger}
                />
              );
            })}
          </ul>
        </nav>
        <div className="header__nav_contacts flex">
          <div
            style={
              size === 'desktop'
                ? { textAlign: 'end', marginLeft: '12px', marginRight: '24px' }
                : { margin: 0 }
            }>
            {size !== 'mobile' ? (
              <div className="phones flex">
                <div onMouseEnter={() => onMouse('enter')} onMouseLeave={() => onMouse('leave')}>
                  <Phone color="white" />
                </div>
                <p ref={refPhone}>
                  <a href="tel:+7 (705) 304-76-62">+7 (705) 304-76-62</a>
                </p>
              </div>
            ) : null}
            <span>+7 (495) 292-18-67</span>
          </div>
          {(size === 'normal' || size === 'mobile') && <HeaderSelectSVG width="15" height="15" />}
          <Button title="Обратный звонок" click={() => dispatch(addPopUpBackCall('back call'))} />
        </div>
      </div>
    </>
  );
}