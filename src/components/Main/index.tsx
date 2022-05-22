import s from './Main.module.scss';
import { lazy, memo, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Spinner } from '../Loader/Spinner';
import { ReactContentLoader } from '../Loader/ContentLoader';

const SectionSelect = lazy(() => import('../Section-selection/SectionSelection'));
const QuickSelection = lazy(() => import('../Quick-selection'));
const CarAvailable = lazy(() => import('../CarAvailable'));
const CustomCarousel = lazy(() => import('../Carousel'));
const Application = lazy(() => import('../Aplication/Application'));
const WeAreTrusted = lazy(() => import('../We-are-trusted/WeAreTrusted'));
const ReviewHome = lazy(() => import('../../Pages/Reviews/ReviewHome'));
const AboutCompanyHome = lazy(() => import('../../Pages/About-company/AboutCompanyHome'));
const SimpleMap = lazy(() => import('../Maps'));
const Partners = lazy(() => import('../Partners'));

interface IProps {
  refCarAvailable: any;
  refSpecialOffers: any;
  refApplication: any;
}

const Main = ({ refCarAvailable, refSpecialOffers, refApplication }: IProps) => {
  return (
    <main className={s.main}>
      <Helmet>
        <title>Auto-Shop</title>
        <link rel="icon" href="favicon.ico" />
      </Helmet>
      <section className={s.section}>
        <Suspense fallback={<Spinner />}>
          <CustomCarousel />
        </Suspense>
      </section>
      <Suspense fallback={<></>}>
        <QuickSelection />
      </Suspense>

      <Suspense fallback={<ReactContentLoader />}>
        <CarAvailable refCarAvailable={refCarAvailable} />
      </Suspense>

      <Suspense fallback={<></>}>
        <SectionSelect refSpecialOffers={refSpecialOffers} />
      </Suspense>
      <Suspense fallback={<></>}>
        <Application refApplication={refApplication} />
      </Suspense>
      <Suspense fallback={<></>}>
        <section className={s.section__partners}>
          <Partners />
        </section>
      </Suspense>
      <Suspense fallback={<></>}>
        <WeAreTrusted />
      </Suspense>
      <Suspense fallback={<></>}>
        <ReviewHome />
      </Suspense>
      <Suspense fallback={<></>}>
        <AboutCompanyHome />
      </Suspense>
      <Suspense fallback={<></>}>
        <SimpleMap />
      </Suspense>
    </main>
  );
};

export default memo(Main);
