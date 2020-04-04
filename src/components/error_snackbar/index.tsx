import { IconButton, Snackbar, SnackbarCloseReason } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { FC, MouseEvent, SyntheticEvent } from 'react';

/*
 * The Snackbar to show when an error occurs
 */
export const ErrorSnackbar: FC<ErrorSnackbarProps> = (props) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={Boolean(props.errorMessage !== null)}
      autoHideDuration={4000}
      onClose={props.handleClose}
      message={<span>{props.errorMessage}</span>}
      action={[
        <IconButton key={`icon ${props.errorMessage}`} color="inherit" onClick={props.handleClose}>
          <CloseIcon />
        </IconButton>,
      ]}
    />
  );
};

export interface ErrorSnackbarProps {
  /**
   * The error message to display
   */
  errorMessage: string | null;
  /**
   * What to do when ask for close
   */
  handleClose: (event: SyntheticEvent | MouseEvent, reason?: SnackbarCloseReason) => void;
}
