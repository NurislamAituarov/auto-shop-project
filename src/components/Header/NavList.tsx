import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface IPropsNav {
  activeClass: string;
  setActiveClass: (string: string) => void;
  el: string;
  setTrigger: (v: boolean) => void;
  refInput?: any;
}

export function NavList({ activeClass, setActiveClass, el, setTrigger, refInput }: IPropsNav) {
  function route() {
    switch (el) {
      case 'О компании':
        return 'about-company';
      case 'Техцентр':
        return 'technical-center';
      case 'Отзывы':
        return 'reviews';
      case 'Контакты':
        return 'contacts';
      default:
        return 'auto-shop-project';
    }
  }

  return (
    <NavLink to={route()} className={cn({ active_: el === activeClass })}>
      <li
        onClick={() => {
          setActiveClass(el);
          localStorage.setItem('active', el);
          setTrigger(false);
          if (refInput) {
            refInput.current.checked = false;
          }
        }}>
        {el}
      </li>
    </NavLink>
  );
}
