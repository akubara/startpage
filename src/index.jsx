import { h, render } from 'preact';
import { StoreContext } from 'storeon/preact';

import './styles/tailwind.css';
import App from './App';
import store from './store';

render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root'),
);
