import './Tag.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

interface ITag {
  title: string;
  size?: string;
  link?: string;
}

export function Tag({ title, size = 's', link = 'auto-shop-project' }: ITag) {
  return (
    <NavLink to={link}>
      <span
        onClick={() => localStorage.setItem('active', 'Подбор авто')}
        className={cn('tag', {
          s: size === 's',
          m: size === 'm',
          direction: size === 'direction',
        })}>
        {title}
      </span>
    </NavLink>
  );
}
