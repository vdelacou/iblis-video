import { Dispatch, SetStateAction } from 'react';
import { createStore } from '../../utils/create_store';

interface ErrorMessageStoreApi {
  getErrorMessage: () => string | null;
  setErrorMessage: (errorMessage: string | null) => void;
}

const storeApi = (state: { errorMessage: string | null }, setState: Dispatch<SetStateAction<{ errorMessage: string | null }>>): ErrorMessageStoreApi => {
  const getErrorMessage = (): string | null => {
    return state.errorMessage;
  };
  const setErrorMessage = (errorMessage: string | null): void => {
    setState({ errorMessage });
  };

  return {
    getErrorMessage,
    setErrorMessage,
  };
};

const store = createStore(storeApi, { errorMessage: null });

/**
 * Manage error globally
 */
export const ErrorMessageStoreProvider = store.storeProvider;
export const useErrorMessageStore = store.useStore;
