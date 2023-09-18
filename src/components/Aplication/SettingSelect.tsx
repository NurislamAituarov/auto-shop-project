import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import s from './Application.module.scss';
import cn from 'classnames';
import { memo, useEffect, useRef, useState } from 'react';

import { Down } from '../Svg';
import { IItemCar } from '../../types';
import { addBrandItem } from '../../redux/actions/action';
import { useAppSelector } from '../../hooks/Hooks';

export interface IItem {
  name: string;
  list: IItemCar[] | string[];
}
const blockSelect: IItem[] = [
  { name: 'Марка', list: [] },
  { name: 'Модель', list: ['1', '2', '3', '4'] },
  { name: 'Комплектация', list: ['Базовая', 'Средняя', 'Максимальная'] },
];

const variants = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  hidden: {},
};
const variantsChildren = {
  visible: {
    opacity: 1,
  },
  hidden: { opacity: 0 },
};

export const SettingSelect = memo(function SettingSelect() {
  const { listItems } = useAppSelector((state: any) => state.reducer);

  const [activeList, setActiveList] = useState('');
  const [state, setState] = useState(blockSelect);

  const refItem = useRef<(HTMLUListElement | null)[]>([]);
  const ref = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const newItem = { name: 'Марка', list: listItems };
    setState([newItem, ...blockSelect.slice(1)]);
  }, [listItems]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  function selectedList(value: string, i: number) {
    state.forEach((el, index) => {
      if (i === index) {
        el.name = value;
      }
    });
  }

  function showList(event: any, name: string, index: number) {
    activeList === name ? setActiveList('') : setActiveList(name);
    if (refItem.current[index]?.contains(event.target)) {
      setActiveList('');
    }
  }

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setActiveList('');
    }
  };

  return (
    <div className={s.setting__select} ref={ref}>
      {state.map((el, index) => {
        return (
          <motion.div
            layout
            variants={variants}
            initial={'hidden'}
            animate={activeList === el.name ? 'visible' : 'hidden'}
            onClick={(e) => showList(e, el.name, index)}
            className={cn(s.setting__select_item, {
              [s.down]: activeList === el.name,
            })}
            key={index}>
            <p>{el.name}</p>
            <Down />
            <ul
              ref={(el) => (refItem.current[index] = el)}
              className={cn(s.select__popUpList, {
                [s.active]: activeList === el.name,
              })}>
              {el.list.map((item, i) => {
                const name = typeof item === 'string' ? item : item.name_car;
                return (
                  <motion.div key={i} variants={variantsChildren}>
                    <li
                      onClick={() => {
                        selectedList(name, index);
                        typeof item !== 'string' && dispatch(addBrandItem(item));
                      }}>
                      {name}
                    </li>
                  </motion.div>
                );
              })}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
});
