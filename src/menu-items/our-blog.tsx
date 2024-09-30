// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  EditNoteOutlinedIcon
};

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const ourBlogPage: NavItemType = {
  id: 'ourBlog-menu',
  title: <FormattedMessage id="ourblog-menu" />,
  type: 'group',
  url: '/board',
  icon: icons.EditNoteOutlinedIcon
};

export default ourBlogPage;
