import s from './QuickSelection.module.scss';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface ISelected {
  title: string;
  items: string[];
  width?: number;
}

export function Selected({ title, items, width = 237 }: ISelected) {
  const [value, setValue] = React.useState('');

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div className={s.block__selected_item}>
      <FormControl sx={{ width: width }}>
        <InputLabel id="demo-simple-select-helper-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          label={title}
          onChange={handleChange}>
          <MenuItem value="">
            <em>{title}</em>
          </MenuItem>
          {items.map((el, i) => {
            return (
              <MenuItem key={i} value={i}>
                {el}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
