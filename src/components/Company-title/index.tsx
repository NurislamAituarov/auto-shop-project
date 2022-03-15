import s from './CompanyTitle.module.scss';
import { NavLink } from 'react-router-dom';

interface IProps {
  title: string;
}

export function CompanyTitle({ title }: IProps) {
  return (
    <>
      <div className={s.company__sub}>
        <NavLink to="/">
          <p onClick={() => localStorage.setItem('active', 'Подбор авто')}>Главная /</p>
        </NavLink>
        <p>{title}</p>
      </div>
      <h1>{title}</h1>
      <hr className={s.hr} />
    </>
  );
}
