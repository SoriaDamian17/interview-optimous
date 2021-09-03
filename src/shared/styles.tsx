import styled, { createGlobalStyle } from 'styled-components';

import { createTheme } from '@material-ui/core/styles';

export const colors = {
  white: 'rgb(255,255,255)',
  lightgreen: 'rgb(0, 171, 85)',
  green: 'rgb(0, 123, 85)',
  ligthGrey: 'rgba(250, 250, 250, 0.3)',
  ligtherGrey: 'rgb(238, 238, 238)',
};

export const theme = createTheme({
  palette: {
    secondary: {
      light: 'rgb(255, 121, 97)',
      main: 'rgb(244, 67, 54)',
      dark: 'rgb(186, 0, 13)',
      contrastText: 'rgb(255, 255, 255)',
    },
    primary: {
      light: 'rgb(96, 200, 224)',
      main: 'rgb(24, 144, 255)',
      dark: 'rgb(23, 123, 217)',
      contrastText: 'rgb(255, 255, 255)',
    },
  },

  overrides: {
    MuiFormControl: {
      marginDense: {
        marginBottom: '18px',
      },
    },
    MuiInput: {
      // IE style fixes
      root: {
        overflow: 'hidden',
      },
      input: {
        '&::-ms-clear': {
          display: 'none',
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
  },
});

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`;

const Title = styled.h1`
    font-family: 'Roboto';
    font-size: 2.5rem;
    font-weight: bold;
`;

export {
    GlobalStyles,
    Title,
};
