import {
    render, screen, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {
    BrowserRouter as Router, Switch,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from '.';
import { Button } from '../../shared/styles';

// eslint-disable-next-line no-undef
describe('Home render Page', () => {
    // eslint-disable-next-line no-undef
    beforeEach(() => render(
      <HelmetProvider>
        <Router>
          <Switch>
            <Home />
          </Switch>
        </Router>
      </HelmetProvider>,
    ));

    test('renders the Not Found page', () => {
        expect(screen.getAllByText(/DataSources/i)[0]).toBeInTheDocument();
    });

    test('redirect new datasource', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click event</Button>);
        fireEvent.click(screen.getByText(/Click event/i));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
