import './Tag.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

interface ITag {
  title: string;
  size?: string;
  link?: string;
}

export function Tag({ title, size = 's', link = '' }: ITag) {
  return (
    <NavLink to={link}>
      <span
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
