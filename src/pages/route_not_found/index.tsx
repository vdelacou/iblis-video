import { Box } from '@material-ui/core';
import { t } from 'i18n-js';
import React, { FC } from 'react';
import { NotFound } from '../../components/not_found';

/*
 * The Page when route not found
 */
export const RouteNotFound: FC = () => {
  return (
    <Box p={4}>
      <NotFound mainTitle={t('pages.RouteNotFound.NotFound.mainTitle')} />
    </Box>
  );
};
