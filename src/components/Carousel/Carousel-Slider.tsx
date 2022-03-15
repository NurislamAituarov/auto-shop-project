import s from './CarouselSlider.module.scss';
import cn from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface IProps {
  listBlock: any[];
  refBlock: any;
  className?: string;
}

export function CarouselSlider({ listBlock, refBlock, className }: IProps) {
  return (
    <div
      className={cn({
        [s.block]: className !== 'company__carfoto',
        [s.company__carfoto]: className === 'company__carfoto',
      })}>
      <div
        className={cn({
          [s.block__wrapper]: className !== 'company__carfoto',
          [s.company__carfoto_wrapper]: className === 'company__carfoto',
        })}>
        {listBlock.map((partner, i) => {
          return (
            <div
              ref={(el) => (refBlock.current[i] = el)}
              key={i}
              className={cn({
                [s.block__item]: className !== 'company__carfoto',
                [s.company__carfoto_item]: className === 'company__carfoto',
              })}>
              <LazyLoadImage effect="blur" src={partner} alt="банк" width="168" height="50" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
