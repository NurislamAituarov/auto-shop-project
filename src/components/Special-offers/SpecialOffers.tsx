import { Button } from '../Btn/Button';
import s from './SpecialOffers.module.scss';
import specialOff1 from '../../Images/specialOff1.png';
import specialOff2 from '../../Images/specialOff2.png';
import specialOff3 from '../../Images/specialOff3.png';
import specialOff4 from '../../Images/specialOff4.png';
import specialOff5 from '../../Images/specialOff5.png';
import specialOff6 from '../../Images/specialOff6.png';

interface IProps {
  index: number;
  value: string;
  refSpecialOff: any;
}

export function SpecialOffers({ index, value, refSpecialOff }: IProps) {
  function getSelectedImg(index: number) {
    switch (index) {
      case 0:
        return specialOff1;
      case 1:
        return specialOff2;
      case 2:
        return specialOff3;
      case 3:
        return specialOff4;
      case 4:
        return specialOff5;
      case 5:
        return specialOff6;
      default:
        return;
    }
  }
  const img = getSelectedImg(index);
  return (
    <div
      key={index}
      ref={(el) => (refSpecialOff.current[index] = el)}
      className={s.selection__specialOff_items}>
      <div className={s.blur}></div>
      <div className={s.selection__specialOff_title}>
        <h3>{value}</h3>
        <p>1,9% по льготной ставке</p>
      </div>
      <img src={img} alt="фото семьи" />
      <Button title="Узнать больше" size="small" />
    </div>
  );
}
