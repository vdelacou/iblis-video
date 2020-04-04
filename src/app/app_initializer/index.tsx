import i18n from 'i18n-js';
import React, { FC } from 'react';
import { Route, Switch } from 'react-router';
import { ErrorSnackbar } from '../../components/error_snackbar';
import en from '../../i18n/en.json';
import { MainLayout } from '../../layouts/main_layout';
import { useInitErrorManagement } from './hook';

/*
 * The app Initializer
 */
export const AppInitializer: FC = () => {
  // global error management
  const [errorMessage, handleCloseError] = useInitErrorManagement();

  // init the internationalization
  i18n.fallbacks = true;
  i18n.translations = { en };

  return (
    <span data-testid="testId">
      <>
        {/* All the routes */}
        <Switch>
          {/* The routes inside the main layout */}
          <Route>
            <MainLayout />
          </Route>
        </Switch>
      </>
      {/* All the global components */}
      <>
        {/* show the error */}
        <ErrorSnackbar errorMessage={errorMessage} handleClose={handleCloseError} />
      </>
    </span>
  );
};
