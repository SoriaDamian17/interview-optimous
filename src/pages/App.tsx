import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import routes from '../Routes';

const Spinner = () => <div className="Spinner"></div>;

const App:React.FC = ():JSX.Element => (
    <Suspense fallback={<Spinner />}>
        <Router>
            <Switch>
                {routes.map(({ path, component }, i) => (
                    <Route
                    key={i}
                    exact
                    path={`/${path}`}
                    render={() => component}
                    />
                ))}
            </Switch>
        </Router>
    </Suspense>
);

export default App;
