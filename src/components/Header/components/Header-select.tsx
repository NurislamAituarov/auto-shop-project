import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Down } from '../../Svg';
import '../HeaderSelect.scss';

interface IHeaderSelect {
  title: string;
  setTrigger?: (v: boolean) => void;
  refInput?: any;
}

export function HeaderSelect({ title, setTrigger, refInput }: IHeaderSelect) {
  const [size, setSize] = useState(false);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth <= 768) {
        setSize(true);
      } else {
        setSize(false);
      }
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  function createHref(title: string) {
    switch (title) {
      case 'Кредит и рассрочка':
        return '#Application';
      case 'Спецпредложения':
        return '#SpecialOffers';
      case 'Авто с пробегом':
        return '#CarAvailable';
      default:
        return '#';
    }
  }

  function onClick() {
    setTrigger && setTrigger(false);
    if (refInput) {
      refInput.current.checked = false;
    }
  }

  return (
    <>
      {title !== 'Такси в кредит' ? (
        <div className="header__select_item flex">
          {size && <Down />}
          <a href={`${createHref(title)}`}>
            <h3>{title}</h3>
          </a>
          {!size && <Down />}
        </div>
      ) : (
        <div className="header__select_item header__select_link flex">
          <NavLink to="auto-shop-project/taxi">
            <h3 onClick={onClick}>{title}</h3>
          </NavLink>
        </div>
      )}
    </>
  );
}
