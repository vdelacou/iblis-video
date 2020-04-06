import { Box, Hidden, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { FC } from 'react';

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
      </Toolbar>
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
}
