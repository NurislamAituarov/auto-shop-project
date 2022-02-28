import { Hamburger } from '../Hamburger /Hamburger';
import { Logo, Whatsapp } from '../Svg';
import cn from 'classnames';
import { useRef, useState } from 'react';
import { Button } from '../Btn/Button';
import { HeaderSelectSVG } from './HeaderSelectSVG';
import { Tag } from '../Tag';

interface IHeaderNav {
  listMenu: string[];
  size: string;
}

export function HeaderNav({ listMenu, size }: IHeaderNav) {
  const [activeClass, setActiveClass] = useState(0);
  const refPhone = useRef<HTMLParagraphElement>(null);
  const refHeaderNav = useRef<HTMLHeadingElement>(null);

  function onMouse(event: string) {
    if (refPhone.current) {
      event !== 'leave'
        ? (refPhone.current.style.color = 'green')
        : (refPhone.current.style.color = '');
    }
  }

  return (
    <div ref={refHeaderNav} className="header__nav flex">
      <div className="header__nav_logo flex">
        <Hamburger />
        <Logo />
      </div>
      <hr />
      <p className="header__nav_subtitle">
        <Tag title="10 лет" /> превосходим ваши ожидания
      </p>
      <nav className="nav">
        <ul className="flex">
          {listMenu.map((el, i) => {
            return (
              <li
                onClick={() => setActiveClass(i)}
                className={cn({ ['active']: i === activeClass })}
                key={i}>
                {el}
              </li>
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
                <Whatsapp color="rgba(202, 1, 0, 1)" width="31" height="31" />
              </div>
              <p ref={refPhone}>+7 (800) 551-94-31</p>
            </div>
          ) : null}
          <span>+7 (495) 292-18-67</span>
        </div>
        {(size === 'normal' || size === 'mobile') && <HeaderSelectSVG width="15" height="15" />}
        <Button title="Обратный звонок" />
      </div>
    </div>
  );
}
