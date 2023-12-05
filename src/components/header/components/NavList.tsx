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
        return '/about-company';
      case 'Техцентр':
        return '/technical-center';
      case 'Отзывы':
        return '/reviews';
      case 'Контакты':
        return '/contacts';
      default:
        return '';
    }
  }

  function handleClick() {
    setActiveClass(el);
    localStorage.setItem('active', el);
    setTrigger(false);
    if (refInput) {
      refInput.current.checked = false;
    }
  }

  return (
    <NavLink onClick={handleClick} to={route()} className={cn({ active_: el === activeClass })}>
      <li>{el}</li>
    </NavLink>
  );
}
