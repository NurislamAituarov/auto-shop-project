import { useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addPopUpBackCall } from '../../../redux/actions/action';
import { useAppSelector } from '../../../hooks/Hooks';
import { useValueValidate } from '../../../hooks/useValueValidate';
import { Button } from '../../../components/btn/Button';
import { Input } from '../../../components/Input';
import { Select } from '../../../components/select';

import s from './CreditCalculator.module.scss';

export function CreditCalculator() {
  const listItems = useAppSelector((state) => state.reducer.listItems);
  const { valuePhone, setValuePhone, onChange } = useValueValidate();
  const [valueName, setValueName] = useState('');
  const refInput = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  function onSubmit() {
    if (valuePhone) {
      dispatch(addPopUpBackCall('offer'));
      setValuePhone('');
      setValueName('');
    } else {
      refInput.current?.focus();
    }
  }

  const ageArr = useMemo(() => {
    return ['3 лет', '7 лет', '10 лет', '12 лет', '24 лет'];
  }, []);
  const autoClass = useMemo(() => {
    return ['A', 'B', 'C', 'D', 'E', 'S'];
  }, []);
  const typeCar = useMemo(() => {
    return ['Седан', 'Хэтчбек', 'Универсал', 'Купе'];
  }, []);
  return (
    <div className={s.calculator}>
      <h2>Кредитный калькулятор</h2>

      <div className={s.calculator__select}>
        <div className={s.calculator__select_title}>
          <div className={s.calculator__select_num}>
            <div>1</div>
            <div className={s.select__connection}>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
          <h3>Выберите класс авто</h3>
        </div>

        <div className={s.calculator__select_item}>
          <Select name="Старт" arr={autoClass} />
        </div>
      </div>

      <div className={s.calculator__select}>
        <div className={s.calculator__select_title}>
          <div className={s.calculator__select_num}>
            <div>2</div>
            <div className={s.select__connection}>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
          <h3>Выберите класс авто</h3>
        </div>

        <div className={`${s.calculator__select_item} ${s.calculator__select_item2}`}>
          <Select name="Выберите марку" listItems={listItems} />
          <Select name="Выберите модель" arr={typeCar} />
        </div>
      </div>

      <div className={s.calculator__select}>
        <div className={s.calculator__select_title}>
          <div className={s.calculator__select_num}>
            <div>3</div>
            <div className={s.select__connection}>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
          <h3>Срок кредита, мес.</h3>
        </div>

        <div className={`${s.calculator__select_item} ${s.calculator__select_item2}`}>
          <Select name="7 лет" arr={ageArr} />
        </div>
      </div>

      <div className={s.calculator__select}>
        <div className={s.calculator__select_title}>
          <div className={s.calculator__select_num}>
            <div>4</div>
            <div className={s.select__connection}>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
          <h3>Персональные данные</h3>
        </div>

        <div className={`${s.calculator__select_item}`}>
          <Input placeholder="Ваше имя" type="text" value={valueName} onChange={setValueName} />
          <Input
            placeholder="Ваш телефон"
            type="tel"
            value={valuePhone}
            onChange={onChange}
            refInput={refInput}
          />
        </div>
      </div>

      <div className={s.calculator__select}>
        <div className={`${s.calculator__select_title} ${s.calculator__select_last}`}>
          <div className={s.calculator__select_num}>
            <div>V</div>
          </div>
          <Button title="Оставить заявку" size="big" click={onSubmit} />
        </div>
        <p className={s.calculator__select_consent}>
          Нажимая кнопку Оставить заявку” Вы даете согласие на обработку своих персональных данных
        </p>
      </div>
    </div>
  );
}
