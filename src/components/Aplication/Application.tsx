import s from './Application.module.scss';
import { useState } from 'react';
import { useAppSelector } from '../../Hooks/Hooks';
import cn from 'classnames';

import { Button } from '../Btn/Button';
import car from '../../Images/car-skeleton.png';
import { Slider } from '@mui/material';
import { SettingSelect } from './SettingSelect';
import carBrand from '../../Images/camry-front.png';
import { useDispatch } from 'react-redux';
import { popUpBackCall } from '../../Actions/action';
import { useDebounce } from '../../Hooks/useDebounce';

const values = {
  value1: 0,
  value2: 6,
  value3: 0,
};
type IHandleChange = (event: any) => void;

export default function Application() {
  const brand = useAppSelector((state: any) => state.reducer.brandList);
  const [value, setValue] = useState(values);

  const dispatch = useDispatch();

  const handleChange: IHandleChange = (event) => {
    setValue({ ...value, value1: event.target.value });
    setValue((value) => ({ ...value, value3: value.value1 / 10 }));
  };
  const handleChangeMonth: IHandleChange = (event) => {
    setValue({ ...value, value2: event.target.value });
  };

  const dfunc = useDebounce<typeof handleChange>(handleChange, 200);
  const dfunc2 = useDebounce<typeof handleChangeMonth>(handleChangeMonth, 200);

  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <h2>Заявка на автокредит</h2>
        <div className={s.wrapper__settings}>
          <div className={s.setting}>
            <SettingSelect />
            <div className={s.setting__view}>
              {!brand.name ? <img src={car} alt="car" /> : <img src={carBrand} alt="фото машины" />}
              <div className={s.setting__view__container}>
                <div className={cn({ [s.active_credit]: value.value3 })}>
                  <p>
                    {value.value3}
                    {value.value1 > 0 && ' руб.'}
                  </p>
                  <p>
                    {value.value1 - value.value3} {value.value1 > 0 && ' руб.'}
                  </p>
                </div>
                <hr />
                <div>
                  <p>Первоначальный взнос</p>
                  <p>Остаток по кредиту</p>
                </div>
              </div>
            </div>
            <hr className={s.hr__mobile} />
            <div className={s.setting__price}>
              <div className={s.setting__price_title}>
                <p>Сумма кредита, руб</p>
                <strong>
                  {value.value1}
                  {value.value1 < 1000000 && value.value1 >= 0 ? 'т' : 'м'}
                </strong>
              </div>
              <div className={s.setting__price_slider}>
                <Slider
                  max={3000000}
                  onChange={(e: any) => {
                    dfunc(e);
                  }}
                  aria-label="Default"
                />
                <div>
                  {[0, '300т', '600т', '1м', '1,3м', '1,6м', '1,9м', '2,2м', '2,6м', '3м'].map(
                    (el) => {
                      return <p key={el}>{el}</p>;
                    },
                  )}
                </div>
              </div>
              <div className={s.setting__price_title}>
                <p>Срок кредита, мес.</p>
                <strong>{value.value2} мес.</strong>
              </div>
              <div className={s.setting__price_slider}>
                <Slider onChange={dfunc2} max={84} aria-label="Default" defaultValue={6} />
                <div>
                  {[6, 12, 24, 36, 48, 60, 72, 84].map((el) => {
                    return <p key={el}>{el}</p>;
                  })}
                </div>
              </div>

              <div className={s.setting__price_rub}>
                <p>Первоначальный взнос, руб</p>
                <input type="text" placeholder="0" readOnly value={value.value3} />
              </div>
            </div>
          </div>
          <hr className={s.hr} />
          <div className={s.fillForm}>
            <h2>
              Получить выгоду <br className={s.br} /> <span>300 000 ₽</span>
            </h2>
            <div>
              <input type="text" placeholder="Ваше имя" />
              <input type="text" placeholder="Ваш телефон" />
              <Button
                title="Получить предложение"
                click={() => dispatch(popUpBackCall('a discount'))}
              />
            </div>
            <p>
              Нажимая кнопку “Получить скидку” Вы даете согласие на обработку своих персональных
              данных
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
