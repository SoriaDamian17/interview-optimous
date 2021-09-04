import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from '../Routes';
import { AuthApi } from '../service/Auth';

const Spinner = () => <div className="Spinner" />;
const NotFound = React.lazy(() => import('./notFound'));

AuthApi.post('/auth/token', {
  username: 'dsoria',
  password: 'dsoria123',
}).then((resp) => localStorage.setItem('NXtoken', resp.data.data.token));

const App:React.FC = ():JSX.Element => (
  <Suspense fallback={<Spinner />}>
    <Router>
      <Switch>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            exact
            path={`/${path}`}
            render={() => element}
          />
                ))}
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Suspense>
);

export default App;
