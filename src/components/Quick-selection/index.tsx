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
import { ReactSVGElement } from 'react';

interface IlistCarr {
  name: string;
  svg: ReactSVGElement | any;
}

const listCarr: IlistCarr[] = [
  { name: 'Kia', svg: one },
  { name: 'Brilliance', svg: two },
  { name: ' Citroen', svg: three },
  { name: 'Ford', svg: four },
  { name: 'Haima', svg: five },
  { name: 'Lifan', svg: six },
  { name: 'Peugeot', svg: seven },
  { name: 'UAZ', svg: eight },
  { name: 'Hyundai', svg: nine },
  { name: 'Changan', svg: ten },
  { name: 'Datsun', svg: eleven },
  { name: 'Foton', svg: twelve },
  { name: 'Haval', svg: thirteen },
  { name: 'Mazda', svg: fourteen },
  { name: 'Ravon', svg: fifteen },
  { name: 'Zotye', svg: sixteen },
  { name: 'Skoda', svg: Skoda },
  { name: 'Chery', svg: Chery },
  { name: 'Dongfeng', svg: Dongfeng },
  { name: 'GAC', svg: GAC },
  { name: 'Honda', svg: Honda },
  { name: 'Mitsubishi', svg: Mitsubishi },
  { name: 'Renault', svg: Renault },
  { name: 'Volkswagen', svg: Volkswagen },
  { name: 'CheryExeed', svg: CheryExeed },
  { name: 'DWHower', svg: DWHower },
  { name: 'Geely', svg: Geely },
  { name: 'JAC', svg: JAC },
  { name: 'Nissan', svg: Nissan },
  { name: 'SsangYong', svg: SsangYong },
  { name: 'Toyota', svg: Toyota },
  { name: 'Chevrolet', svg: Chevrolet },
  { name: 'FAW', svg: FAW },
  { name: 'GreatWall', svg: GreatWall },
  { name: 'Lada', svg: Lada },
  { name: 'Opel', svg: Opel },
  { name: 'Suzuki', svg: Suzuki },
];

export function QuickSelection() {
  return (
    <section className={cn(s.section)}>
      <div className={s.block__listCar}>
        {listCarr.map((el, i) => {
          return (
            <div key={i} className={cn(s.item, 'flex')}>
              <img src={el.svg} alt="имя машины" />
              <p>{el.name}</p>
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
          <Button size="big" title="Показать 73" />
        </div>
      </div>
    </section>
  );
}
