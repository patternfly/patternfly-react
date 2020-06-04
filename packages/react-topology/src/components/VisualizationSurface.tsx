import * as React from 'react';
import * as _ from 'lodash';
import { action } from 'mobx';
// https://github.com/mobxjs/mobx-react#observer-batching
import 'mobx-react/batchingForReactDom';
import { observer } from 'mobx-react';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore-next-line
import ReactMeasure from 'react-measure';
import ControllerContext from '../utils/ControllerContext';
import { State } from '../types';
import { Visualization } from '../Visualization';
import SVGDefsProvider from './defs/SVGDefsProvider';
import ElementWrapper from './ElementWrapper';
import Dimensions from '../geom/Dimensions';
import '@patternfly/react-styles/css/components/Topology/topology-components.css';

interface VisualizationSurfaceProps {
  visualization: Visualization;
  state?: State;
}

const stopEvent = (e: React.MouseEvent): void => {
  e.preventDefault();
  e.stopPropagation();
};

const VisualizationSurface: React.FC<VisualizationSurfaceProps> = ({ visualization, state }) => {
  React.useEffect(() => {
    state && visualization.setState(state);
  }, [visualization, state]);

  const onMeasure = React.useMemo(
    () =>
      _.debounce<any>(
        action((contentRect: { client: { width: number; height: number } }) => {
          visualization.getGraph().setDimensions(new Dimensions(contentRect.client.width, contentRect.client.height));
        }),
        100,
        { leading: true, trailing: true }
      ),
    [visualization]
  );

  // dispose of onMeasure
  React.useEffect(() => () => onMeasure.cancel(), [onMeasure]);

  const graph = visualization.getGraph();

  return (
    <ControllerContext.Provider value={visualization}>
      <ReactMeasure client onResize={onMeasure}>
        {({ measureRef }: { measureRef: React.LegacyRef<any> }) => (
          // render an outer div because react-measure doesn't seem to fire events properly on svg resize
          <div data-test-id="topology" className="pf-topology-visualization-surface" ref={measureRef}>
            <svg className="pf-topology-visualization-surface__svg" onContextMenu={stopEvent}>
              <SVGDefsProvider>
                <ElementWrapper element={graph} />
              </SVGDefsProvider>
            </svg>
          </div>
        )}
      </ReactMeasure>
    </ControllerContext.Provider>
  );
};

export default observer(VisualizationSurface);
