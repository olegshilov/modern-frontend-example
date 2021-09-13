import React, { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { Root } from './Root';
import { ReduxStoreContainer } from './ReduxStoreContainer';

function createAppTestBed() {
  const wrapper = ({ children }: { children?: ReactNode }): ReactElement => {
    return <ReduxStoreContainer>{children}</ReduxStoreContainer>;
  };

  return { wrapper };
}

describe('<Root />', () => {
  it('should exist', () => {
    expect(Root).toBeDefined();
  });

  it('should render correctly', () => {
    const { wrapper } = createAppTestBed();
    const { container, getByText } = render(<Root />, { wrapper });

    expect(container.hasChildNodes()).toBeTruthy();
    expect(getByText('Example app')).toBeTruthy();
    expect(getByText('increment')).toBeTruthy();
    expect(getByText('decrement')).toBeTruthy();
  });
});
