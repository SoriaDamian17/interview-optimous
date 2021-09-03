import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from './pages/App';

import reportWebVitals from './reportWebVitals';
import { GlobalStyles, theme } from './shared/styles';
import ConnectionContextProvider from './context/ConnectionContext';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <GlobalStyles />
      <HelmetProvider>
        <ConnectionContextProvider>
          <App />
        </ConnectionContextProvider>
      </HelmetProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
    document.getElementById('root'),

);

reportWebVitals();
