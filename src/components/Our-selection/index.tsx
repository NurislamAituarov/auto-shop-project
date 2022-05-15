import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Button } from '../Btn/Button';
import img1 from '../../Images/img1.png';
import img2 from '../../Images/img2.png';
import img3 from '../../Images/img3.png';
import img4 from '../../Images/img4.png';
import img5 from '../../Images/img5.png';
import img6 from '../../Images/img6.png';
import img7 from '../../Images/img7.png';
import img8 from '../../Images/img8.png';
import img9 from '../../Images/img9.png';

import s from './OurSelection.module.scss';
interface IProps {
  i: number;
  el?: string;
  refBlock?: any;
}

export function OurSelection({ i, el, refBlock = null }: IProps) {
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
  const img = getBlockImg(i);
  return (
    <>
      {refBlock ? (
        <div ref={(el) => (refBlock.current[i] = el)} key={i} className={s.selection__block_item}>
          <LazyLoadImage effect="blur" src={img} alt="картинка" />
          <div className={s.selection__block_title}>
            <p>{el}</p>
            <Button title="Посмотреть" size="small" />
          </div>
        </div>
      ) : (
        <div key={i} className={s.selection__block_item}>
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
