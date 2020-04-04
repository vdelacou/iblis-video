import { IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React, { FC, MouseEventHandler, ReactNode } from 'react';

/*
 * An user icon with menu
 */
export const UserMenu: FC<UserMenuProps> = (props) => {
  const renderMenu = (): ReactNode => {
    return props.menu.map((value) => {
      const actionOnclick = (): void => {
        value.action();
        props.closeMenu();
      };
      return (
        <MenuItem key={value.label} onClick={actionOnclick}>
          {value.label}
        </MenuItem>
      );
    });
  };

  return (
    <>
      <IconButton color="default" onClick={props.openMenu}>
        <AccountCircleIcon />
      </IconButton>
      <Menu
        anchorEl={props.anchorElUser}
        keepMounted
        open={Boolean(props.anchorElUser)}
        onClose={props.closeMenu}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {renderMenu()}
      </Menu>
    </>
  );
};

export interface UserMenuProps {
  /**
   * The element where the pop up open
   */
  anchorElUser: Element | null;
  /**
   * Open Menu
   */
  openMenu: MouseEventHandler;
  /**
   * Close Menu
   */
  closeMenu: () => void;
  /**
   * Describe the menu
   */
  menu: Array<{ label: string; action: () => void }>;
}
