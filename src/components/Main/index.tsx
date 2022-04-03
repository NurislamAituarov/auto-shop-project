import s from './Main.module.scss';
import { lazy, Suspense } from 'react';
import Partners from '../Partners';

const SectionSelect = lazy(() => import('../Section-selection/SectionSelection'));
const QuickSelection = lazy(() => import('../Quick-selection'));
const CarAvailable = lazy(() => import('../CarAvailable'));
const CustomCarousel = lazy(() => import('../Carousel'));
const Application = lazy(() => import('../Aplication/Application'));
const WeAreTrusted = lazy(() => import('../We-are-trusted/WeAreTrusted'));
const ReviewHome = lazy(() => import('../Reviews/ReviewHome'));
const AboutCompanyHome = lazy(() => import('../About-company/AboutCompanyHome'));
const SimpleMap = lazy(() => import('../Maps'));

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
        <Application />
        <section className={s.section__partners}>
          <Partners />
        </section>
        <WeAreTrusted />
        <ReviewHome />
        <AboutCompanyHome />
        <SimpleMap />
      </Suspense>
    </main>
  );
}
