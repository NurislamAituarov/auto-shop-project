import { motion } from 'framer-motion';
import cn from 'classnames';
import s from './Select.module.scss';

import { useOutsideAlerter } from '../../hooks/useOutsideAlerter';
import { IItemCar } from '../../types';
import { Down } from '../Svg';
import { memo, useEffect, useState } from 'react';

interface ISelect {
  name: string | undefined;
  listItems?: IItemCar[] | [];
  arr?: string[];
}

export const Select = memo(({ name, listItems, arr }: ISelect) => {
  const { ref, isShow, setIsShow } = useOutsideAlerter(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    name && setValue(name);
  }, [name]);

  function addValue(list: string) {
    setValue(list);
  }

  return (
    <motion.div
      ref={ref}
      onClick={() => setIsShow(!isShow)}
      className={cn(s.select__item, {
        [s.active]: isShow,
      })}>
      <p>{value}</p>
      <Down />
      {isShow && (
        <motion.ul
          initial={{ y: '100px' }}
          animate={{ y: '0px' }}
          transition={{ duration: 1 }}
          className={cn(s.select__showList)}>
          {listItems
            ? listItems.map((el, i) => {
                return (
                  <li onClick={() => addValue(el.name_car)} key={i}>
                    {el.name_car}
                  </li>
                );
              })
            : arr &&
              arr.map((el, i) => {
                return (
                  <li onClick={() => addValue(el)} key={i}>
                    {el}
                  </li>
                );
              })}
        </motion.ul>
      )}
    </motion.div>
  );
});
