import {
    render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {
    BrowserRouter as Router, Switch,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from '.';

// eslint-disable-next-line no-undef
describe('Not Found render Page', () => {
    // eslint-disable-next-line no-undef
    beforeEach(() => render(
      <HelmetProvider>
        <Router>
          <Switch>
            <NotFound />
          </Switch>
        </Router>
      </HelmetProvider>,
    ));

    test('renders the Not Found page', () => {
        expect(screen.getAllByText(/Sorry, page not found!/i)[0]).toBeInTheDocument();
    });
});
