import { h, render } from 'preact';
import { StoreContext } from 'storeon/preact';
import { Router } from 'wouter-preact';

import 'react-toastify/dist/ReactToastify.css';

import './styles/tailwind.css';
import App from './App';
import useHashRouter from './hooks/useHashRouter';
import store from './store';

const { SNOWPACK_PUBLIC_BASEPATH } = import.meta.env;

render(
  <StoreContext.Provider value={store}>
    <Router base={SNOWPACK_PUBLIC_BASEPATH || '/'} hook={useHashRouter}>
      <App />
    </Router>
  </StoreContext.Provider>,
  document.getElementById('root'),
);
