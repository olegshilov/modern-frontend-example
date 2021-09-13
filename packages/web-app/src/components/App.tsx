import React, { ReactElement } from 'react';
import { Feature } from 'web-app-feature';
import { Container, BlueprintButton, Button } from 'ui-kit';

export function App(): ReactElement {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Example app</h1>
      <Container>
        <h3>Feature example</h3>
        <Feature />
      </Container>
      <Container>
        <h3>Styled components example</h3>
        <p>
          Button exported from blueprint
          <br />
          <BlueprintButton onClick={console.log}>
            Blueprint button
          </BlueprintButton>
        </p>
        <p>
          Button which use astroturf for styles
          <br />
          <Button primary onClick={console.log}>
            Primary Button
          </Button>
          <Button color="green" onClick={console.log}>
            Green Button
          </Button>
          <Button color="red" primary onClick={console.log}>
            Red Primary Button
          </Button>
        </p>
      </Container>
    </div>
  );
}
