import React, { ReactElement } from 'react';
import { Button, Intent } from '@blueprintjs/core';

interface BlueprintButtonProps {
  onClick?: () => void;
  children?: string;
}

export function BlueprintButton({
  onClick,
  children,
}: BlueprintButtonProps): ReactElement {
  return <Button text={children} intent={Intent.SUCCESS} onClick={onClick} />;
}
