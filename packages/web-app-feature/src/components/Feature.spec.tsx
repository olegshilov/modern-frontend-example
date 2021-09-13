import React, { ReactNode, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { Feature } from './Feature';
import { ReduxStoreContainer } from '../../../web-app/src/components/ReduxStoreContainer';
import { FeatureActionsContainer } from '../redux/FeatureActionsContainer';

function createAppTestBed() {
  const wrapper = ({ children }: { children?: ReactNode }): ReactElement => {
    return (
      <ReduxStoreContainer>
        <FeatureActionsContainer>{children}</FeatureActionsContainer>
      </ReduxStoreContainer>
    );
  };

  return { wrapper };
}

describe('<ExampleComponent />', () => {
  it('should render correctly', () => {
    const { wrapper } = createAppTestBed();
    const { getByText } = render(<Feature />, { wrapper });

    expect(getByText('increment')).toBeTruthy();
    expect(getByText('decrement')).toBeTruthy();
  });
});
