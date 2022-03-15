import cn from 'classnames';
import s from './QuickSelection.module.scss';
import {
  Suzuki,
  Opel,
  Lada,
  GreatWall,
  FAW,
  Chevrolet,
  Toyota,
  SsangYong,
  Nissan,
  JAC,
  Geely,
  DWHower,
  CheryExeed,
  Volkswagen,
  Mitsubishi,
  Renault,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  Skoda,
  Chery,
  Dongfeng,
  GAC,
  Honda,
} from './svg';

import { Button } from '../Btn/Button';
import { Selected } from './Select';
import DiscreteSlider from '../Slider';
import { ReactSVGElement, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useAppSelector } from '../../Hooks/Hooks';
import PositionedTooltips from './Tooltip';

export interface IlistCarr {
  name: string;
  svg: ReactSVGElement | any;
  price: number;
}

export const listCarr: IlistCarr[] = [
  { name: 'Kia', svg: one, price: 1200000 },
  { name: 'Brilliance', svg: two, price: 2600000 },
  { name: ' Citroen', svg: three, price: 2700000 },
  { name: 'Ford', svg: four, price: 2800000 },
  { name: 'Haima', svg: five, price: 2300000 },
  { name: 'Lifan', svg: six, price: 1900000 },
  { name: 'Peugeot', svg: seven, price: 1300000 },
  { name: 'UAZ', svg: eight, price: 1200000 },
  { name: 'Hyundai', svg: nine, price: 1300000 },
  { name: 'Changan', svg: ten, price: 1700000 },
  { name: 'Datsun', svg: eleven, price: 1900000 },
  { name: 'Foton', svg: twelve, price: 2000000 },
  { name: 'Haval', svg: thirteen, price: 2500000 },
  { name: 'Mazda', svg: fourteen, price: 2300000 },
  { name: 'Ravon', svg: fifteen, price: 2200000 },
  { name: 'Zotye', svg: sixteen, price: 2900000 },
  { name: 'Skoda', svg: Skoda, price: 2600000 },
  { name: 'Chery', svg: Chery, price: 2200000 },
  { name: 'Dongfeng', svg: Dongfeng, price: 950000 },
  { name: 'GAC', svg: GAC, price: 450000 },
  { name: 'Honda', svg: Honda, price: 350000 },
  { name: 'Mitsubishi', svg: Mitsubishi, price: 750000 },
  { name: 'Renault', svg: Renault, price: 750000 },
  { name: 'Volkswagen', svg: Volkswagen, price: 750000 },
  { name: 'CheryExeed', svg: CheryExeed, price: 150000 },
  { name: 'DWHower', svg: DWHower, price: 150000 },
  { name: 'Geely', svg: Geely, price: 250000 },
  { name: 'JAC', svg: JAC, price: 750000 },
  { name: 'Nissan', svg: Nissan, price: 950000 },
  { name: 'SsangYong', svg: SsangYong, price: 350000 },
  { name: 'Toyota', svg: Toyota, price: 750000 },
  { name: 'Chevrolet', svg: Chevrolet, price: 750000 },
  { name: 'FAW', svg: FAW, price: 850000 },
  { name: 'GreatWall', svg: GreatWall, price: 750000 },
  { name: 'Lada', svg: Lada, price: 150000 },
  { name: 'Opel', svg: Opel, price: 550000 },
  { name: 'Suzuki', svg: Suzuki, price: 750000 },
];

export default function QuickSelection() {
  const price = useAppSelector((state: any) => state.reducer.priceCar);
  const [numCar, setNumCar] = useState<number>(0);
  const [listCarrArr, setListCarrArr] = useState<IlistCarr[]>();

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
  function showCars(item: string) {
    setListCarrArr(filterListCar());
  }

  let string = `Показать ${numCar}`;
  return (
    <section className={cn(s.section)}>
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
        <DiscreteSlider />
        <div className={s.block__selects_wrapper}>
          <Selected title="Тип кузова" items={['Седан', 'Хэтчбек', 'Универсал']} />
          <Selected title="Коробка" items={['Автомат', 'Механическая']} />
          <Button size="big" title={string} click={() => showCars('show')} />
        </div>
      </div>
    </section>
  );
}
