import { Box } from '@material-ui/core';
import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

import NavBar from '../Navbar';

export interface ILayoutProps {
    title: string;
    children: ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ title, children }):JSX.Element => (
  <Box>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <NavBar />
    {children}
  </Box>
    );

export default Layout;
