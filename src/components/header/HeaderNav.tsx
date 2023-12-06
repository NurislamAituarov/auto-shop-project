import { useRef } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import { HeaderSelectSVG } from './components/HeaderSelectSVG';
import { NavList } from './components/NavList';
import { Hamburger } from '../hamburger /Hamburger';
import { Button } from '../btn/Button';
import { Phone } from '../svg';
import { Tag } from '../tag';
import { addPopUpBackCall } from '../../redux/actions';
import { navMenuItems } from '../../lib/constants';

interface IHeaderNav {
  size: string;
  setActiveClass: (value: string) => void;
  activeClass: string;
  setIsOpenMenu: (value: boolean) => void;
  isOpenMenu: boolean;
}

export function HeaderNav({
  size,
  activeClass,
  setActiveClass,
  setIsOpenMenu,
  isOpenMenu,
}: IHeaderNav) {
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
      <div ref={refHeaderNav} className={cn('header__nav flex ', { trigger: isOpenMenu })}>
        <Hamburger
          trigger={isOpenMenu}
          setTrigger={setIsOpenMenu}
          setActiveClass={setActiveClass}
          activeClass={activeClass}
          setIsOpenMenu={setIsOpenMenu}
        />
        <hr id="hr" />
        <p className="header__nav_subtitle">
          <Tag title="10 лет" link="/" /> превосходим ваши ожидания
        </p>
        <nav className="nav">
          <ul className="flex">
            {navMenuItems.map((el, i) => {
              return (
                <NavList
                  key={i}
                  el={el}
                  activeClass={activeClass}
                  setActiveClass={setActiveClass}
                  setTrigger={setIsOpenMenu}
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
