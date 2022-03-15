import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface IPropsNav {
  activeClass: string;
  setActiveClass: (string: string) => void;
  el: string;
}

export function NavList({ activeClass, setActiveClass, el }: IPropsNav) {
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
        return '';
    }
  }

  return (
    <NavLink
      to={route()}
      onClick={() => {
        setActiveClass(el);
        localStorage.setItem('active', el);
      }}
      className={cn({ active_: el === activeClass })}>
      <li>{el}</li>
    </NavLink>
  );
}
