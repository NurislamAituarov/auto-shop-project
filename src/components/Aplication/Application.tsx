import s from './Application.module.scss';
import { useState } from 'react';
import { useAppSelector } from '../../Hooks/Hooks';

import { SettingSelect } from './SettingSelect';
import { FillForm } from './components/FillForm';
import { Price } from './components/Price';
import { View } from './components/View';

export interface IValues {
  value1: number;
  value2: number;
  value3: number;
  name: string;
}

const values = {
  value1: 0,
  value2: 12,
  value3: 0,
  name: '',
};

export default function Application({ refApplication }: any) {
  const { brandList } = useAppSelector((state: any) => state.reducer);
  const [value, setValue] = useState<IValues>(values);

  return (
    <section ref={refApplication} className={s.section}>
      <div className={s.wrapper}>
        <h2>Заявка на автокредит</h2>
        <div className={s.wrapper__settings}>
          <div className={s.setting}>
            <SettingSelect />
            <View brandList={brandList} value={value} />
            <hr className={s.hr__mobile} />
            <Price value={value} setValue={setValue} />
          </div>
          <hr className={s.hr} />
          <FillForm setValue={setValue} value={value} brandList={brandList} />
        </div>
      </div>
    </section>
  );
}
