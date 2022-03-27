import { useEffect, useState } from 'react';
import s from './BlockItem.module.scss';
import cn from 'classnames';

import { IItem } from '../../Type';
import { Down } from '../Svg';
import reviewImg from '../Svg/review-img.svg';
import play from '../Svg/play.svg';

interface IProps {
  item: IItem;
  i: number;
  refElement: any;
}

export function BlockItemReview({ item, i, refElement }: IProps) {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    function handleClose(e: any) {
      if (index !== null && !refElement.current[index]?.contains(e.target)) {
        setIndex(null);
      }
    }
    document.addEventListener('click', handleClose, true);
    return () => {
      document.removeEventListener('click', handleClose, true);
    };
  }, [index]);

  function showMoreTitle(i: number) {
    if (index || index === 0) {
      setIndex(null);
    } else {
      setIndex(i);
    }
  }

  return (
    <div tabIndex={0} ref={(el) => (refElement.current[i] = el)} className={s.block__review_item}>
      <div className={s.block__review_img}>
        <img src={reviewImg} alt="review" />
        <img src={play} alt="play" />
      </div>
      <div
        className={cn(s.block__review_title, {
          [s.show_more]: index === i,
        })}>
        <h2>{item.name}</h2>
        {index === i ? <p>{item.title}</p> : <p>{item.title.slice(0, 204) + ' ...'}</p>}
        <div
          onClick={(e) => {
            e.stopPropagation();
            showMoreTitle(i);
          }}
          className={s.block__review_more}>
          <p>Подробнее</p>
          <div className={cn({ [s.down]: index === i })}>
            <Down color="black" />
          </div>
        </div>
      </div>
    </div>
  );
}
