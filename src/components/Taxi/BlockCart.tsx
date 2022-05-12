import s from './BlockCart.module.scss';
import svg1 from '../Svg/taxiSVG1.svg';
import svg2 from '../Svg/taxiSVG2.svg';
import svg3 from '../Svg/taxiSVG3.svg';
import svg4 from '../Svg/taxiSVG4.svg';
import svg5 from '../Svg/taxiSVG5.svg';
import svg6 from '../Svg/taxiSVG6.svg';
import svg7 from '../Svg/taxiSVG7.svg';
import svg8 from '../Svg/taxiSVG8.svg';
import svg9 from '../Svg/taxiSVG9.svg';
import { Tag } from '../Tag';
import { Input } from '../Input';
import { Button } from '../Btn/Button';
import { useDispatch } from 'react-redux';
import { addPopUpBackCall } from '../../Actions/action';
import { useValueValidate } from '../../Hooks/useValueValidate';
import { useRef, useState } from 'react';

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
