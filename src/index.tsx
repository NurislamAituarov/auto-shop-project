import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ErrorBoundary from './components/Error-boundary/ErrorBoundary';
import { HashRouter } from 'react-router-dom';
// import { Error } from './components/Error-boundary/404';

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
          <App />
          {/* <Routes>
            <Route path="/" element={<App />} />
            <Route path="/:error" element={<Error />} />
          </Routes> */}
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root'),
);
