import PeopleIcon from '@material-ui/icons/People';
import { History } from 'history';
import { t } from 'i18n-js';
import React from 'react';
import { NavigatorMenuProps } from '../../../components/navigator';
import { ROUTES } from '../../../config/route-config';

/**
 * Get the menu for the settings in the navigator
 */
export const getSettingsMenu = (history: History): NavigatorMenuProps => {
  const getActiveIndex = (): number => {
    if (history.location.pathname.includes(ROUTES.SETTINGS_USER_ACTIVE)) {
      return 0;
    }
    if (history.location.pathname.includes(ROUTES.SETTINGS_USER_DISABLED)) {
      return 0;
    }
    return -1;
  };

  return {
    categoryName: t('layouts.NavigatorLayout.getSettingsMenu.categoryName'),
    activeIndex: getActiveIndex(),
    menuList: [
      {
        name: t('layouts.NavigatorLayout.getSettingsMenu.menuList.users'),
        icon: <PeopleIcon />,
        action: (): void => history.push(ROUTES.SETTINGS_USER_ACTIVE),
      },
    ],
  };
};
