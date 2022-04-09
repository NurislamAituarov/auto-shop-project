import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ss from './Favorites.module.scss';
import s from '../CarAvailable/CarAvailable.module.scss';
import { Helmet } from 'react-helmet-async';

import { addCar } from '../../Actions/action';
import { useAppSelector } from '../../Hooks/Hooks';
import { IItemCar } from '../../Type';
import ListItem from '../CarAvailable/ListItem';
import { CompanyTitle } from '../Company-title';

export default function Favorites() {
  const item = useAppSelector<Array<IItemCar>>((state: any) => state.reducer.listItems);
  const [listItem, setListItem] = useState<Array<IItemCar>>(item);
  const dispatch = useDispatch();

  useEffect(() => {
    const filterItem = item.filter((item) => item.active !== 'false');
    setListItem(filterItem);
  }, [item]);

  function addCarSelect(item: IItemCar, id: number) {
    dispatch(addCar(id));
  }

  return (
    <section className={ss.section}>
      <Helmet>
        <title>Favorites</title>
        <meta name="description" content="Выбранные автомобили" />
      </Helmet>
      <div className={ss.company__title}>
        <CompanyTitle title="Избранное" favorites={listItem.length} />
      </div>
      {Boolean(listItem.length) ? (
        <div className={s.wrapper__items}>
          {listItem.map((el, i) => {
            return <ListItem key={i} el={el} addCarSelect={addCarSelect} i={el.id} />;
          })}
        </div>
      ) : (
        <h2 className={ss.favorites__notSelect}>Добавьте пожалуйста в избранное </h2>
      )}
    </section>
  );
}
