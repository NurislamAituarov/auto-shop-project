import './App.css';
import Header from '../header';
import { createContext, lazy, Suspense, useRef } from 'react';
import { Spinner } from '../loader/Spinner';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks/Hooks';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Up } from '../up';
import Main from '../main';
import ErrorBoundary from '../error-boundary/ErrorBoundary';

const AboutCompany = lazy(() => import('../../pages/about-company/AboutCompany'));
const TechnicalCenter = lazy(() => import('../../pages/technical-center/TechnicalCenter'));
const Reviews = lazy(() => import('../../pages/reviews/Reviews'));
const Contacts = lazy(() => import('../../pages/contacts/Contacts'));
const AllOurSelection = lazy(() => import('../our-selection/AllOurSelection'));
const Search = lazy(() => import('../../pages/search/Search'));
const BasicModal = lazy(() => import('../pop-up-back-call/PopUpBackCall'));
const Favorites = lazy(() => import('../../pages/favorites/Favorites'));
const MoreAboutCar = lazy(() => import('../../pages/more-about-car/MoreAboutCar'));
const Footer = lazy(() => import('../footer'));
const CallMe = lazy(() => import('../call-me/CallMe'));
const Taxi = lazy(() => import('../../pages/taxi'));

const scrollToSection = (elementRef: any) => {
  window.scrollTo({
    top: elementRef?.current.offsetTop,
    behavior: 'smooth',
  });
};
export const myContext = createContext(scrollToSection);

function App() {
  const popUpBlock = useAppSelector((state: any) => state.reducer.popUpBackCall);
  const { brandList } = useAppSelector((state: any) => state.reducer);
  const refCarAvailable = useRef<any>(null);
  const refSpecialOffers = useRef<any>(null);
  const refApplication = useRef<any>(null);
  const refHeader = useRef<any>(null);

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Helmet>
      <myContext.Provider value={scrollToSection}>
        <Header
          refCarAvailable={refCarAvailable}
          refSpecialOffers={refSpecialOffers}
          refApplication={refApplication}
          refHeader={refHeader}
        />
      </myContext.Provider>
      <div className="wrapper">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/">
              <Route
                path="/"
                element={
                  <Main
                    refCarAvailable={refCarAvailable}
                    refSpecialOffers={refSpecialOffers}
                    refApplication={refApplication}
                  />
                }
              />
              <Route path="about-company" element={<AboutCompany />} />
              <Route path="technical-center" element={<TechnicalCenter />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="our-selections" element={<AllOurSelection />} />
              <Route path="search" element={<Search />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="item:carId" element={<MoreAboutCar />} />
              <Route path="taxi" element={<Taxi />} />
            </Route>
            <Route path="error" element={<ErrorBoundary />} />
            <Route path="*" element={<Navigate to="error" />} />
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          {popUpBlock === 'back call' && (
            <BasicModal
              popUpBlock={popUpBlock}
              title={['Обратный звонок']}
              button="Перезвоните мне"
            />
          )}
          {popUpBlock === 'a discount' && (
            <BasicModal
              popUpBlock={popUpBlock}
              title={['Зафиксировать скидку до 300 000 ₽', `на автомобиль ${brandList.name_car}`]}
              button="Отправить"
            />
          )}
          {popUpBlock === 'offer' && (
            <BasicModal
              popUpBlock={popUpBlock}
              title={['Получить предложение']}
              button="Получить предложение"
            />
          )}
          {popUpBlock === 'credit' && (
            <BasicModal
              popUpBlock={popUpBlock}
              title={['Выгодный автокредит']}
              button="Оставить заявку"
            />
          )}
        </Suspense>
      </div>
      <Suspense fallback={<></>}>
        <Footer />
      </Suspense>

      <Suspense fallback={<></>}>
        <CallMe />
        <Up scrollToSection={scrollToSection} refHeader={refHeader} />
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
