import { Slider } from '@mui/material';
import { memo } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';
import { IValues } from '../Application';
import s from './styles.module.scss';

type IHandleChange = (event: any) => void;
interface ISliderCustom {
  value: IValues;
  setValue: (value: any) => void;
  typeSlider: string;
}

export const SliderCustom = memo(({ setValue, value, typeSlider }: ISliderCustom) => {
  const handleChange: IHandleChange = (event) => {
    setValue({ ...value, value1: event.target.value });
    setValue((value: IValues) => ({ ...value, value3: value.value1 / 10 }));
  };
  const handleChangeMonth: IHandleChange = (event) => {
    setValue({ ...value, value2: event.target.value });
  };
  const dfunc = useDebounce<typeof handleChange>(handleChange, 200);
  const dfunc2 = useDebounce<typeof handleChangeMonth>(handleChangeMonth, 200);

  return (
    <>
      {typeSlider === 'price' ? (
        <div className={s.setting__price_slider}>
          <Slider
            sx={{ color: '#CA0100' }}
            max={3000000}
            onChange={(e: any) => {
              dfunc(e);
            }}
            aria-label="Default"
          />
          <div>
            {[0, '300т', '600т', '1м', '1,3м', '1,6м', '1,9м', '2,2м', '2,6м', '3м'].map((el) => {
              return <p key={el}>{el}</p>;
            })}
          </div>
        </div>
      ) : (
        <div className={s.setting__price_slider}>
          <Slider
            sx={{ color: '#CA0100' }}
            onChange={dfunc2}
            min={6}
            max={84}
            aria-label="Default"
            defaultValue={12}
          />
          <div>
            {[6, 12, 24, 36, 48, 60, 72, 84].map((el) => {
              return <p key={el}>{el}</p>;
            })}
          </div>
        </div>
      )}
    </>
  );
});
