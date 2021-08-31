import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/App';

import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './shared/styles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
    document.getElementById('root'),

);

reportWebVitals();
