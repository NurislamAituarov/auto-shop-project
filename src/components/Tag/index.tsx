import './Tag.scss';
import cn from 'classnames';

interface ITag {
  title: string;
  size?: string;
}

export function Tag({ title, size = 's' }: ITag) {
  return <span className={cn('tag', { s: size === 's', m: size === 'm' })}>{title}</span>;
}
