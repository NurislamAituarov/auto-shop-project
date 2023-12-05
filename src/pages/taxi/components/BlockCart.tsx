import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './BlockCart.module.scss';

import { Tag } from '../../../components/tag';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/btn/Button';
import { addPopUpBackCall } from '../../../redux/actions';
import { useValueValidate } from '../../../hooks/useValueValidate';
import { svg1, svg2, svg3, svg4, svg5, svg6, svg7, svg8, svg9 } from '../../../assets';

export function BlockCart() {
  const dispatch = useDispatch();
  const [valueName, setValueName] = useState('');
  const { valuePhone, setValuePhone, onChange } = useValueValidate();
  const refInput = useRef<HTMLInputElement | null>(null);

  function onSubmit() {
    if (valuePhone) {
      dispatch(addPopUpBackCall('offer'));
      setValuePhone('');
      setValueName('');
    } else {
      refInput.current?.focus();
    }
  }

  return (
    <div className={s.block}>
      <div className={s.offer}>
        <div className={s.offer__title}>
          <h2>Получите специальную цену</h2>
          <Tag title="Только до 10.10.21" />
        </div>
        <div className={s.offer__form_wrapper}>
          <div className={s.offer__form}>
            <Input type="text" placeholder="Ваше имя" value={valueName} onChange={setValueName} />
            <Input
              type="tel"
              placeholder="Ваш телефон"
              value={valuePhone}
              onChange={onChange}
              refInput={refInput}
            />
            <Button title="Получить предложение" click={onSubmit} />
          </div>
          <p>
            Нажимая кнопку “Получить скидку” Вы даете согласие на обработку своих персональных
            данных
          </p>
        </div>
      </div>

      <p className={s.block__title}>
        Хотите начать зарабатывать на себя? Приобретение собственного такси – один из самых
        доступных, простых, популярных и выгодных вариантов. А главное – в отличие от других видов
        бизнеса здесь не нужен большой стартовый капитал.
      </p>

      <div className={s.block__cart}>
        <div className={s.block__cart_item}>
          <img src={svg1} alt="" />
          <p>0% первый взнос</p>
        </div>
        <div className={s.block__cart_item}>
          <hr />
          <img src={svg2} alt="" />
          <p>
            Одобрение кредита <br /> в течение 15-30 минут
          </p>
        </div>
        <div className={s.block__cart_item}>
          <hr />
          <img src={svg3} alt="" />
          <p>Минимум документов для подачи заявки</p>
        </div>
        <div className={s.block__cart_item}>
          <hr />
          <img src={svg4} alt="" />
          <p>Trade-in в качестве первоначального взноса</p>
        </div>
        <div className={s.block__cart_item}>
          <hr />
          <img src={svg5} alt="" />
          <p>
            Оклейка и <br /> брендирование в подарок
          </p>
        </div>
        <div className={s.block__cart_item}>
          <img src={svg6} alt="" />
          <p>Помощь в оформлении документов</p>
        </div>
        <div className={s.block__cart_item}>
          <hr />
          <img src={svg7} alt="" />
          <p>Комплект резины в подарок</p>
        </div>
        <div className={s.block__cart_item}>
          <hr />
          <img src={svg8} alt="" />
          <p>
            Оформление ОСАГО <br /> за 15 минут
          </p>
        </div>
        <div className={s.block__cart_item}>
          <hr />
          <img src={svg9} alt="" />
          <p>Поможем оформить лицензию под такси</p>
        </div>
      </div>
    </div>
  );
}
