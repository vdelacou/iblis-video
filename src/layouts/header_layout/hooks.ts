import { t } from 'i18n-js';
import { useHistory } from 'react-router';
import { MenuNavigationProps } from '../../components/menu_navigation';
import { UserMenuProps } from '../../components/user_menu';
import { ROUTES } from '../../config/route-config';
import { getSettingsHeaderMenu } from './settings_header_menu';
import { useGetUserHeaderMenu } from './user_menu';

/**
 * Get the header menu
 *
 * @returns an array with in order:
 *      - the header title for the content page
 *      - the menu for the user
 *      - the menu to display, empty array if no menu
 */
export const useGetHeaderMenu = (): [string, UserMenuProps, MenuNavigationProps] => {
  const history = useHistory();
  const [userMenuProps] = useGetUserHeaderMenu();

  const getHeaderTitle = (): string => {
    if (history.location.pathname.includes(ROUTES.DASHBOARD_SALES) || history.location.pathname.includes(ROUTES.DASHBOARD_ANALYTICS)) {
      return t('layouts.HeaderLayout.useGetHeaderMenu.getHeaderTitle.dashboard');
    }
    if (history.location.pathname.includes(ROUTES.SETTINGS_USER_ACTIVE) || history.location.pathname.includes(ROUTES.SETTINGS_USER_DISABLED)) {
      return t('layouts.HeaderLayout.useGetHeaderMenu.getHeaderTitle.users');
    }
    return '';
  };

  const subMenu = (): MenuNavigationProps => {
    if (history.location.pathname.includes(ROUTES.SETTINGS_USER_ACTIVE) || history.location.pathname.includes(ROUTES.SETTINGS_USER_DISABLED)) {
      return getSettingsHeaderMenu(history);
    }
    return { activeIndex: -1, subMenu: [] };
  };

  return [getHeaderTitle(), userMenuProps, subMenu()];
};
