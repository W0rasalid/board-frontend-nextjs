// project import
import homePage from './home';

// types
import { NavItemType } from 'types/menu';
import monitorMenu from './monitor';

// ==============================|| MENU ITEMS ||============================== //

const permisssionMenu = () => {
  const items: NavItemType[] = [];
  if (localStorage.getItem('token') !== null) {
    items.push(homePage);

    if (localStorage.getItem('role') === 'admin') {
      items.push(monitorMenu);
    }
  }
  return items;
};

const menuItems: { items: NavItemType[] } = {
  items: permisssionMenu()
};

export default menuItems;
