import { useEffect, useState } from 'react';
import s from './Rating.module.scss';
import cn from 'classnames';

export const Rating = () => {
  const [rating, setRating] = useState(4);
  const [arrayRating, setArrayRating] = useState(new Array(5).fill(<></>));
  const [assessment, setAssessment] = useState(0);

  useEffect(() => {
    setAssessment(rating);
    constructorRating(rating);
  }, [rating]);

  function changeDisplay(num: number) {
    constructorRating(num);
  }

  function onClick(num: number) {
    setRating(num);
  }

  const constructorRating = (currentRating: number) => {
    const updatedArray = arrayRating.map((item, i) => {
      return (
        <svg
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
          className={cn({
            [s.icon]: currentRating > i,
          })}
          key={i}
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="grey"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M6.54894 0.927048C6.8483 0.00573778 8.1517 0.0057404 8.45106 0.927051L9.40837 3.87336C9.54224 4.28538 9.9262 4.56434 10.3594 4.56434H13.4574C14.4261 4.56434 14.8289 5.80395 14.0451 6.37336L11.5389 8.19427C11.1884 8.44892 11.0417 8.90028 11.1756 9.31231L12.1329 12.2586C12.4323 13.1799 11.3778 13.946 10.5941 13.3766L8.08778 11.5557C7.7373 11.3011 7.2627 11.3011 6.91221 11.5557L4.40594 13.3766C3.62222 13.946 2.56774 13.1799 2.8671 12.2586L3.82441 9.3123C3.95828 8.90028 3.81162 8.44892 3.46114 8.19427L0.954859 6.37335C0.171145 5.80395 0.573923 4.56434 1.54265 4.56434H4.64057C5.0738 4.56434 5.45776 4.28538 5.59163 3.87336L6.54894 0.927048Z" />
        </svg>
      );
    });
    setArrayRating(updatedArray);
  };

  function getPercentage() {
    switch (assessment) {
      case 1:
        return '20%';
      case 2:
        return '40%';
      case 3:
        return '70%';
      case 4:
        return '90%';
      case 5:
        return '100%';
    }
  }

  return (
    <>
      <div className={s.item__rating}>
        <div className={s.item__rating_title}>
          <span>Рекомендуют {getPercentage()}</span>
          <div className={cn(s.wrapper__rating)}>
            {arrayRating.map((item, i) => {
              return <span key={i}>{item}</span>;
            })}
          </div>
        </div>
        <p>{assessment}</p>
      </div>
    </>
  );
};
