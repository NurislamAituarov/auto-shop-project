import s from './Application.module.scss';
import { useRef, useState } from 'react';
import { useAppSelector } from '../../Hooks/Hooks';
import cn from 'classnames';

import { Button } from '../Btn/Button';
import car from '../../Images/car-skeleton.png';
import { Slider } from '@mui/material';
import { SettingSelect } from './SettingSelect';
import { useDispatch } from 'react-redux';
import { addPopUpBackCall } from '../../Actions/action';
import { useDebounce } from '../../Hooks/useDebounce';
import { useValueValidate } from '../../Hooks/useValueValidate';
import { Input } from '../Input';

const values = {
  value1: 0,
  value2: 12,
  value3: 0,
  name: '',
};
type IHandleChange = (event: any) => void;

export default function Application({ refApplication }: any) {
  const { brandList } = useAppSelector((state: any) => state.reducer);
  const [value, setValue] = useState(values);
  const refInput = useRef<HTMLInputElement | null>(null);
  const { valuePhone, setValuePhone, onChange } = useValueValidate();
  const dispatch = useDispatch();

  const handleChange: IHandleChange = (event) => {
    setValue({ ...value, value1: event.target.value });
    setValue((value) => ({ ...value, value3: value.value1 / 10 }));
  };
  const handleChangeMonth: IHandleChange = (event) => {
    setValue({ ...value, value2: event.target.value });
  };
  function onSubmit(e: any) {
    e.preventDefault();
    if (valuePhone && brandList.name_car) {
      dispatch(addPopUpBackCall('a discount'));
      setValue({ ...value, name: '' });
      setValuePhone('');
    } else {
      refInput.current?.focus();
    }
  }

  const dfunc = useDebounce<typeof handleChange>(handleChange, 200);
  const dfunc2 = useDebounce<typeof handleChangeMonth>(handleChangeMonth, 200);

  return (
    <section ref={refApplication} className={s.section}>
      <div className={s.wrapper}>
        <h2>Заявка на автокредит</h2>
        <div className={s.wrapper__settings}>
          <div className={s.setting}>
            <SettingSelect />
            <div className={s.setting__view}>
              {!brandList.name_car ? (
                <img src={car} alt="car" />
              ) : (
                <img src={brandList.url_img} alt="фото машины" width="424" />
              )}
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
                <hr className={cn({ [s.active_hr]: value.value3 })} />
                <div className={cn({ [s.active_sum]: value.value3 })}>
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
                  sx={{ color: '#CA0100' }}
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
                <Slider
                  sx={{ color: '#CA0100' }}
                  onChange={dfunc2}
                  min={6}
                  max={84}
                  aria-label="Default"
                  defaultValue={12}
                />
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
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Ваше имя"
                value={value.name}
                onChange={(e) => setValue({ ...value, name: e.target.value })}
              />
              <Input
                placeholder="Ваш телефон"
                type="tel"
                refInput={refInput}
                value={valuePhone}
                onChange={onChange}
              />
              <Button title="Получить предложение" click={(e) => onSubmit(e)} />
            </form>
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
