import { Box, Typography } from '@material-ui/core';
import { t } from 'i18n-js';
import React, { FC } from 'react';

/*
 * The Dashbaord Analytics Page
 */
export const DashbaordAnalytics: FC = () => {
  return (
    <Box p={4}>
      <Typography align="center" variant="h2">
        {t('pages.DashbaordAnalytics.mainTitle')}
      </Typography>
    </Box>
  );
};
