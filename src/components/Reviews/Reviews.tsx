import { CompanyTitle } from '../Company-title';
import { Down } from '../Svg';
import s from './Reviews.module.scss';
import reviewImg from '../Svg/review-img.svg';
import play from '../Svg/play.svg';
import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { Button } from '../Btn/Button';
import { useAppSelector } from '../../Hooks/Hooks';
import { IItem } from '../../Type';

export default function Reviews() {
  const reviewUser = useAppSelector((state: any) => state.reducer.reviewsUser);
  const [state, setState] = useState<Array<IItem>>(reviewUser);
  const refBlockReview = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number | null>(null);

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
  }, []);

  function showMoreTitle(i: number) {
    if (index || index === 0) {
      setIndex(null);
    } else {
      setIndex(i);
    }
  }

  function showMoreReview() {
    const newArr = state.concat(state.slice(0, 6));
    setState(newArr);
  }

  return (
    <section className={s.section}>
      <CompanyTitle title="Отзывы" />

      <div className={s.block__review}>
        {state.map((item: IItem, i) => {
          return (
            <div tabIndex={0} key={i} className={s.block__review_item}>
              <div className={s.block__review_img}>
                <img src={reviewImg} alt="review" />
                <img src={play} alt="play" />
              </div>
              <div
                ref={refBlockReview}
                className={cn(s.block__review_title, {
                  [s.show_more]: index === i,
                })}>
                <h2>{item.name}</h2>
                {index === i ? <p>{item.title}</p> : <p>{item.title.slice(0, 204) + ' ...'}</p>}
                <div onClick={() => showMoreTitle(i)} className={s.block__review_more}>
                  <p>Подробнее</p>
                  <div className={cn({ [s.down]: index === i })}>
                    <Down color="black" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Button title="Показать еще" click={showMoreReview} />
    </section>
  );
}
