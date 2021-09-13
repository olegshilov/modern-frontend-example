import { useSelector } from 'react-redux';
import { FeatureState } from '../redux/featureReducer';

export function useFeatureState(): FeatureState {
  const featureState = useSelector<{ feature: FeatureState }, FeatureState>(
    ({ feature }) => feature,
  );

  return featureState;
}
