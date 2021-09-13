import React, { ReactElement } from 'react';
import { ReduxStoreContainer } from './ReduxStoreContainer';
import { FeatureActionsContainer } from 'web-app-feature';
import { App } from './App';

export function AppContainer({
  children,
}: {
  children: ReactElement;
}): ReactElement {
  return (
    <ReduxStoreContainer>
      <FeatureActionsContainer>{children}</FeatureActionsContainer>
    </ReduxStoreContainer>
  );
}

export function Root(): ReactElement {
  return (
    <AppContainer>
      <App />
    </AppContainer>
  );
}
