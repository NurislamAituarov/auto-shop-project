import cn from 'classnames';
interface IHeart {
  sum?: number;
  addCarSelect?: () => void;
  active?: boolean;
  width?: number | string;
  height?: number | string;
}

export function Heart({ sum, addCarSelect, active, width = 26, height = 23 }: IHeart) {
  return (
    <div
      onClick={addCarSelect}
      className={cn('wrapper__svg', {
        active_: active === true,
      })}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 26 23"
        stroke="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.7752 11.5622L13 22L23.2248 11.5622C24.3614 10.4019 25 8.82813 25 7.18718C25 3.7701 22.2864 1 18.9391 1C17.3316 1 15.79 1.65186 14.6534 2.81218L13 4.5L11.3466 2.81218C10.21 1.65186 8.66837 1 7.06092 1C3.71356 1 1 3.7701 1 7.18718C1 8.82813 1.63856 10.4019 2.7752 11.5622Z"
          stroke="#737373"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {Boolean(sum) && <p className="flex">{sum}</p>}
    </div>
  );
}
