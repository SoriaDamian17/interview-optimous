import { useLocation } from 'react-router-dom';
import { Logo } from '../Logo';
import { LinkItem, Nav, NavItem } from './styles';

const NavBar:React.FC = ():JSX.Element => {
  const { pathname } = useLocation();
  const splitLocation = pathname.split('/');

  return (
    <header>
      <Nav>
        <NavItem>
          <LinkItem to="/Home">
            <Logo width={30} height={30} />
          </LinkItem>
        </NavItem>
        <NavItem>
          <LinkItem to="/Home" className={splitLocation[1] === 'Home' ? 'active' : ''}>
            Home
          </LinkItem>
        </NavItem>
        <NavItem>
          <LinkItem
            to="/not-found"
            className={splitLocation[1] === 'not-found' ? 'active' : ''}
          >
            Not Found
          </LinkItem>
        </NavItem>
      </Nav>
    </header>
  );
};
export default NavBar;
