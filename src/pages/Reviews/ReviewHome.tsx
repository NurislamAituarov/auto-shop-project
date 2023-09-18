import { useRef } from 'react';
import { useAppSelector } from '../../hooks/Hooks';
import { IItem } from '../../types';
import { BlockItemReview } from './components/BlockItem';
import s from './ReviewHome.module.scss';

export default function ReviewHome() {
  const reviewUser = useAppSelector((state: any) => state.reducer.reviewsUser);
  const refBlocks = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className={s.section}>
      <h2>Отзывы</h2>
      <div>
        <div className={s.review__wrapper}>
          {reviewUser &&
            reviewUser.slice(0, 3).map((item: IItem, i: number) => {
              return <BlockItemReview key={i} item={item} i={i} refElement={refBlocks} />;
            })}
        </div>
      </div>
    </section>
  );
}
