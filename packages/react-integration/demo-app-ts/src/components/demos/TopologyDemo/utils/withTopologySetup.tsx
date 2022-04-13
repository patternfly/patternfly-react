import * as React from 'react';
import { VisualizationProvider, VisualizationSurface } from '@patternfly/react-topology';

const withTopologySetup = (WrappedComponent: React.ComponentType<React.PropsWithChildren<unknown>>) => () => (
  <VisualizationProvider>
    <WrappedComponent />
    <VisualizationSurface />
  </VisualizationProvider>
);

export default withTopologySetup;
