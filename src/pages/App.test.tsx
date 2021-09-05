import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history'
import {Link, Router, Switch, Route, useLocation} from 'react-router-dom'

const Login = () => <div>You are on the login page</div>
const Home = () => <div>You are home</div>
const DataSource = () => <div>You are on the Datasource page</div>
const NotFound = () => <div>Not Found</div>

export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}

const AppMock = () => (
    <div>
      <Link to="/">Login</Link>
  
      <Link to="/Home">Home</Link>
  
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
  
        <Route path="/Home">
          <Home />
        </Route>

        <Route path="/new-datasource">
          <DataSource />
        </Route>
  
        <Route>
          <NotFound />
        </Route>
      </Switch>
  
      <LocationDisplay />
    </div>
);

test('full app rendering/navigating', () => {
    const history = createMemoryHistory()
    render(
        <Router history={history}>
            <AppMock />
        </Router>,
    )

    expect(screen.getByText(/You are on the login page/i)).toBeInTheDocument();

    const leftClick = {button: 0}
    userEvent.click(screen.getByText(/Home/i), leftClick)

    expect(screen.getByText(/You are home/i)).toBeInTheDocument();
});

test('rendering a component that uses useLocation', () => {
    const history = createMemoryHistory()
    const route = '/Home'
    history.push(route)
    render(
      <Router history={history}>
        <LocationDisplay />
      </Router>,
    )
  
    expect(screen.getByTestId('location-display')).toHaveTextContent(route)
  })
