import { useMediaQuery, useTheme } from '@material-ui/core';
import { t } from 'i18n-js';
import React, { FC } from 'react';
import { Navigator } from '../../components/navigator';
import { useGetMenu, useGetWorkspace } from './hooks';

/**
 * The layout for the navigator
 */
export const NavigatorLayout: FC<NavigatorLayoutProps> = (props) => {
  const theme = useTheme();
  const moreThanSm = useMediaQuery(theme.breakpoints.up('sm'));
  const [menu] = useGetMenu();
  const [workspaceTitle, workspaceStatusLabel, workspaceAction, workspaceMenuActive] = useGetWorkspace();

  return (
    <Navigator
      open={moreThanSm ? props.open : !props.open}
      onClose={props.toggleNavigator}
      variant={moreThanSm ? 'persistent' : 'temporary'}
      mainTitle={t('layouts.NavigatorLayout.Navigator.mainTitle')}
      workspaceTitle={workspaceTitle}
      workspaceSettingsTooltip={t('layouts.NavigatorLayout.Navigator.workspaceSettingsTooltip')}
      workspaceStatusLabel={workspaceStatusLabel}
      workspaceAction={workspaceAction}
      workspaceMenuActive={workspaceMenuActive}
      menuListCategory={menu}
    />
  );
};

export interface NavigatorLayoutProps {
  /**
   * If true, the navigator is open
   */
  open: boolean;
  /**
   * Action to launch when the navigator requests to be closed
   */
  toggleNavigator: () => void;
}
