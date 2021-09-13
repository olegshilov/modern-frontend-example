import React, { ReactElement, ReactNode } from 'react';
import { Provider as ReduxStoreProvider } from 'react-redux';
import {
  applyMiddleware,
  Store,
  combineReducers,
  createStore,
  Middleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import { featureReducer, FeatureState, FeatureAction } from 'web-app-feature';

export interface RootState {
  feature: FeatureState;
}

export type RootActions = FeatureAction;

export function useReduxStore(): Store<RootState, RootActions> {
  const rootReducer = combineReducers({
    feature: featureReducer,
  });
  const loggerMiddleware = createLogger({
    collapsed: true,
  });
  const enhancers = applyMiddleware<Middleware, RootState>(loggerMiddleware);
  const store = createStore(rootReducer, enhancers);

  return store;
}

export function ReduxStoreContainer({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const store = useReduxStore();

  return <ReduxStoreProvider store={store}>{children}</ReduxStoreProvider>;
}
