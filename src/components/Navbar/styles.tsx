import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
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

const LinkItem = styled(Link)`
    text-decoration: none;
    color: #FFF;
`;

export {
    Nav,
    NavItem,
    LinkItem,
};
