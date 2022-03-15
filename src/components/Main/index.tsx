// import QuickSelection from '../Quick-selection';
// import CustomCarousel from '../Carousel';
import s from './Main.module.scss';
// import CarAvailable from '../CarAvailable';
import { lazy, Suspense } from 'react';

const SectionSelect = lazy(() => import('../Section-selection/SectionSelection'));
const QuickSelection = lazy(() => import('../Quick-selection'));
const CarAvailable = lazy(() => import('../CarAvailable'));
const CustomCarousel = lazy(() => import('../Carousel'));

export default function Main() {
  return (
    <main className={s.main}>
      <section className={s.section}>
        <Suspense fallback={<></>}>
          <CustomCarousel />
        </Suspense>
      </section>

      <Suspense fallback={<></>}>
        <QuickSelection />
        <CarAvailable />
        <SectionSelect />
      </Suspense>
    </main>
  );
}
