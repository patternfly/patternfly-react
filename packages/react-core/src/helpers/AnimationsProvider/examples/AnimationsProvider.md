---
id: Animations provider  
section: helpers
subsection: providers
---

# Animations provider

## Examples

### Application-level setup

The AnimationsProvider should be placed at the root of your application to provide global animation configuration for all PatternFly components.

```tsx
// App.tsx or index.tsx
import React from 'react';
import { AnimationsProvider } from '@patternfly/react-core';
import { MyApplication } from './MyApplication';

const App: React.FunctionComponent = () => {
  return (
    <AnimationsProvider config={{ hasAnimations: true }}>
      <MyApplication />
    </AnimationsProvider>
  );
};

export default App;
```

```tsx
// MyApplication.tsx - Your main app component
import React from 'react';
import { Page, TreeView, Alert } from '@patternfly/react-core';

export const MyApplication: React.FunctionComponent = () => {
  const treeData = [
    {
      name: 'Applications',
      id: 'apps',
      children: [
        { name: 'Frontend', id: 'frontend' },
        { name: 'Backend', id: 'backend' }
      ]
    }
  ];

  return (
    <Page>
      {/* All PatternFly components will inherit animation settings */}
      <Alert title="Welcome" variant="info" />
      <TreeView data={treeData} />
    </Page>
  );
};
```

### Disable animations globally

For accessibility or performance reasons, you can disable animations globally by setting `hasAnimations: false`.

```tsx
// App.tsx - Disable animations for the entire application
import React from 'react';
import { AnimationsProvider } from '@patternfly/react-core';
import { MyApplication } from './MyApplication';

const App: React.FunctionComponent = () => {
  return (
    <AnimationsProvider config={{ hasAnimations: false }}>
      <MyApplication />
    </AnimationsProvider>
  );
};
```

### Conditional animations based on user preferences

You can integrate with user preferences or system settings to conditionally enable animations.

```tsx
// App.tsx - Respect user's motion preferences
import React from 'react';
import { AnimationsProvider } from '@patternfly/react-core';
import { MyApplication } from './MyApplication';

const App: React.FunctionComponent = () => {
  // Respect user's reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return (
    <AnimationsProvider config={{ hasAnimations: !prefersReducedMotion }}>
      <MyApplication />
    </AnimationsProvider>
  );
};
```

### Override provider with component prop

Individual components can still override the global animation setting when needed.

```tsx
// SomePageComponent.tsx - Part of your application
import React from 'react';
import { TreeView, Alert } from '@patternfly/react-core';

export const SomePageComponent: React.FunctionComponent = () => {
  const data = [
    {
      name: 'Important Data',
      id: 'data-1',
      children: [
        { name: 'Item 1', id: 'item-1' },
        { name: 'Item 2', id: 'item-2' }
      ]
    }
  ];

  return (
    <div>
      {/* Uses global animation setting from AnimationsProvider */}
      <Alert title="Status Update" variant="success" />
      
      {/* This specific TreeView overrides to disable animations */}
      <TreeView data={data} hasAnimations={false} />
    </div>
  );
};
```

### Integration with React Router

A typical real-world setup with React Router and other providers.

```tsx
// App.tsx - Complete application setup
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimationsProvider } from '@patternfly/react-core';
import { HomePage } from './pages/HomePage';
import { SettingsPage } from './pages/SettingsPage';

const App: React.FunctionComponent = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return (
    <AnimationsProvider config={{ hasAnimations: !prefersReducedMotion }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </AnimationsProvider>
  );
};

export default App;
```
