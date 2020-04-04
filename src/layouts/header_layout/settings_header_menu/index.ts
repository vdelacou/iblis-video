import { History } from 'history';
import { t } from 'i18n-js';
import { MenuNavigationProps } from '../../../components/menu_navigation';
import { ROUTES } from '../../../config/route-config';

/**
 * Get the menu for the settings in the header
 */
export const getSettingsHeaderMenu = (history: History): MenuNavigationProps => {
  const getActiveIndex = (): number => {
    if (history.location.pathname.includes(ROUTES.SETTINGS_USER_ACTIVE)) {
      return 0;
    }
    if (history.location.pathname.includes(ROUTES.SETTINGS_USER_DISABLED)) {
      return 1;
    }
    return -1;
  };

  return {
    activeIndex: getActiveIndex(),
    subMenu: [
      {
        label: t('layouts.HeaderLayout.getSettingsHeaderMenu.activeUsers'),
        action: (): void => history.push(ROUTES.SETTINGS_USER_ACTIVE),
      },
      {
        label: t('layouts.HeaderLayout.getSettingsHeaderMenu.disabledUsers'),
        action: (): void => history.push(ROUTES.SETTINGS_USER_DISABLED),
      },
    ],
  };
};
