import {
 act, render, fireEvent, screen, cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { SnackbarProvider } from 'notistack';
import Login from '.';

// eslint-disable-next-line no-undef
describe('Login render Page', () => {
  // eslint-disable-next-line no-undef
  beforeEach(() => render(
    <HelmetProvider>
      <SnackbarProvider>
        <Login />
      </SnackbarProvider>
    </HelmetProvider>,
  ));

  // eslint-disable-next-line no-undef
  afterEach(cleanup);

    test('renders the Login page', () => {
        expect(screen.getAllByText(/Login Form/i)[0]).toBeInTheDocument();
    });

    test('render 2 input components', () => {
        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    test('renders a submit button', () => {
        expect(screen.getByRole('button', { name: 'Sign in' })).toBeInTheDocument();
    });

    test('should submit when form inputs contain text', async () => {
        await act(async () => {
          fireEvent.change(screen.getByLabelText(/username/i), {
            target: { value: 'dsoria' },
          });

          fireEvent.change(screen.getByLabelText(/password/i), {
            target: { value: 'dsoria123' },
          });
        });

        await act(async () => {
          fireEvent.submit(screen.getByTestId('form'));
        });

        expect(screen.queryByText('Username or Password are incorrects!')).not.toBeInTheDocument();
    });
});
