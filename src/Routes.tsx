import React from 'react';

const DemoPage = React.lazy(() => import('./pages/DemoPage'));

const routes = [
    {
        component: <DemoPage />,
        path: 'file-storage',
    },
];

export default routes;
