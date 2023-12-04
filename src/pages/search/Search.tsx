import cn from 'classnames';
import s from './Search.module.scss';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { IListCarr } from '../../types';
import { Button } from '../../components/btn/Button';
import { listCarr } from '../../components/quick-selection/list-car';
import { arrSpecificOffers } from '../../components/section-selection/SectionSelection';
import { Search } from '../../components/svg';

interface IBlock {
  name: string;
  result: string[] | IListCarr[];
}

const block = [
  { name: 'Кредит и рассрочка', result: arrSpecificOffers },
  { name: 'Каталог автомобилей', result: listCarr },
  { name: 'Авто с пробегом', result: [] },
  { name: 'Спецпредложения', result: ['Trade-in', 'Рассрочка'] },
  { name: 'Такси в кредит', result: [] },
];

export default function ToFind() {
  const [state, setState] = useState<IBlock[]>(block);
  const [value, setValue] = useState<string>('');

  function onSearch() {
    const newState = block.filter((el) => {
      let res = false;
      el.result.forEach((element) => {
        if (
          typeof element !== 'string' &&
          element.name.toLowerCase().includes(value.toLowerCase())
        ) {
          res = true;
        }

        if (typeof element === 'string' && element.toLowerCase().includes(value.toLowerCase())) {
          res = true;
        }
      });
      if (res) return el;
      return el.name.toLowerCase().includes(value.toLowerCase());
    });
    setState(newState);
  }

  return (
    <section className={s.section}>
      <Helmet>
        <title>Search</title>
        <meta name="description" content="Поиск нужной информации " />
      </Helmet>
      <div className={s.search__wrapper}>
        <Search />
        <input
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
            setValue(ev.target.value);
            setState(block);
          }}
          type="text"
          placeholder="Поиск"
          value={value}
        />
        <Button title="НАЙТИ" size="small" click={onSearch} />
      </div>
      <div className={s.search__result}>
        {state.map((el) => {
          return (
            <div className={s.search__result_block} key={el.name}>
              <h2>{el.name}</h2>
              <div
                className={cn({
                  [s.grid__many]: el.name === ('Каталог автомобилей' || 'Авто с пробегом'),
                })}>
                {el.result.map((el, i) => {
                  const name = typeof el === 'string' ? el : el.name;
                  return <p key={i}>{name}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
