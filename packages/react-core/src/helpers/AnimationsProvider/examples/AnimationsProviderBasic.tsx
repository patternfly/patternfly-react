import { TreeView } from '@patternfly/react-core';
import { AnimationsProvider } from '../AnimationsProvider';

export const AnimationsProviderBasic = () => {
  const data = [
    {
      name: 'Application 1',
      id: 'app-1',
      children: [
        {
          name: 'Settings',
          id: 'app-1-settings'
        },
        {
          name: 'Current',
          id: 'app-1-current'
        }
      ]
    },
    {
      name: 'Application 2',
      id: 'app-2',
      children: [
        {
          name: 'Settings',
          id: 'app-2-settings'
        },
        {
          name: 'Loader',
          id: 'app-2-loader',
          children: [
            {
              name: 'Loading App 1',
              id: 'app-2-loader-1'
            },
            {
              name: 'Loading App 2',
              id: 'app-2-loader-2'
            }
          ]
        }
      ]
    }
  ];

  return (
    <>
      <h3>With Animations (Provider)</h3>
      <AnimationsProvider config={{ hasAnimations: true }}>
        <TreeView data={data} aria-label="Tree view with animations enabled" />
      </AnimationsProvider>

      <br />

      <h3>Without Animations (Provider)</h3>
      <AnimationsProvider config={{ hasAnimations: false }}>
        <TreeView data={data} aria-label="Tree view with animations disabled" />
      </AnimationsProvider>

      <br />

      <h3>Mixed Animations (Provider + Override)</h3>
      <AnimationsProvider config={{ hasAnimations: true }}>
        <p>Provider has animations enabled, but component overrides to disable:</p>
        <TreeView data={data} hasAnimations={false} aria-label="Tree view with provider animations overridden" />
      </AnimationsProvider>
    </>
  );
};
