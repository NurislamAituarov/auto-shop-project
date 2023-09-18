import { useRef } from 'react';
import { google, yandex } from '../../assets';

import { onNext, onPrev } from '../../hooks/direction';
import { sum5 } from '../../hooks/useCustomCounter';

import { DirectionButtons } from '../Direction-btn/DirectionButtons';
import { Rating } from '../Rating';

import s from './We-are-trusted.module.scss';

const listBlock = [
  { title: 'Сайт oтзовик', subtitle: 'Название автосалона' },
  { title: 'Сайт oтзовик', subtitle: 'Название автосалона' },
  { title: 'Сайт oтзовик', subtitle: 'Название автосалона' },
  { title: 'Сайт oтзовик', subtitle: 'Название автосалона' },
  { title: 'Сайт oтзовик', subtitle: 'Название автосалона' },
  { title: 'Сайт oтзовик', subtitle: 'Название автосалона' },
  { title: 'Сайт oтзовик', subtitle: 'Название автосалона' },
];

export default function WeAreTrusted() {
  const refBlock = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className={s.section}>
      <div className={s.directionButtons}>
        <DirectionButtons
          title="Нам доверяют"
          onNext={() => onNext('trusted', refBlock, sum5)}
          onPrev={() => onPrev('trusted', refBlock, sum5)}
        />
      </div>
      <div className={s.block}>
        <div className={s.wrapper}>
          {listBlock.map((el, i) => {
            return <ListItem key={i} el={el} refBlock={refBlock} i={i} />;
          })}
        </div>
      </div>
      <div className={s.trusted__maps}>
        <div className={s.trusted__map_item}>
          <div className={s.trusted__map_name}>
            <img src={yandex} alt="yandex" />
            <p>Название автосалона</p>
          </div>
          <Rating />
        </div>
        <div className={s.trusted__map_item}>
          <div className={s.trusted__map_name}>
            <img src={google} alt="google" />
            <p>Название автосалона</p>
          </div>
          <Rating />
        </div>
      </div>
    </section>
  );
}

interface IItem {
  title: string;
  subtitle: string;
}

interface IListItem {
  el: IItem;
  refBlock: any;
  i: number;
}
function ListItem({ el, refBlock, i }: IListItem) {
  return (
    <div ref={(el) => (refBlock.current[i] = el)} className={s.item}>
      <h2>{el.title}</h2>
      <p className={s.item__subtitle}>{el.subtitle}</p>
      <Rating />
    </div>
  );
}
