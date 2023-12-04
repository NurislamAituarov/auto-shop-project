import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ss from './Favorites.module.scss';
import { Helmet } from 'react-helmet-async';

import { useAppSelector } from '../../hooks/Hooks';
import { IItemCar } from '../../types';
import ListItem from '../../components/car-available/ListItem';
import { CompanyTitle } from '../../components/company-title';

export default function Favorites() {
  const item = useAppSelector<Array<IItemCar>>((state: any) => state.reducer.listItems);
  const [listItem, setListItem] = useState<Array<IItemCar>>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const filterItem = item.filter((item) => item.active !== 'false');
    setListItem(filterItem);
  }, [item]);

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
        <div className={ss.favorites__items}>
          {listItem.map((el, i) => {
            return <ListItem key={i} el={el} dispatch={dispatch} i={el.id} />;
          })}
        </div>
      ) : (
        <h2 className={ss.favorites__notSelect}>Добавьте пожалуйста в избранное </h2>
      )}
    </section>
  );
}
