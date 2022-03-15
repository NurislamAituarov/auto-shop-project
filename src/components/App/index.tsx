import './App.css';
import Header from '../Header';
import { lazy, Suspense } from 'react';
import { Spinner } from '../Loader/Spinner';
import { Route, Routes } from 'react-router-dom';
// import { Error } from '../Error-boundary/404';
import Footer from '../Footer';

const Main = lazy(() => import('../Main'));
const AboutCompany = lazy(() => import('../About-company/AboutCompany'));
const TechnicalCenter = lazy(() => import('../Technical-center/TechnicalCenter'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Contacts = lazy(() => import('../Contacts/Contacts'));
const AllOurSelection = lazy(() => import('../Our-selection/AllOurSelection'));
const Search = lazy(() => import('../Search/Search'));
const BasicModal = lazy(() => import('../PopUp-back-call/PopUpBackCall'));

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Suspense
          fallback={
            <h2 className="App__loading">
              <Spinner />
              Loading Content...
            </h2>
          }>
          <Routes>
            <Route path="" element={<Main />} />
            <Route path="about-company" element={<AboutCompany />} />
            <Route path="technical-center" element={<TechnicalCenter />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="our-selections" element={<AllOurSelection />} />
            <Route path="search" element={<Search />} />
          </Routes>
          <BasicModal />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export default App;
