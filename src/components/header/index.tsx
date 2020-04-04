import { Box, Hidden, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { FC } from 'react';
import { MenuNavigation, MenuNavigationProps } from '../menu_navigation';
import { UserMenu, UserMenuProps } from '../user_menu';

/*
 * The Header Component
 */
export const Header: FC<HeaderProps> = (props) => {
  return (
    <>
      <Toolbar disableGutters>
        <Box display="flex" pl={1.5} flexGrow={1} alignItems="center">
          {/* Hide toggle navigator button on big screen */}
          <Hidden mdUp>
            <IconButton color="inherit" onClick={props.toggleNavigator}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Box pl={1.5}>
            <Typography component="h1" variant="h6" color="inherit" noWrap>
              {props.headerTitle}
            </Typography>
          </Box>
        </Box>
        {/* The user menu */}
        <Box pr={1.5}>
          <UserMenu
            anchorElUser={props.userMenuProps.anchorElUser}
            closeMenu={props.userMenuProps.closeMenu}
            menu={props.userMenuProps.menu}
            openMenu={props.userMenuProps.openMenu}
          />
        </Box>
      </Toolbar>
      {/* The sub navigation menu */}
      <MenuNavigation subMenu={props.subMenuProps.subMenu} activeIndex={props.subMenuProps.activeIndex} />
    </>
  );
};

export interface HeaderProps {
  /**
   * The main title
   */
  headerTitle: string;
  /**
   * The action to launch when click on the toggle button
   */
  toggleNavigator: () => void;
  /**
   * the userMenu Props
   */
  userMenuProps: UserMenuProps;
  /**
   * the subMenu Props
   */
  subMenuProps: MenuNavigationProps;
}
