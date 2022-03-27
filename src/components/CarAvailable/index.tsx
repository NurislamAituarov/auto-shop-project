import s from './CarAvailable.module.scss';
import { lazy, useEffect, useState } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useDispatch } from 'react-redux';

import { Button } from '../Btn/Button';
import { addCar, removeCar } from '../../Actions/action';
import { IItemCar } from '../../Type';
import car_skeleton from '../../Images/car-skeleton.png';
import { getCarItems } from '../../Api/client';
import { ReactContentLoader } from '../Loader/ContentLoader';

const ListItem = lazy(() => import('./ListItem'));

export default function CarAvailable() {
  const [listItem, setListItem] = useState<Array<IItemCar>>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getCarItems().then((items) => {
      setListItem(items.data.slice(0, 6));
    });
  }, []);

  function addCarSelect(item: IItemCar, index: number) {
    listItem.forEach((el, i) => {
      if (index === i && el.active !== true) {
        dispatch(addCar(item));
        setListItem(
          listItem.map((el, i) => {
            if (index === i) {
              return { ...el, active: true };
            }
            return el;
          }),
        );
      }

      if (index === i && el.active === true) {
        dispatch(removeCar());
        setListItem(
          listItem.map((el, i) => {
            if (index === i) {
              return { ...el, active: false };
            }
            return el;
          }),
        );
      }
    });
  }

  function showMore() {
    getCarItems().then((items) => {
      setListItem(items.data);
    });
    // setListItem(listItem.concat(listItem.slice(0, 6)));
  }

  return (
    <section className={s.section}>
      <h2>Автомобили в наличии с ПТС</h2>
      <div className={s.wrapper__items}>
        {listItem.length
          ? listItem.map((el, i) => {
              const img = el.url_img ? el.url_img : car_skeleton;
              return <ListItem key={i} img={img} el={el} addCarSelect={addCarSelect} i={i} />;
            })
          : [1, 2, 3, 4, 5, 6].map((el, i) => {
              return (
                <div className={s.content_loader} key={i}>
                  <ReactContentLoader />
                </div>
              );
            })}
      </div>
      <div className={s.btn__showMore}>
        <Button click={showMore} title="Показать  еще" />
      </div>
    </section>
  );
}
