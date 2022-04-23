import s from './Main.module.scss';
import { lazy, Suspense } from 'react';
// import Partners from '../Partners';
import { Helmet } from 'react-helmet-async';

const SectionSelect = lazy(() => import('../Section-selection/SectionSelection'));
const QuickSelection = lazy(() => import('../Quick-selection'));
const CarAvailable = lazy(() => import('../CarAvailable'));
const CustomCarousel = lazy(() => import('../Carousel'));
const Application = lazy(() => import('../Aplication/Application'));
const WeAreTrusted = lazy(() => import('../We-are-trusted/WeAreTrusted'));
const ReviewHome = lazy(() => import('../Reviews/ReviewHome'));
const AboutCompanyHome = lazy(() => import('../About-company/AboutCompanyHome'));
const SimpleMap = lazy(() => import('../Maps'));
const Partners = lazy(() => import('../Partners'));

export default function Main() {
  return (
    <main className={s.main}>
      <Helmet>
        <title>Auto-Shop</title>
        <meta name="description" content="О компании" />
        <link rel="icon" href="favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      <section className={s.section}>
        <Suspense fallback={<></>}>
          <CustomCarousel />
        </Suspense>
      </section>
      <Suspense fallback={<></>}>
        <QuickSelection />
      </Suspense>

      <Suspense fallback={<></>}>
        {' '}
        <CarAvailable />
      </Suspense>
      <Suspense fallback={<></>}>
        {' '}
        <SectionSelect />
      </Suspense>
      <Suspense fallback={<></>}>
        {' '}
        <Application />
      </Suspense>
      <Suspense fallback={<></>}>
        <section className={s.section__partners}>
          <Partners />
        </section>
      </Suspense>
      <Suspense fallback={<></>}>
        {' '}
        <WeAreTrusted />
      </Suspense>
      <Suspense fallback={<></>}>
        {' '}
        <ReviewHome />
      </Suspense>
      <Suspense fallback={<></>}>
        {' '}
        <AboutCompanyHome />
      </Suspense>
      <Suspense fallback={<></>}>
        <SimpleMap />
      </Suspense>
    </main>
  );
}
