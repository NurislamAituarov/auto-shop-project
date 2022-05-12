import { Slider } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPopUpBackCall } from '../../../Actions/action';
import { Button } from '../../Btn/Button';
import s from './components.module.scss';

const initialFee = [0, 20, 40, 60, 80, 100];
const creditTerm = [6, 12, 24, 36, 48, 60, 72, 84];

export function BlockApplication() {
  const [fee, setFee] = useState(20);
  const [credit, setCredit] = useState(24);
  const dispatch = useDispatch();

  function onChange(e: any, title: string) {
    if (title === 'fee') {
      setFee(e.target.value);
    } else {
      setCredit(e.target.value);
    }
  }

  return (
    <div className={s.block__application}>
      <div className={s.block__slider}>
        <div className={s.initial__title}>
          <p>Первоначальный взнос</p> <p>{fee} %</p>
        </div>
        <div className={s.initial__slider}>
          <Slider
            sx={{ color: '#CA0100' }}
            onChange={(e) => onChange(e, 'fee')}
            defaultValue={20}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
          <div>
            {initialFee.map((el, i) => {
              return <span key={i}>{el}</span>;
            })}
          </div>
        </div>
      </div>
      <div className={s.block__slider}>
        <div className={s.initial__title}>
          <p>Срок кредита</p> <p>{credit} мес.</p>
        </div>
        <div className={s.initial__slider}>
          <Slider
            sx={{ color: '#CA0100' }}
            onChange={(e) => onChange(e, 'credit')}
            defaultValue={24}
            aria-label="Default"
            valueLabelDisplay="auto"
            min={6}
            max={84}
          />
          <div className={s.initial__slider_credit}>
            {creditTerm.map((el, i) => {
              return <span key={i}>{el}</span>;
            })}
          </div>
        </div>
      </div>
      <div className={s.block__apply}>
        <div className={s.block__apply_title}>
          <p>Ежемесячный платеж *</p>
          <div>
            <p>12 000 ₽/мес.</p>
            <span>* Предварительный расчет</span>
          </div>
        </div>
        <Button
          title="Подать заявку на кредит"
          size="big"
          click={() => dispatch(addPopUpBackCall('credit'))}
        />
      </div>
    </div>
  );
}
