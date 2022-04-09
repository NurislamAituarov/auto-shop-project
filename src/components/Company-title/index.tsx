import s from './CompanyTitle.module.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { Tag } from '../Tag';

interface IProps {
  title: string;
  favorites?: number;
}

export function CompanyTitle({ title, favorites }: IProps) {
  return (
    <>
      <div className={s.company__sub}>
        <NavLink to="/">
          <p onClick={() => localStorage.setItem('active', 'Подбор авто')}>Главная /</p>
        </NavLink>
        <p>{title}</p>
      </div>
      <div className={cn({ [s.favorites]: favorites })}>
        <h1>{title}</h1>
        {!!favorites && favorites > 0 && (
          <>
            <Tag title={`Новые авто ${favorites}`} size="m" />
            <Tag title="С пробегом 0" size="m" />
            <Tag title="Такси 0" size="m" />
            <p className={s.favorites__info}>
              В избранном <span>{favorites} авто</span>
            </p>
          </>
        )}
      </div>

      <hr className={s.hr} />
    </>
  );
}
