import s from './DirectionButtons.module.scss';
import { Direction } from '../svg';
import { Tag } from '../tag';

interface IDirectionButtons {
  title: string;
  subtitle?: string;
  onPrev: () => void;
  onNext: () => void;
  link?: string;
  refSpecialOffers?: any;
}

export function DirectionButtons({
  title,
  subtitle,
  onPrev,
  onNext,
  link,
  refSpecialOffers,
}: IDirectionButtons) {
  return (
    <div ref={refSpecialOffers} className={s.selection__title}>
      <div className={s.selection__title_subtitle}>
        <h3>{title}</h3>
        {subtitle && <Tag title={subtitle} size="direction" link={link} />}
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
