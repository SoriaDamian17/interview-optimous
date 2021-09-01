import { Box, List } from '@material-ui/core';
import { matchPath, useLocation } from 'react-router-dom';
import NavItem from './NavItem';

export interface INavSectionProps {
    navConfig?: [];
}

// const NavSection: React.FC<INavSectionProps> = ({ navConfig, ...props }) => {
//     const { pathname } = useLocation();
//     // const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

//     return (
//       <Box>
//         <List disablePadding>
//           {navConfig.map((item) => (
//             <NavItem key={item.title} item={item} active={math} />
//                     ))}
//         </List>
//       </Box>
//     );
// };
const NavSection: React.FC<INavSectionProps> = () => (<div />);

export default NavSection;
