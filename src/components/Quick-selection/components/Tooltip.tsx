import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

interface IProps {
  name: string;
  price: number;
}

export default function PositionedTooltips({ name, price }: IProps) {
  const priceStr = price.toString().length <= 6 ? `${price} т` : `${price} м`;

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Tooltip title={priceStr} placement="top">
          <Button sx={{ fontSize: '14px' }}>{name}</Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
