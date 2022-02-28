import { Diagram, Heart, Search } from '../Svg';
import { useAppSelector } from '../../Hooks/Hooks';

interface IHeaderSelectSVG {
  width?: number | string;
  height?: number | string;
}

export function HeaderSelectSVG({ width, height }: IHeaderSelectSVG) {
  const sum = useAppSelector((state: any) => state.reducer.selected);

  return (
    <div className="header__select_svg flex header__select_mobile">
      <Heart sum={Boolean(sum.length) && sum.length} width={width} height={height} />
      <Diagram sum="18" width={width} height={height} />
      <Search />
    </div>
  );
}
