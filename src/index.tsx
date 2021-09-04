import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
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
      <SnackbarProvider
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        maxSnack={3}
      >
        <HelmetProvider>
          <DataSourceContextProvider>
            <ConnectionContextProvider>
              <App />
            </ConnectionContextProvider>
          </DataSourceContextProvider>
        </HelmetProvider>
      </SnackbarProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
    document.getElementById('root'),

);

reportWebVitals();
