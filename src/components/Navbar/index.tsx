import { Logo } from '../Logo';
import { LinkItem, Nav, NavItem } from './styles';

const NavBar:React.FC = ():JSX.Element => (
  <header>
    <Nav>
      <NavItem>
        <LinkItem to="/">
          <Logo width={50} height={50} />
        </LinkItem>
      </NavItem>
      <NavItem>
        <LinkItem to="/">
          Demo Page
        </LinkItem>
      </NavItem>
      <NavItem>
        <LinkItem to="/Not-found">
          Not Found
        </LinkItem>
      </NavItem>
    </Nav>
  </header>
  );
export default NavBar;
