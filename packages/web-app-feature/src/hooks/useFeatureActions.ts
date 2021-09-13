import { useContext } from 'react';
import { FeatureActionsContext } from '../redux/FeatureActionsContainer';
import { FeatureActions } from '../redux/featureActions';

export function useFeatureActions(): FeatureActions {
  const featureActions = useContext(FeatureActionsContext);

  if (!featureActions) {
    throw new Error(
      'useFeatureActions() should be used inside FeatureActionsContext',
    );
  }

  return featureActions;
}
