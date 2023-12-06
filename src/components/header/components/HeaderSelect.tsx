import { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Down } from '../../svg';
import { scrollContext } from '../../../lib/context';
import { createHref } from '../../../lib/helpers';
import '../HeaderSelect.scss';

interface IHeaderSelect {
  title: string;
  setTrigger?: (v: boolean) => void;
  refInput?: any;
  setIsOpenMenu: (value: boolean) => void;
}

export function HeaderSelect({ title, setTrigger, refInput, setIsOpenMenu }: IHeaderSelect) {
  const [size, setSize] = useState(false);
  const scrollContextData = useContext(scrollContext);
  const navigate = useNavigate();

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

  function followTheAnchor() {
    scrollContextData?.scrollToSection(createHref(title, navigate, scrollContextData));
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
