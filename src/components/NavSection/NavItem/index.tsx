import { ListItem } from '@material-ui/core';

export interface INavItemProps {
    item: object,
    active: () => void
}

const NavItem: React.FC<INavItemProps> = ({ item, active }) => (
  <>
    <ListItem />
  </>
    );

export default NavItem;
