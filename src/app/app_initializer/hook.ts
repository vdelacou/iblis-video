import { MouseEvent, SyntheticEvent } from 'react';
import { useErrorMessageStore } from '../../stores/error_message_store';

/**
 * Allow to get the error message and to reset it
 *
 * @returns an array with in order:
 *      - the error message
 *      - a function to reset the message
 */
export const useInitErrorManagement = (): [
  string | null,
  (_event: SyntheticEvent<Element, Event> | MouseEvent<Element, globalThis.MouseEvent>, reason?: string | undefined) => void
] => {
  const { getErrorMessage, setErrorMessage } = useErrorMessageStore();

  // manage the error snackbar when user want to close it
  const handleCloseError = (_event: SyntheticEvent | MouseEvent, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    // we don't display the error message anymore
    setErrorMessage(null);
  };

  return [getErrorMessage(), handleCloseError];
};
