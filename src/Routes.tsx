// import DemoPage from './pages/demo';

import React from 'react';

const DemoPage = React.lazy(() => import('./pages/demo'));
const NotFound = React.lazy(() => import('../pages/notFound'));

const routes = [
    {
        path: '/',
        element: <DemoPage />,
        default: false,
    },
    {
        path: '/',
        element: <NotFound />,
        default: true,
    },
];

export default routes;
