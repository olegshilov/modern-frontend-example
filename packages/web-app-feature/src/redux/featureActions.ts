import { Dispatch, Action } from 'redux';

export enum FeatureActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export type FeatureIncrementAction = Action<FeatureActionTypes.INCREMENT>;
export type FeatureDecrementAction = Action<FeatureActionTypes.DECREMENT>;

export type FeatureAction = FeatureIncrementAction | FeatureDecrementAction;

export interface FeatureActions {
  increment: () => void;
  decrement: () => void;
}

export function createFeatureActionsContainer(
  dispatch: Dispatch<FeatureAction>,
): FeatureActions {
  function increment(): void {
    dispatch({
      type: FeatureActionTypes.INCREMENT,
    });
  }

  function decrement(): void {
    dispatch({
      type: FeatureActionTypes.DECREMENT,
    });
  }

  return {
    increment,
    decrement,
  };
}
