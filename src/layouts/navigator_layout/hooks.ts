import { t } from 'i18n-js';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { NavigatorMenuProps } from '../../components/navigator';
import { WORSPACE_STATUS } from '../../config';
import { getDashboardMenu } from './dashboard_menu';

/**
 * Get the menu for the user button
 *
 * @returns an array with in order:
 *      - an array with all the menus
 */
export const useGetMenu = (): [Array<NavigatorMenuProps>] => {
  const history = useHistory();

  const menu = [getDashboardMenu(history)];

  return [menu];
};

/**
 * Manage the workspace to display
 *
 * @returns an array with in order:
 *      - a string with the title of the workspace
 *      - a string with the status of the workspace
 *      - a function when click on the workspace button
 *      - a boolean to show the workspace button as active
 */
export const useGetWorkspace = (): [string, string, () => void, boolean] => {
  const [active, setActive] = useState(false);

  const workspace = {
    title: 'My Workspace',
    status: WORSPACE_STATUS.TRIAL,
  };

  const workspaceAction = (): void => {
    setActive(!active);
    // eslint-disable-next-line no-alert
    alert('You need to implement it');
  };

  const statusLabel = (): string => {
    switch (workspace.status) {
      case WORSPACE_STATUS.PAID: {
        return t('layouts.NavigatorLayout.useGetWorkspace.workspaceStatusPaidLabel');
      }
      case WORSPACE_STATUS.TRIAL: {
        return t('layouts.NavigatorLayout.useGetWorkspace.workspaceStatusTrialLabel');
      }
      case WORSPACE_STATUS.UNPAID: {
        return t('layouts.NavigatorLayout.useGetWorkspace.workspaceStatusUnpaidLabel');
      }
      default: {
        return t('layouts.NavigatorLayout.useGetWorkspace.workspaceStatusUnpaidLabel');
      }
    }
  };

  return [workspace.title, statusLabel(), workspaceAction, active];
};
