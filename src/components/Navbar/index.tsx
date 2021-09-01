import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const Nav = styled(MenuList)`
    display: flex;
    flex-direction: row;
    background-color: rgba(0, 21, 41, 1);
`;

const NavItem = styled(MenuItem)`
    text-decoration: none;
    color:#fff;
`;

const useStyles = makeStyles(() => ({
  menu: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 21, 41, 1)',
  },
  menuLinks: {
    textDecoration: 'none',
    color: 'white',
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <header>
      <Nav>
        <NavItem>
          <Link className={classes.menuLinks} to="/">
            Demo Page
          </Link>
        </NavItem>
        <NavItem>
          <Link className={classes.menuLinks} to="/Not-found">
            Not Found
          </Link>
        </NavItem>
      </Nav>
    </header>
  );
}

export default NavBar;
