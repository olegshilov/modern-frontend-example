import React, { ReactNode, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { SmartComponent } from './SmartComponent';
import { ReduxStoreContainer } from '../../../workspace-a/src/components/ReduxStoreContainer';
import { ExampleActionsContainer } from '../redux/ExampleActionsContainer';

function createAppTestBed() {
  const wrapper = ({ children }: { children?: ReactNode }): ReactElement => {
    return (
      <ReduxStoreContainer>
        <ExampleActionsContainer>{children}</ExampleActionsContainer>
      </ReduxStoreContainer>
    );
  };

  return { wrapper };
}

describe('<ExampleComponent />', () => {
  it('should render correctly', () => {
    const { wrapper } = createAppTestBed();
    const { getByText } = render(<SmartComponent isBold />, { wrapper });

    expect(getByText('increment')).toBeTruthy();
    expect(getByText('decrement')).toBeTruthy();
  });
});
