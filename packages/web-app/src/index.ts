import { render } from 'react-dom';
import './styles';

async function createApp() {
  const { Root } = await import('./components/Root');
  const container = document.getElementById('main');
  const root = Root();

  render(root, container);
}

createApp();

declare const module: any;
if (module.hot) {
  module.hot.accept();
}
