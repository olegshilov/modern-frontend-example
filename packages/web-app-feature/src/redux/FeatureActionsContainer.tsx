import React, { ReactNode, ReactElement, useMemo, createContext } from 'react';
import { useDispatch } from 'react-redux';
import {
  FeatureActions,
  createFeatureActionsContainer,
} from './featureActions';

export const FeatureActionsContext = createContext<FeatureActions | undefined>(
  undefined,
);

export function FeatureActionsContainer({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const dispatch = useDispatch();
  const actions = useMemo(
    () => createFeatureActionsContainer(dispatch),
    [dispatch],
  );

  return (
    <FeatureActionsContext.Provider value={actions}>
      {children}
    </FeatureActionsContext.Provider>
  );
}
