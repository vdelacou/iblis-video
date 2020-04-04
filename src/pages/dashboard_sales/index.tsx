import { Box, Typography } from '@material-ui/core';
import { t } from 'i18n-js';
import React, { FC } from 'react';

/*
 * The Dashbaord Sales Page
 */
export const DashbaordSales: FC = () => {
  return (
    <Box p={4}>
      <Typography align="center" variant="h2">
        {t('pages.DashbaordSales.mainTitle')}
      </Typography>
    </Box>
  );
};
