import DashboardIcon from '@material-ui/icons/Dashboard';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { History } from 'history';
import { t } from 'i18n-js';
import React from 'react';
import { NavigatorMenuProps } from '../../../components/navigator';
import { ROUTES } from '../../../config/route-config';

/**
 * Get the menu for the dashboard in the navigator
 */
export const getDashboardMenu = (history: History): NavigatorMenuProps => {
  const getActiveIndex = (): number => {
    if (history.location.pathname.includes(ROUTES.DASHBOARD_SALES)) {
      return 0;
    }
    if (history.location.pathname.includes(ROUTES.DASHBOARD_ANALYTICS)) {
      return 1;
    }
    return -1;
  };

  return {
    categoryName: t('layouts.NavigatorLayout.getDashboardMenu.categoryName'),
    activeIndex: getActiveIndex(),
    menuList: [
      {
        name: t('layouts.NavigatorLayout.getDashboardMenu.menuList.sales'),
        icon: <DashboardIcon />,
        action: (): void => history.push(ROUTES.DASHBOARD_SALES),
      },
      {
        name: t('layouts.NavigatorLayout.getDashboardMenu.menuList.analytics'),
        icon: <EqualizerIcon />,
        action: (): void => history.push(ROUTES.DASHBOARD_ANALYTICS),
      },
    ],
  };
};
