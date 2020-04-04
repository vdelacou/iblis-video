import { Box, Typography } from '@material-ui/core';
import React, { FC } from 'react';

/*
 * The Not Found Component
 */
export const NotFound: FC<NotFoundProps> = (props) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
      <Typography align="center" variant="h2">
        {props.mainTitle}
      </Typography>
    </Box>
  );
};

export interface NotFoundProps {
  /**
   * The main title
   */
  mainTitle: string;
}
