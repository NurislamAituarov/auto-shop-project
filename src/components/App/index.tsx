import './App.css';
import Header from '../Header';
import { lazy, Suspense } from 'react';
import { Spinner } from '../Loader/Spinner';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../Hooks/Hooks';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Up } from '../Up';

const Main = lazy(() => import('../Main'));
const AboutCompany = lazy(() => import('../About-company/AboutCompany'));
const TechnicalCenter = lazy(() => import('../Technical-center/TechnicalCenter'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Contacts = lazy(() => import('../Contacts/Contacts'));
const AllOurSelection = lazy(() => import('../Our-selection/AllOurSelection'));
const Search = lazy(() => import('../Search/Search'));
const BasicModal = lazy(() => import('../PopUp-back-call/PopUpBackCall'));
const Favorites = lazy(() => import('../Favorites/Favorites'));
const MoreAboutCar = lazy(() => import('../MoreAboutCar/MoreAboutCar'));
const Footer = lazy(() => import('../Footer'));
const CallMe = lazy(() => import('../Call-me/CallMe'));
const Taxi = lazy(() => import('../Taxi'));

function App() {
  const popUpBlock = useAppSelector((state: any) => state.reducer.popUpBackCall);
  const { brandList } = useAppSelector((state: any) => state.reducer);

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Helmet>
      <Header />
      <div className="wrapper">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="auto-shop-project" element={<Main />} />
            <Route path="auto-shop-project/about-company" element={<AboutCompany />} />
            <Route path="auto-shop-project/technical-center" element={<TechnicalCenter />} />
            <Route path="auto-shop-project/reviews" element={<Reviews />} />
            <Route path="auto-shop-project/contacts" element={<Contacts />} />
            <Route path="auto-shop-project/our-selections" element={<AllOurSelection />} />
            <Route path="auto-shop-project/search" element={<Search />} />
            <Route path="auto-shop-project/favorites" element={<Favorites />} />
            <Route path="auto-shop-project/:carId" element={<MoreAboutCar />} />
            <Route path="auto-shop-project/taxi" element={<Taxi />} />
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
        </Suspense>
      </div>
      <Suspense fallback={<></>}>
        <Footer />
      </Suspense>

      <Suspense fallback={<></>}>
        <CallMe />
        <Up />
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
