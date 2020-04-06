import { t } from 'i18n-js';
import { useHistory } from 'react-router';
import { ROUTES } from '../../config/route-config';

/**
 * Get the header menu
 *
 * @returns an array with in order:
 *      - the header title for the content page
 */
export const useGetHeaderMenu = (): [string] => {
  const history = useHistory();

  const getHeaderTitle = (): string => {
    if (history.location.pathname.includes(ROUTES.CREATE_ROOM)) {
      return t('layouts.HeaderLayout.useGetHeaderMenu.getHeaderTitle.dashboard');
    }
    if (history.location.pathname.includes(ROUTES.JOIN_ROOM)) {
      return t('layouts.HeaderLayout.useGetHeaderMenu.getHeaderTitle.users');
    }
    return '';
  };

  return [getHeaderTitle()];
};
