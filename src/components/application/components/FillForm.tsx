import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { addPopUpBackCall } from '../../../redux/actions/action';
import { useValueValidate } from '../../../hooks/useValueValidate';
import { IItemCar } from '../../../types';
import { Button } from '../../btn/Button';
import { Input } from '../../Input';
import { IValues } from '../Application';
import s from './styles.module.scss';

interface IFillForm {
  value: IValues;
  setValue: (value: any) => void;
  brandList: IItemCar;
}

export function FillForm({ setValue, value, brandList }: IFillForm) {
  const refInput = useRef<HTMLInputElement | null>(null);
  const { valuePhone, setValuePhone, onChange } = useValueValidate();
  const dispatch = useDispatch();

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
  return (
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
        Нажимая кнопку “Получить скидку” Вы даете согласие на обработку своих персональных данных
      </p>
    </div>
  );
}
