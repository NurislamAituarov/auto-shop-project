import './Slider.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';
import { addPriceCar } from '../../Actions/action';

function valuetext(value: number) {
  return `${value}°C`;
}

interface Imark {
  value: number;
  label: string;
}
type Ivalue = number[];
type IHandleChange = (event: any, newValue: number | any) => void;

export default function RangeSlider() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<Ivalue>([0, 500]);

  const handleChange: IHandleChange = (event, newValue) => {
    console.log('render');
    setValue(newValue);
    dispatch(addPriceCar(newValue));
  };
  const mark: Imark[] = [
    { value: 0, label: '0' },
    { value: 300000, label: '300т' },
    { value: 600000, label: '600т' },
    { value: 900000, label: '900т' },
    { value: 1200000, label: '1.2м' },
    { value: 1500000, label: '1.5м' },
    { value: 1800000, label: '1,8м' },
    { value: 2100000, label: '2.1м' },
    { value: 2400000, label: '2.4м' },
    { value: 2700000, label: '2,7м' },
    { value: 3000000, label: '3м' },
  ];

  const debounce = <F extends (...args: any) => any>(func: F, waitFor: number) => {
    let timeout: any;
    return function (...args: any) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), waitFor);
    };
  };

  const dfunc = debounce<typeof handleChange>(handleChange, 100);

  return (
    <Box sx={{ width: '100%' }}>
      <div className="price flex">
        <p>Цена</p>
        <p>
          {value[0]} {value[0] < 1000000 ? <span>т</span> : <span>м</span>}-{value[1]}{' '}
          {value[1] < 1000000 ? <span>т</span> : <span>м</span>}
        </p>
      </div>
      <div className="slider">
        <Slider
          // color="rgba(202, 1, 0, 1)"
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={dfunc}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          step={300000}
          marks={mark}
          max={3000000}
          // valueLabelFormat={(value) => <div>{numFormatter(value)}</div>}
        />
      </div>
    </Box>
  );
}
