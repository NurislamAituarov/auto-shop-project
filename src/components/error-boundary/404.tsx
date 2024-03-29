import { NavLink } from 'react-router-dom';
import './404.scss';

import { Button } from '../btn/Button';
import { error, fon, rio_new } from '../../assets';

export function Error() {
  return (
    <div className="wrapper__error">
      <img className="wrapper__error_fon" src={fon} alt="fon" />
      <nav>
        <ul className="flex">
          <li>Каталог авто </li>
          <li>Trade-in</li>
          <li>Экспресс кредит</li>
          <li>Контакты</li>
        </ul>
      </nav>
      <div className="wrapper__error_img">
        <img src={error} alt="ошибка" />
        <img src={rio_new} alt="rio" />
      </div>
      <div className="wrapper__error_title">
        <h1>Страница не найдена!</h1>
        <p>
          «Мы запустили новый сайт, сделав его удобным и информативным. Возможно, запрашиваемая Вами
          страница была перенесена или удалена. Вы можете позвонить нам и получить квалифицированную
          помощь наших специалистов»
        </p>

        <NavLink to="/">
          <Button
            title="на главную"
            size="normal"
            click={() => localStorage.setItem('active', 'Подбор авто')}
          />
        </NavLink>
      </div>
    </div>
  );
}
