import { NavLink } from 'react-router-dom';

import { Diagram, Heart, Search } from '../../Svg';
import { useAppSelector } from '../../../Hooks/Hooks';
import { IItemCar } from '../../../Type';

interface IHeaderSelectSVG {
  width?: number | string;
  height?: number | string;
}

export function HeaderSelectSVG({ width, height }: IHeaderSelectSVG) {
  const listItems = useAppSelector<Array<IItemCar>>((state: any) => state.reducer.listItems);
  const sumFilter = listItems.length && listItems.filter((el) => el.active !== 'false');

  return (
    <div className="header__select_svg flex header__select_mobile">
      <NavLink to="auto-shop-project/favorites">
        <Heart sum={sumFilter && sumFilter.length} width={width} height={height} />
      </NavLink>
      <Diagram sum="18" width={width} height={height} />
      <Search link={true} />
    </div>
  );
}
