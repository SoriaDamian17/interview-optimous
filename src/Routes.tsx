import React from 'react';

const Home = React.lazy(() => import('./pages/Home'));
const DataSource = React.lazy(() => import('./pages/DataSource'));

const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/new-datasource',
        element: <DataSource />,
    },
];

export default routes;
