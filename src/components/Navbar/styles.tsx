import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Link } from 'react-router-dom';
import { colors } from '../../shared/styles';

const Nav = styled(MenuList)`
    display: flex;
    flex-direction: row;
    background-color: rgba(0, 21, 41, 1);
`;

const NavItem = styled(MenuItem)`
    text-decoration: none;
    color:#fff;
    .active {
        color: ${colors.lightgreen};
    }
`;

const LinkItem = styled(Link)`
    text-decoration: none;
    color: ${colors.white};
`;

export {
    Nav,
    NavItem,
    LinkItem,
};
