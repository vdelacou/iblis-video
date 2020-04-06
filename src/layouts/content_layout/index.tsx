import { Box } from '@material-ui/core';
import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { ROUTES } from '../../config/route-config';
import { CreateRoom } from '../../pages/create_room';
import { JoinRoom } from '../../pages/join_room';
import { RouteNotFound } from '../../pages/route_not_found';
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
          <Route exact path={ROUTES.CREATE_ROOM}>
            <CreateRoom />
          </Route>
          <Route exact path={ROUTES.JOIN_ROOM}>
            <JoinRoom />
          </Route>
          <Redirect to={{ pathname: ROUTES.CREATE_ROOM }} />
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
