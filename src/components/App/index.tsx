import './App.css';
import Header from '../Header';
import { lazy, Suspense } from 'react';
import { Spinner } from '../Loader/Spinner';
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer';
import { useAppSelector } from '../../Hooks/Hooks';
import { HelmetProvider } from 'react-helmet-async';

const Main = lazy(() => import('../Main'));
const AboutCompany = lazy(() => import('../About-company/AboutCompany'));
const TechnicalCenter = lazy(() => import('../Technical-center/TechnicalCenter'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Contacts = lazy(() => import('../Contacts/Contacts'));
const AllOurSelection = lazy(() => import('../Our-selection/AllOurSelection'));
const Search = lazy(() => import('../Search/Search'));
const BasicModal = lazy(() => import('../PopUp-back-call/PopUpBackCall'));
const Favorites = lazy(() => import('../Favorites/Favorites'));

function App() {
  const popUpBlock = useAppSelector((state: any) => state.reducer.popUpBackCall);
  const { brandList } = useAppSelector((state: any) => state.reducer);

  return (
    <HelmetProvider>
      <Header />
      <div className="wrapper">
        <Suspense
          fallback={
            <h2 className="App__loading">
              <Spinner />
              Loading Content...
            </h2>
          }>
          <Routes>
            <Route path="auto-shop-project" element={<Main />} />
            <Route path="about-company" element={<AboutCompany />} />
            <Route path="technical-center" element={<TechnicalCenter />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="our-selections" element={<AllOurSelection />} />
            <Route path="search" element={<Search />} />
            <Route path="favorites" element={<Favorites />} />
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
      <Footer />
    </HelmetProvider>
  );
}

export default App;
