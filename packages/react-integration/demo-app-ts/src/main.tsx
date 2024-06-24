import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@patternfly/react-core/dist/styles/base.css';
import './index.css';

import App from './App.tsx';

const node = document.getElementById('root');
const root = createRoot(node!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
