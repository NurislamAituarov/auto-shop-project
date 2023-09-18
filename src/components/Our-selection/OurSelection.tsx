import { LazyLoadImage } from 'react-lazy-load-image-component';

import { img1, img2, img3, img4, img5, img6, img7, img8, img9 } from '../../assets';
import { Button } from '../Btn/Button';
import s from './OurSelection.module.scss';

interface IOurSelection {
  i: number;
  el?: string;
  refBlock?: any;
}

function getBlockImg(index: number) {
  switch (index) {
    case 0:
      return img1;
    case 1:
      return img2;
    case 2:
      return img3;
    case 3:
      return img4;
    case 4:
      return img5;
    case 5:
      return img6;
    case 6:
      return img7;
    case 7:
      return img8;
    case 8:
      return img9;
    default:
      return img3;
  }
}

export function OurSelection({ i, el, refBlock = null }: IOurSelection) {
  const img = getBlockImg(i);
  return (
    <>
      {refBlock ? (
        <div ref={(el) => (refBlock.current[i] = el)} className={s.selection__block_item}>
          <LazyLoadImage effect="blur" src={img} alt="картинка" />
          <div className={s.selection__block_title}>
            <p>{el}</p>
            <Button title="Посмотреть" size="small" />
          </div>
        </div>
      ) : (
        <div className={s.selection__block_item}>
          <LazyLoadImage effect="blur" src={img} alt="картинка" />
          <div className={s.selection__block_title}>
            <p>{el}</p>
            <Button title="Посмотреть" size="small" />
          </div>
        </div>
      )}
    </>
  );
}
