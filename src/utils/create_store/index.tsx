import React, { createContext, Dispatch, FC, SetStateAction, useContext, useMemo, useState } from 'react';

const useApi = <T extends {}, S extends {}>(apiFactory: (state: T, setState: Dispatch<SetStateAction<T>>) => S, initialState: T): S => {
  const [state, setState] = useState<T>(initialState);

  return useMemo(() => apiFactory(state, setState), [state, setState, apiFactory]);
};

/**
 * A generic function to create a context store and context provider.
 * This allow us to have a global app state management system with strict typings
 *
 * see https://medium.com/free-code-camp/why-you-should-choose-usestate-instead-of-usereducer-ffc80057f815
 *
 * @param apiFactory
 * @param initialState
 */
export const createStore = <T extends {}, S extends {}>(
  apiFactory: (state: T, setState: Dispatch<SetStateAction<T>>) => S,
  initialState: T
): { storeProvider: React.FC<{}>; useStore: () => S } => {
  // need initial context
  const intialContext = {} as S;

  const StoreContext = createContext<typeof intialContext>(intialContext);

  const StoreProvider: FC = (props) => {
    const store = useApi(apiFactory, initialState);

    return <StoreContext.Provider value={store}>{props.children}</StoreContext.Provider>;
  };

  const useStore = (): S => {
    return useContext(StoreContext);
  };

  return { storeProvider: StoreProvider, useStore };
};
