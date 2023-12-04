import { useRef } from 'react';
import { useValueValidate } from '../../../hooks/useValueValidate';

import { Button } from '../../btn/Button';
import { Input } from '../../Input';
import s from '../PopUpBackCall.module.scss';

interface IPopUpForm {
  setSent: (value: boolean) => void;
  title: string[];
  button: string;
}

export function PopUpForm({ setSent, title, button }: IPopUpForm) {
  const { valuePhone, onChange } = useValueValidate();
  const refInput = useRef<HTMLInputElement | null>(null);

  function handleSubmit(e: any) {
    e.preventDefault();
    if (valuePhone) {
      setSent(true);
    } else {
      refInput.current?.focus();
    }
  }
  return (
    <form onSubmit={handleSubmit} className={s.modal__content_inf}>
      <div className={s.modal__content_title}>
        <h2>{title[0]}</h2>
        <p>{title[1]}</p>
      </div>
      <input type="text" placeholder="Ваше имя" />
      <Input
        placeholder="Ваш телефон"
        type="tel"
        refInput={refInput}
        value={valuePhone}
        onChange={onChange}
      />
      <Button click={handleSubmit} title={button} />
      <p>
        Нажимая кнопку “Получить предложение” Вы даете согласие на обработку своих
        <span> персональных данных</span>
      </p>
    </form>
  );
}
