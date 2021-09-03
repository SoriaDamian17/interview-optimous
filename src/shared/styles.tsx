import styled, { createGlobalStyle } from 'styled-components';
import { createTheme } from '@material-ui/core/styles';
import { Button as BMT } from '@material-ui/core';

export const colors = {
  white: 'rgb(255,255,255)',
  lightgreen: 'rgb(0, 171, 85)',
  green: 'rgb(0, 123, 85)',
  ligthGrey: 'rgba(250, 250, 250, 0.3)',
  ligtherGrey: 'rgb(238, 238, 238)',
};

const PRIMARY = {
  lighter: '#C8FACD',
  light: '#5BE584',
  main: '#00AB55',
  dark: '#007B55',
  darker: '#005249',
  contrastText: '#fff',
};
const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
  contrastText: '#fff',
};

export const theme = createTheme({
  palette: {
    primary: { ...PRIMARY },
    secondary: { ...SECONDARY },
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

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    alig-items: center;
`;

const Subheader = styled(Header)`
justify-content: start;
`;

const Title = styled.h1`
    font-family: 'Roboto';
    font-size: 2.5rem;
    font-weight: bold;
`;

const Subtitle = styled.h2`
    font-family: 'Roboto';
    font-size: 2rem;
    font-weight: bold;
    padding: 0 1rem 0 0;
`;

const Button = styled(BMT)`
    height: 3rem;
    color:${colors.white}!important;
    background-color:${colors.lightgreen} !important;
    font-weight: bold;
    font-size: 1.5rem;
    &:hover {
        background-color:${colors.green} !important;
    }
`;

export {
    GlobalStyles,
    Title,
    Subtitle,
    Header,
    Subheader,
    Button,
};
