import { t } from 'i18n-js';
import { MouseEvent, useState } from 'react';
import { UserMenuProps } from '../../../components/user_menu';

/**
 * Get the menu for the user in the header
 *
 *  @returns an array with in order:
 *      - the menu for the user
 */
export const useGetUserHeaderMenu = (): [UserMenuProps] => {
  const [anchorElUser, setAnchorElUser] = useState<null | Element>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const settingsAction = (): void => {
    // eslint-disable-next-line no-alert
    alert('You need to implement it');
  };

  const logoutAction = (): void => {
    // eslint-disable-next-line no-alert
    alert('You need to implement it');
  };

  const userMenuProps: UserMenuProps = {
    anchorElUser,
    closeMenu: handleCloseUserMenu,
    openMenu: handleOpenUserMenu,
    menu: [
      { label: t('layouts.HeaderLayout.useGetUserHeaderMenu.settings'), action: settingsAction },
      { label: t('layouts.HeaderLayout.useGetUserHeaderMenu.logout'), action: logoutAction },
    ],
  };

  return [userMenuProps];
};
