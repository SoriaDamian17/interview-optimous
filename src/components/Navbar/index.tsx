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
          <LinkItem to="/">
            <Logo width={50} height={50} />
          </LinkItem>
        </NavItem>
        <NavItem>
          <LinkItem to="/" className={splitLocation[1] === '' ? 'active' : ''}>
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
