import { FeatureAction, FeatureActionTypes } from './featureActions';

export type FeatureState = { count: number };

const INITIAL_FEATURE_STATE: FeatureState = {
  count: 100,
};

export function featureReducer(
  state: FeatureState = INITIAL_FEATURE_STATE,
  action: FeatureAction,
): FeatureState {
  switch (action.type) {
    case FeatureActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case FeatureActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
