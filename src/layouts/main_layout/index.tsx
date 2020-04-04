import { Box } from '@material-ui/core';
import React, { FC } from 'react';
import { ContentLayout } from '../content_layout';
import { NavigatorLayout } from '../navigator_layout';
import { useHandleToggleNavigator } from './hooks';

/**
 * The main layout for the app
 */
export const MainLayout: FC = () => {
  const [navigatorOpen, handleToggleNavigator] = useHandleToggleNavigator();

  return (
    <Box display="flex">
      <Box component="nav">
        <NavigatorLayout open={navigatorOpen} toggleNavigator={handleToggleNavigator} />
      </Box>
      <Box flex={1}>
        <ContentLayout toggleNavigator={handleToggleNavigator} />
      </Box>
    </Box>
  );
};
