import { Box } from '@material-ui/core';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Logo } from '../Logo';

export interface ISidebarProps {
    isOpenSidebar: boolean,
    onCloseSidebar: () => void
}

export const Sidebar: React.FC<ISidebarProps> = ():JSX.Element => {
    const { pathname } = useLocation();

    return (
      <>
        <Box sx={{ px: 2.5, py: 3 }}>
          {/* <Box component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
            <Logo />
          </Box> */}
        </Box>
      </>
    );
};
