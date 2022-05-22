import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Down } from '../../Svg';
import '../HeaderSelect.scss';

interface IHeaderSelect {
  title: string;
  setTrigger?: (v: boolean) => void;
  refInput?: any;
  scrollToSection?: any;
  refCarAvailable?: any;
  refSpecialOffers?: any;
  refApplication?: any;
}

export function HeaderSelect({
  title,
  setTrigger,
  refInput,
  scrollToSection,
  refCarAvailable,
  refSpecialOffers,
  refApplication,
}: IHeaderSelect) {
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
        return refApplication;
      case 'Спецпредложения':
        return refSpecialOffers;
      case 'Авто с пробегом':
        return refCarAvailable;
      default:
        return '';
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
          <li onClick={() => scrollToSection(createHref(title))}>
            <h3>{title}</h3>
          </li>
          {!size && <Down />}
        </div>
      ) : (
        <div className="header__select_item header__select_link flex">
          <NavLink to="/taxi">
            <h3 onClick={onClick}>{title}</h3>
          </NavLink>
        </div>
      )}
    </>
  );
}
