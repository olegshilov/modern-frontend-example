import React, { ReactElement } from 'react';
import { useFeatureActions } from '../hooks/useFeatureActions';
import { useFeatureState } from '../hooks/useFeatureState';
import { Button } from 'ui-kit';

// This component uses redux. It can change redux state with actions.
// State and Actions available by `useFeatureState` and `useFeatureActions`hooks.
// To correct work og these hook component must be wrapped with `FeatureContainer` component.
export function Feature(): ReactElement {
  const { count } = useFeatureState();
  const { increment, decrement } = useFeatureActions();

  return (
    <div>
      <p>
        current count: <b>{count}</b>
      </p>
      <Button onClick={decrement}>decrement</Button>{' '}
      <Button primary onClick={increment}>
        increment
      </Button>
    </div>
  );
}
