import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import s from './Advantageous.module.scss';

import { useAppSelector } from '../../../hooks/Hooks';
import { Button } from '../../../components/Btn/Button';
import { useValueValidate } from '../../../hooks/useValueValidate';
import { addPopUpBackCall } from '../../../redux/actions/action';
import { Select } from '../../../components/Select';
import { Input } from '../../../components/Input';
import { fon3 } from '../../../assets';

interface IAdvantageous {
  name: string | undefined;
}

export function Advantageous({ name }: IAdvantageous) {
  const listItems = useAppSelector((state: any) => state.reducer.listItems);
  const { valuePhone, setValuePhone, onChange } = useValueValidate();
  const refInput = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  function onSubmit(e: any) {
    e.preventDefault();
    if (valuePhone) {
      dispatch(addPopUpBackCall('offer'));
      setValuePhone('');
    } else {
      refInput.current?.focus();
    }
  }

  return (
    <div className={s.wrapper}>
      <div className={s.block__advantageous}>
        <img src={fon3} alt="fon" />

        <div className={s.block__title}>
          <div></div>
          <h2>Выгодный Trade-in</h2>
          <h3>Оценим вашу машину за 10 минут</h3>
        </div>

        <form onSubmit={onSubmit} className={s.block__select}>
          <Select listItems={listItems} name={name} />
          <Select arr={['1', '2', '3']} name="Модeль" />
          <Select
            arr={['2016', '2017', '2018', '2019', '2020', '2021', '2022']}
            name="Год выпуска"
          />
          <Select arr={['Седан', 'Хэтчбек', 'Универсал', 'Купе', 'Кроссовер']} name="Тип кузова" />
          <label>
            <Input
              placeholder="Ваш телефон"
              type="tel"
              refInput={refInput}
              value={valuePhone}
              onChange={onChange}
            />
          </label>
          <Button title="Обратный звонок" size="big" click={onSubmit} />
        </form>
        <p className={s.block__bottomTitle}>
          Нажимая кнопку «Получить предложение», Вы соглашаетесь{' '}
          <span> с политикой конфиденциальности и правилами обработки персональных данных</span>
        </p>
      </div>
    </div>
  );
}
