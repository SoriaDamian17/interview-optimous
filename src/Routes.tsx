import React from 'react';

const Login = React.lazy(() => import('./pages/Login'));
const Home = React.lazy(() => import('./pages/Home'));
const DataSource = React.lazy(() => import('./pages/DataSource'));

const routes = [
    {
        path: '/',
        element: <Login />,
    },
    {
        path: 'home',
        element: <Home />,
    },

    {
        path: 'new-datasource',
        element: <DataSource />,
    },
];

export default routes;
