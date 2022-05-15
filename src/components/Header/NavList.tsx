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
        return 'auto-shop-project/about-company';
      case 'Техцентр':
        return 'auto-shop-project/technical-center';
      case 'Отзывы':
        return 'auto-shop-project/reviews';
      case 'Контакты':
        return 'auto-shop-project/contacts';
      default:
        return 'auto-shop-project';
    }
  }

  return (
    <NavLink
      onClick={() => {
        setActiveClass(el);
        localStorage.setItem('active', el);
        setTrigger(false);
        if (refInput) {
          refInput.current.checked = false;
        }
      }}
      to={route()}
      className={cn({ active_: el === activeClass })}>
      <li>{el}</li>
    </NavLink>
  );
}
