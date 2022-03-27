import { useRef } from 'react';
import { onNext, onPrev } from '../../Hooks/direction';
import { sum4 } from '../../Hooks/useCustomCounter';
import { CarouselSlider } from '../Carousel/Carousel-Slider';
import { DirectionButtons } from '../Direction-btn/DirectionButtons';
import { SB, vtb, alfa, sberbank, sberbank2, alfa2, rost } from '../Svg';

const listPartners = [SB, vtb, alfa, sberbank, sberbank2, alfa2, rost];

export default function Partners() {
  const refPartners = useRef<(HTMLDivElement | any)[]>([]);

  return (
    <>
      <DirectionButtons
        title="Банки-партнеры"
        onNext={() => onNext('partners', refPartners, sum4)}
        onPrev={() => onPrev('partners', refPartners, sum4)}
      />
      <CarouselSlider listBlock={listPartners} refBlock={refPartners} />
    </>
  );
}
