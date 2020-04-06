import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles, Theme, Typography } from '@material-ui/core';
import { fade, useTheme } from '@material-ui/core/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import clsx from 'clsx';
import React, { FC, Fragment, ReactElement } from 'react';

const useStyles = makeStyles((theme: Theme) => {
  return {
    drawerPaper: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.light,
    },
    drawerPaperOpen: {
      width: theme.breakpoints.values.sm / 3,
    },
    drawerPaperClose: {
      width: 0,
    },
    listItemButton: {
      paddingTop: 1,
      paddingBottom: 1,
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.08),
      },
    },
    listItemButtonActive: {
      color: theme.palette.primary.light,
    },
    listItemIconRoot: {
      minWidth: 0,
      marginRight: theme.spacing(2),
      display: 'inline-flex',
      '& svg': {
        fontSize: theme.typography.h6.fontSize,
      },
    },
    listItemIconRootActive: {
      color: theme.palette.primary.light,
    },
    listItemIconRootSettings: {
      marginRight: 0,
    },
    listItemFontColor: {
      color: fade(theme.palette.common.white, 0.7),
    },
  };
});

/*
 * The Navigator menu
 */
export const Navigator: FC<NavigatorProps> = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      variant={props.variant}
      open={props.open}
      onClose={props.onClose}
      classes={{
        root: clsx(props.open ? classes.drawerPaperOpen : classes.drawerPaperClose),
        paper: clsx(classes.drawerPaper, props.open ? classes.drawerPaperOpen : classes.drawerPaperClose),
      }}
    >
      <List disablePadding>
        <Box bgcolor={theme.palette.secondary.main} pt={1}>
          <ListItem>
            <Typography variant="h5" color="inherit">
              {props.mainTitle}
            </Typography>
          </ListItem>
          <Divider />
        </Box>
        {props.menuListCategory.map(({ categoryName, menuList, activeIndex }) => (
          <Fragment key={categoryName}>
            <ListSubheader className={classes.listItemFontColor}>{categoryName}</ListSubheader>
            {menuList.map(({ name, icon, action }, index) => {
              const active = activeIndex === index;
              return (
                <ListItem
                  key={name}
                  button
                  onClick={action}
                  classes={{
                    button: clsx(classes.listItemButton, active ? classes.listItemButtonActive : classes.listItemFontColor),
                  }}
                >
                  <ListItemIcon
                    classes={{
                      root: clsx(classes.listItemIconRoot, active ? classes.listItemIconRootActive : classes.listItemFontColor),
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText>{name}</ListItemText>
                </ListItem>
              );
            })}
            <Box pt={2}>
              <Divider />
            </Box>
          </Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export interface NavigatorProps {
  /**
   * If true, the navigator is open
   */
  open: boolean;
  /**
   * Action to launch when the navigator requests to be closed
   */
  onClose: {
    bivarianceHack(event: {}, reason: 'backdropClick' | 'escapeKeyDown'): void;
  }['bivarianceHack'];
  /**
   * The variant to use.
   */
  variant: 'temporary' | 'persistent';
  /**
   * The main title
   */
  mainTitle: string;
  /**
   * The menu list sort by category
   */
  menuListCategory: Array<NavigatorMenuProps>;
}

export interface NavigatorMenuProps {
  /**
   * The name of this category
   */
  categoryName: string;
  /**
   * The active index of menu for this category
   */
  activeIndex?: number;
  /**
   * The list of menu for this category
   */
  menuList: Array<{
    /**
     * The text to display in the menu item
     */
    name: string;
    /**
     * The icon to display for the menu item
     */
    icon: ReactElement<SvgIconProps>;
    /**
     * The action when click on menu item
     */
    action: () => void;
  }>;
}
