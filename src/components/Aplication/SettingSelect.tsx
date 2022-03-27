import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import s from './Application.module.scss';
import cn from 'classnames';
import { memo, useEffect, useRef, useState } from 'react';

import { Down } from '../Svg';
import { listCarr } from '../Quick-selection';
import { IlistCarr } from '../../Type';
import { addBrandItem } from '../../Actions/action';

export interface IItem {
  name: string;
  list: IlistCarr[] | string[];
}

const blockSelect: IItem[] = [
  { name: 'Марка', list: listCarr },
  { name: 'Модель', list: ['1', '2', '3', '4'] },
  { name: 'Комплектация', list: ['Базовая', 'Средняя', 'Максимальная'] },
];

export const SettingSelect = memo(function SettingSelect() {
  const [activeList, setActiveList] = useState('');
  const [state, setState] = useState(blockSelect);
  const refItem = useRef<(HTMLUListElement | null)[]>([]);
  const dispatch = useDispatch();

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

  function selectedList(value: string, i: number) {
    const item = blockSelect.map((el, index) => {
      if (i === index) {
        el.name = value;
        return el;
      }
      return el;
    });
    setState(item);
  }

  function showList(event: any, name: string, index: number) {
    activeList === name ? setActiveList('') : setActiveList(name);
    if (refItem.current[index]?.contains(event.target)) {
      setActiveList('');
    }
  }

  return (
    <div className={s.setting__select}>
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
                const name = typeof item === 'string' ? item : item.name;
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
