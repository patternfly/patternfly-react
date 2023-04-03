import '@patternfly/react-core/dist/styles/base.css';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import '@patternfly/patternfly/patternfly-theme-dark.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
