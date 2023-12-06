import { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Down } from '../../svg';
import { scrollContext } from '../../../lib/context';
import '../HeaderSelect.scss';

interface IHeaderSelect {
  title: string;
  setTrigger?: (v: boolean) => void;
  refInput?: any;
  setActiveClass: (value: string) => void;
  setIsOpenMenu: (value: boolean) => void;
}

export function HeaderSelect({
  title,
  setTrigger,
  refInput,
  setActiveClass,
  setIsOpenMenu,
}: IHeaderSelect) {
  const [size, setSize] = useState(false);
  const scrollContextData = useContext(scrollContext);
  const navigate = useNavigate();
  const currentUrl = window.location;

  useEffect(() => {
    function onResize() {
      if (window.innerWidth <= 938) {
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
    if (currentUrl.hash.length > 2) {
      navigate('/', { replace: false });
      localStorage.setItem('active', 'Подбор авто');
      setActiveClass('Подбор авто');
      transitionFromAnotherPage(title);
    } else {
      if (scrollContextData) {
        const { refCarAvailable, refSpecialOffers, refApplication, refQuickSelection } =
          scrollContextData;
        switch (title) {
          case 'Каталог авто':
            return refQuickSelection;
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
    }
  }

  function transitionFromAnotherPage(title: string) {
    setTimeout(() => {
      scrollContextData?.scrollToSection(createHref(title));
    }, 500);
  }

  function followTheAnchor() {
    scrollContextData?.scrollToSection(createHref(title));
  }

  function openPage() {
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
          <h3 onClick={followTheAnchor}>{title}</h3>
          {!size && <Down />}
        </div>
      ) : (
        <div className="header__select_item header__select_link flex">
          <NavLink to="/taxi">
            <h3 onClick={openPage}>{title}</h3>
          </NavLink>
        </div>
      )}
    </>
  );
}
