// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  HomeOutlinedIcon
};

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //
const childrenMenu = [
  {
    id: 'home-menu',
    title: <FormattedMessage id="home-menu" />,
    type: 'item',
    url: '/board',
    icon: icons.HomeOutlinedIcon,
    breadcrumbs: false
  },
  {
    id: 'ourBlog-menu',
    title: <FormattedMessage id="ourblog-menu" />,
    type: 'item',
    url: '/our-blog',
    icon: icons.HomeOutlinedIcon,
    breadcrumbs: false
  }
];
const boardPage: NavItemType = {
  id: 'home',
  title: <FormattedMessage id="home-header-menu" />,
  type: 'group',
  children: localStorage.getItem('token') !== null ? childrenMenu : childrenMenu.filter((item) => item.id !== 'ourBlog-menu')
};

export default boardPage;
