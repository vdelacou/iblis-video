import { AppBar, Tab, Tabs } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';

/*
 * A Navigation menu component with tabs
 */
export const MenuNavigation: FC<MenuNavigationProps> = (props) => {
  const renderMenuNavigationList = (): ReactNode => {
    const activeIndex = props.activeIndex < props.subMenu.length ? props.activeIndex : 0;
    if (props.subMenu.length > 0) {
      return (
        <AppBar color="default" position="static" elevation={0}>
          <Tabs value={activeIndex} variant="scrollable" indicatorColor="primary" scrollButtons="auto">
            {props.subMenu.map((menu) => (
              <Tab key={menu.label} label={menu.label} onClick={menu.action} />
            ))}
          </Tabs>
        </AppBar>
      );
    }
    return null;
  };

  return <>{renderMenuNavigationList()}</>;
};

export interface MenuNavigationProps {
  /**
   * The active index of menu
   */
  activeIndex: number;
  /**
   * Menu item list label and action
   */
  subMenu: Array<{ label: string; action: () => void }>;
}
