import { MutableRefObject, lazy, useEffect, useState } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useDispatch } from 'react-redux';

import { Button } from '../btn/Button';
import { IItemCar } from '../../types';
import { ReactContentLoader } from '../loader/ContentLoader';
import { useAppSelector } from '../../hooks/Hooks';
import s from './CarAvailable.module.scss';

const ListItem = lazy(() => import('./ListItem'));
let count = 0;

interface IProps {
  refCarAvailable: MutableRefObject<HTMLDivElement | null>;
}

export default function CarAvailable({ refCarAvailable }: IProps) {
  const listItemHome = useAppSelector((state) => state.reducer.listItems);
  const [listItem, setListItem] = useState<Array<IItemCar>>(listItemHome);
  const dispatch = useDispatch();

  useEffect(() => {
    if (count === 0) {
      count += 6;
      // dispatch(addListItem());
    }

    const onResize = () => {
      if (window.innerWidth <= 768) {
        setListItem(listItemHome);
      } else {
        setListItem(listItemHome.slice(0, count));
      }
    };
    onResize();
    document.addEventListener('click', onResize, true);
    return () => {
      document.removeEventListener('click', onResize, true);
    };
  }, [listItemHome]);

  function showMore() {
    count += 6;
    setListItem(listItemHome.slice(0, count));
  }

  return (
    <section ref={refCarAvailable} id="CarAvailable" className={s.section}>
      {Boolean(listItem.length) ? (
        <>
          <h2>Автомобили в наличии с ПТС</h2>
          <div className={s.wrapper__items}>
            {listItem.map((el, i) => {
              return <ListItem key={i} el={el} i={el.id} dispatch={dispatch} />;
            })}
          </div>
        </>
      ) : (
        <ReactContentLoader />
      )}

      {listItemHome.length !== listItem.length && (
        <div className={s.btn__showMore}>
          <Button click={showMore} title="Показать  еще" />
        </div>
      )}
    </section>
  );
}
