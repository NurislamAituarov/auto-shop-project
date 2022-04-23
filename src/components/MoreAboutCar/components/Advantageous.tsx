import s from './Advantageous.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';

import fon from '../../../Images/advantageous.png';
import { Down } from '../../Svg';
import { useOutsideAlerter } from '../../../Hooks/useOutsideAlerter';
import { useAppSelector } from '../../../Hooks/Hooks';
import { IItemCar } from '../../../Type';
import { Button } from '../../Btn/Button';

interface IAdvantageous {
  name: string | undefined;
}

export function Advantageous({ name }: IAdvantageous) {
  const listItems = useAppSelector((state: any) => state.reducer.listItems);

  return (
    <div className={s.wrapper}>
      <div className={s.block__advantageous}>
        <img src={fon} alt="fon" />

        <div className={s.block__title}>
          <div></div>
          <h2>Выгодный Trade-in</h2>
          <h3>Оценим вашу машину за 10 минут</h3>
        </div>

        <div className={s.block__select}>
          <Select listItems={listItems} name={name} />
          <Select arr={['1', '2', '3']} name="Модeль" />
          <Select
            arr={['2016', '2017', '2018', '2019', '2020', '2021', '2022']}
            name="Год выпуска"
          />
          <Select arr={['Седан', 'Хэтчбек', 'Универсал', 'Купе', 'Кроссовер']} name="Тип кузова" />
          <label>
            <input type="text" placeholder="Ваш телефон" />
          </label>
          <Button title="Обратный звонок" size="big" />
        </div>
        <p className={s.block__bottomTitle}>
          Нажимая кнопку «Получить предложение», Вы соглашаетесь{' '}
          <span> с политикой конфиденциальности и правилами обработки персональных данных</span>
        </p>
      </div>
    </div>
  );
}

interface ISelect {
  name: string | undefined;
  listItems?: IItemCar[] | [];
  arr?: string[];
}

function Select({ name, listItems, arr }: ISelect) {
  const { ref, isShow, setIsShow } = useOutsideAlerter(false);

  return (
    <motion.div
      ref={ref}
      onClick={() => setIsShow(!isShow)}
      className={cn(s.select__item, {
        [s.active]: isShow,
      })}>
      <p>{name}</p>
      <Down />
      {isShow && (
        <motion.ul
          initial={{ y: '100px' }}
          animate={{ y: '0px' }}
          transition={{ duration: 1 }}
          className={cn(s.select__showList)}>
          {listItems
            ? listItems.map((el, i) => {
                return <li key={i}>{el.name_car}</li>;
              })
            : arr &&
              arr.map((el, i) => {
                return <li key={i}>{el}</li>;
              })}
        </motion.ul>
      )}
    </motion.div>
  );
}
