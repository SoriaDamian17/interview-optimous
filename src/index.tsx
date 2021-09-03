import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from './pages/App';

import reportWebVitals from './reportWebVitals';
import { GlobalStyles, theme } from './shared/styles';
import ConnectionContextProvider from './context/ConnectionContext';
import DataSourceContextProvider from './context/DataSourceContext';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <GlobalStyles />
      <HelmetProvider>
        <DataSourceContextProvider>
          <ConnectionContextProvider>
            <App />
          </ConnectionContextProvider>
        </DataSourceContextProvider>
      </HelmetProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
    document.getElementById('root'),

);

reportWebVitals();
