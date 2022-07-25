import * as React from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { action } from 'mobx';
// https://github.com/mobxjs/mobx-react#observer-batching
import 'mobx-react/batchingForReactDom';
import { observer } from 'mobx-react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { State } from '../types';
import SVGDefsProvider from './defs/SVGDefsProvider';
import ElementWrapper from './ElementWrapper';
import Dimensions from '../geom/Dimensions';
import useVisualizationController from '../hooks/useVisualizationController';

import '@patternfly/react-styles/css/components/Topology/topology-components.css';

interface VisualizationSurfaceProps {
  state?: State;
  children?: React.ReactNode;
}

const stopEvent = (e: React.MouseEvent): void => {
  e.preventDefault();
  e.stopPropagation();
};

const VisualizationSurface: React.FunctionComponent<VisualizationSurfaceProps> = ({ state }) => {
  const controller = useVisualizationController();

  React.useEffect(() => {
    state && controller.setState(state);
  }, [controller, state]);

  const onResize = React.useMemo(
    () =>
      action((width?: number, height?: number) => {
        controller.getGraph().setDimensions(new Dimensions(width, height));
      }),
    [controller]
  );

  const { ref } = useResizeDetector({
    onResize,
    refreshMode: 'debounce',
    refreshRate: 100,
    refreshOptions: { leading: true, trailing: true }
  });

  if (!controller.hasGraph()) {
    return null;
  }

  const graph = controller.getGraph();

  return (
    <div data-test-id="topology" className={css(styles.topologyVisualizationSurface)} ref={ref}>
      <svg className={css(styles.topologyVisualizationSurfaceSvg)} onContextMenu={stopEvent}>
        <SVGDefsProvider>
          <ElementWrapper element={graph} />
        </SVGDefsProvider>
      </svg>
    </div>
  );
};

export default observer(VisualizationSurface);
