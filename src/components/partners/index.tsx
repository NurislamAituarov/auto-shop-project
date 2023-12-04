import { useRef } from 'react';
import { onNext, onPrev } from '../../hooks/direction';
import { sum4 } from '../../hooks/useCustomCounter';
import { CarouselSlider } from '../carousel/Carousel-Slider';
import { DirectionButtons } from '../direction-btn/DirectionButtons';
import { SB, vtb, alfa, sberbank, sberbank2, alfa2, rost } from '../svg';

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
