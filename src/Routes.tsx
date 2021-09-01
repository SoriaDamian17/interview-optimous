// import DemoPage from './pages/demo';

import React from 'react';

const DemoPage = React.lazy(() => import('./pages/demo'));

const routes = [
    {
        path: '/',
        element: <DemoPage />,
    },
];

export default routes;
