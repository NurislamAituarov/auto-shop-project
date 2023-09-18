import { useEffect, useRef, useState } from 'react';
import s from './Reviews.module.scss';
import { Helmet } from 'react-helmet-async';

import { Button } from '../../components/Btn/Button';
import { useAppSelector } from '../../hooks/Hooks';
import { IItem } from '../../types';
import { CompanyTitle } from '../../components/Company-title';
import { BlockItemReview } from './components/BlockItem';

export default function Reviews() {
  const reviewUser = useAppSelector((state: any) => state.reducer.reviewsUser);
  const [state, setState] = useState<Array<IItem>>(reviewUser);
  const refBlocks = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth < 768 && window.innerWidth > 378) {
        const newArr = reviewUser.slice(0, 2);
        setState(newArr);
      }
      if (window.innerWidth < 378) {
        const newArr = reviewUser.slice(0, 1);
        setState(newArr);
      }

      if (window.innerWidth > 768) {
        const newArr = reviewUser.slice(0, 6);
        setState(newArr);
      }
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [reviewUser]);

  function showMoreReview() {
    const newArr = state.concat(state.slice(0, 6));
    setState(newArr);
  }

  return (
    <section className={s.section}>
      <Helmet>
        <title>Reviews</title>
        <meta name="description" content="Отзывы наших клиентов" />
      </Helmet>
      <CompanyTitle title="Отзывы" />
      <div className={s.block__review}>
        {state.map((item: IItem, i: number) => {
          return <BlockItemReview item={item} key={i} i={i} refElement={refBlocks} />;
        })}
      </div>
      <Button title="Показать еще" click={showMoreReview} />
    </section>
  );
}
