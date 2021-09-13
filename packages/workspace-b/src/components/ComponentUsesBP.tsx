import React, { ReactElement } from 'react';
import { Button, Intent } from '@blueprintjs/core';

interface ComponentUsesBPProps {
  onClick?: () => void;
  children?: string;
}

export function ComponentUsesBP({
  onClick,
  children,
}: ComponentUsesBPProps): ReactElement {
  return <Button text={children} intent={Intent.SUCCESS} onClick={onClick} />;
}
