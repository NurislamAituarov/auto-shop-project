import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root'),
);
