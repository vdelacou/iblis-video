import { Box } from '@material-ui/core';
import React, { FC } from 'react';
import { Route, Switch } from 'react-router';
import { ROUTES } from '../../config/route-config';
import { DashbaordAnalytics } from '../../pages/dashboard_analytics';
import { DashbaordSales } from '../../pages/dashboard_sales';
import { RouteNotFound } from '../../pages/route_not_found';
import { SettingsUsersActive } from '../../pages/settings_users_active';
import { SettingsUsersDisabled } from '../../pages/settings_users_disabled';
import { HeaderLayout } from '../header_layout';

/**
 * The main layout for the app
 * We declare the route for the pages here
 */
export const ContentLayout: FC<ContentLayoutProps> = (props) => {
  return (
    <Box display="flex" flexDirection="column">
      <Box component="header">
        <HeaderLayout toggleNavigator={props.toggleNavigator} />
      </Box>
      <Box component="main" flex={1}>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD_SALES}>
            <DashbaordSales />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_ANALYTICS}>
            <DashbaordAnalytics />
          </Route>
          <Route exact path={ROUTES.SETTINGS_USER_ACTIVE}>
            <SettingsUsersActive />
          </Route>
          <Route exact path={ROUTES.SETTINGS_USER_DISABLED}>
            <SettingsUsersDisabled />
          </Route>
          {/* For every routes not found */}
          <Route path="*">
            <RouteNotFound />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
};

export interface ContentLayoutProps {
  /**
   * Action to launch when the navigator requests to be closed
   */
  toggleNavigator: () => void;
}
