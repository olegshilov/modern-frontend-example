import React from 'react';
import { render } from 'react-dom';

import './styles.ts';

import { Root } from './components/Root';

function createApp(): void {
  const container = document.getElementById('root');

  render(<Root />, container);
}

createApp();
