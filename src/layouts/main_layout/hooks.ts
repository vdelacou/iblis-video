import { useMediaQuery, useTheme } from '@material-ui/core';
import { useEffect, useState } from 'react';

/**
 * Manage the navigator if close or open
 *
 * @returns an array with in order:
 *      - a boolean if the navigator need to be open
 *      - a function to close the navigator
 */
export const useHandleToggleNavigator = (): [boolean, () => void] => {
  const theme = useTheme();
  const moreThanSm = useMediaQuery(theme.breakpoints.up('md'));
  const [navigatorOpen, setNavigatorOpen] = useState(true);

  useEffect(() => {
    // if big screen we always show the navigator
    if (moreThanSm === true) {
      setNavigatorOpen(true);
    }
  }, [moreThanSm]);

  const handleToggleNavigator = (): void => {
    setNavigatorOpen(!navigatorOpen);
  };

  return [navigatorOpen, handleToggleNavigator];
};
