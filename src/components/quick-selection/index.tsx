import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import s from './QuickSelection.module.scss';

import { Button } from '../btn/Button';
import { Selected } from './components/Select';
import { useAppSelector } from '../../hooks/Hooks';
import PositionedTooltips from './components/Tooltip';
import { IListCarr } from '../../types';
import { RangeSlider } from './components/Slider';
import { listCarr } from './list-car';
import { itemsTransmissionCar, itemsTypeCar } from '../../lib/constants';

interface Props {
  refQuickSelection: any;
}

export default function QuickSelection({ refQuickSelection }: Props) {
  const price = useAppSelector((state) => state.reducer.priceCar);
  const [numCar, setNumCar] = useState(0);
  const [listCarrArr, setListCarrArr] = useState<IListCarr[]>();

  useEffect(() => {
    setListCarrArr(listCarr);
  }, []);
  useEffect(() => {
    const newArr = listCarr.filter((item) => {
      return item.price < price[1] && item.price > price[0];
    });
    setNumCar(newArr.length);
  }, [price]);

  function filterListCar() {
    return listCarr.filter((item) => {
      return item.price < price[1] && item.price > price[0];
    });
  }
  function showCars() {
    setListCarrArr(filterListCar());
  }

  let string = `Показать ${numCar}`;
  return (
    <section ref={refQuickSelection} className={cn(s.section)}>
      <div className={s.block__listCar}>
        {listCarrArr &&
          listCarrArr.map((el, i) => {
            return (
              <div key={i} className={cn(s.item, 'flex')}>
                <LazyLoadImage effect="blur" src={el.svg} alt="имя машины" width="38" height="38" />
                <PositionedTooltips name={el.name} price={el.price} />
              </div>
            );
          })}
      </div>
      <div className={s.block__selected}>
        <h3>Быстрый подбор авто</h3>
        <RangeSlider />
        <div className={s.block__selects_wrapper}>
          <Selected title="Тип кузова" items={itemsTypeCar} />
          <Selected title="Коробка" items={itemsTransmissionCar} />
          <Button size="big" title={string} click={showCars} />
        </div>
      </div>
    </section>
  );
}
