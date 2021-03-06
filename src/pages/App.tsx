import React, { Suspense } from 'react';
import {
 Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import routes from '../Routes';

const Spinner = () => <div className="Spinner" />;
const NotFound = React.lazy(() => import('./notFound'));

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
