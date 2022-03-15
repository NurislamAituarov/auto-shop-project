import s from './DirectionButtons.module.scss';
import { Direction } from '../Svg';
import { Tag } from '../Tag';

interface IDirectionButtons {
  title: string;
  subtitle?: string;
  onPrev: () => void;
  onNext: () => void;
  link?: string;
}

export function DirectionButtons({ title, subtitle, onPrev, onNext, link }: IDirectionButtons) {
  return (
    <div className={s.selection__title}>
      <div className={s.selection__title_subtitle}>
        <h3>{title}</h3>
        {subtitle && <Tag title={subtitle} size="m" link={link} />}
      </div>
      <div className={s.selection__title_btn}>
        <button onClick={onPrev}>
          <Direction />
        </button>
        <button onClick={onNext}>
          <Direction />
        </button>
      </div>
    </div>
  );
}
