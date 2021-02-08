import React, { ReactElement } from 'react';
import { Button } from '@blueprintjs/core/lib/esnext/components/button/buttons';
import { Intent } from '@blueprintjs/core/lib/esnext/common';

interface ComponentUsesBPProps {
  onClick?: () => void;
}

export function ComponentUsesBP({
  onClick,
}: ComponentUsesBPProps): ReactElement {
  return (
    <div>
      <Button
        text="Blueprint button"
        intent={Intent.SUCCESS}
        onClick={onClick}
      />
    </div>
  );
}
