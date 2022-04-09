import s from './CarAvailable.module.scss';
import { lazy, useEffect, useState } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useDispatch } from 'react-redux';

import { Button } from '../Btn/Button';
import { addCar, addListItem } from '../../Actions/action';
import { IItemCar } from '../../Type';
import { getCarItems } from '../../Api/client';
import { ReactContentLoader } from '../Loader/ContentLoader';
import { useAppSelector } from '../../Hooks/Hooks';

const ListItem = lazy(() => import('./ListItem'));
let count = 0;

export default function CarAvailable() {
  const listItemHome = useAppSelector((state: any) => state.reducer.listItems);
  const [listItem, setListItem] = useState<Array<IItemCar>>(listItemHome);
  const dispatch = useDispatch();

  useEffect(() => {
    count === 0 &&
      getCarItems().then((items) => {
        dispatch(addListItem(items.data));
      });
  }, []);

  useEffect(() => {
    if (count === 0) count += 6;
    setListItem(listItemHome.slice(0, count));
  }, [listItemHome]);

  function addCarSelect(item: IItemCar, id: number) {
    dispatch(addCar(id));
  }

  function showMore() {
    count += 6;
    setListItem(listItemHome.slice(0, count));
  }

  return (
    <section className={s.section}>
      <h2>Автомобили в наличии с ПТС</h2>
      <div className={s.wrapper__items}>
        {Boolean(listItem.length)
          ? listItem.map((el, i) => {
              return <ListItem key={i} el={el} addCarSelect={addCarSelect} i={el.id} />;
            })
          : [1, 2, 3, 4, 5, 6].map((el, i) => {
              return (
                <div className={s.content_loader} key={i}>
                  <ReactContentLoader />
                </div>
              );
            })}
      </div>
      {listItemHome.length !== listItem.length && (
        <div className={s.btn__showMore}>
          <Button click={showMore} title="Показать  еще" />
        </div>
      )}
    </section>
  );
}
