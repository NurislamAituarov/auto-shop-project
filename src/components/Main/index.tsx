import { QuickSelection } from '../Quick-selection';
import { CustomCarousel } from '../Carousel';
import s from './Main.module.scss';
import { CarAvailable } from '../CarAvailable';

export default function Main() {
  return (
    <main className={s.main}>
      <section className={s.section}>
        <CustomCarousel />
      </section>
      <QuickSelection />
      <CarAvailable />
    </main>
  );
}
