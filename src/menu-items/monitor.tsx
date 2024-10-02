// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import MonitorIcon from '@mui/icons-material/Monitor';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  MonitorIcon,
  ArticleOutlinedIcon
};

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //
const childrenMenu = [
  {
    id: 'monitor-menu',
    title: <FormattedMessage id="api-monitor" />,
    type: 'item',
    url: 'https://board-nestjs.me2we-innovation.com/monitor',
    icon: icons.MonitorIcon,
    breadcrumbs: false,
    external: true,
    target: true
  },
  {
    id: 'apidoc-menu',
    title: <FormattedMessage id="api-doc" />,
    type: 'item',
    url: 'https://board-nestjs.me2we-innovation.com/api-doc',
    icon: icons.ArticleOutlinedIcon,
    breadcrumbs: false,
    external: true,
    target: true
  },
  {
    id: 'grafana-dashboard-menu',
    title: <FormattedMessage id="grafana-stats" />,
    type: 'item',
    url: 'https://worasalid.grafana.net/public-dashboards/84bf1601513d443297d2274b48b8f066',
    icon: icons.MonitorIcon,
    breadcrumbs: false,
    external: true,
    target: true
  },
  {
    id: 'log-menu',
    title: <FormattedMessage id="loki-log" />,
    type: 'item',
    url: 'https://worasalid.grafana.net/public-dashboards/04d9bb32ca0e4a609fb6cd74f23746d2',
    icon: icons.MonitorIcon,
    breadcrumbs: false,
    external: true,
    target: true
  }
];

const monitorMenu: NavItemType = {
  id: 'admin-menu',
  title: <FormattedMessage id="system-menu" />,
  type: 'group',
  children: childrenMenu
};

export default monitorMenu;
