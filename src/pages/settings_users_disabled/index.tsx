import { Box, Typography } from '@material-ui/core';
import { t } from 'i18n-js';
import React, { FC } from 'react';

/*
 * The Settings Users Disabled Page
 */
export const SettingsUsersDisabled: FC = () => {
  return (
    <Box p={4}>
      <Typography align="center" variant="h2">
        {t('pages.SettingsUsersDisabled.mainTitle')}
      </Typography>
    </Box>
  );
};
