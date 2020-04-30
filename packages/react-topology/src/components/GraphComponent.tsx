import * as React from 'react';
import { observer } from 'mobx-react';
import { Graph } from '../types';
import { WithPanZoomProps } from '../behavior/usePanZoom';
import { WithDndDropProps } from '../behavior/useDndDrop';
import { WithSelectionProps } from '../behavior/useSelection';
import { WithContextMenuProps } from '../behavior/withContextMenu';
import LayersProvider from './layers/LayersProvider';
import ElementWrapper from './ElementWrapper';

type ElementProps = {
  element: Graph;
};

type GraphComponentProps = ElementProps &
  WithPanZoomProps &
  WithDndDropProps &
  WithSelectionProps &
  WithContextMenuProps;

// This inner Component will prevent the re-rendering of all children when the transform changes
const ElementChildren: React.FC<ElementProps> = observer(({ element }) => {
  return (
    <>
      {element.getEdges().map((e) => (
        <ElementWrapper key={e.getId()} element={e} />
      ))}
      {element.getNodes().map((e) => (
        <ElementWrapper key={e.getId()} element={e} />
      ))}
    </>
  );
});

// This inner Component will prevent re-rendering layers when the transform changes
const Inner: React.FC<ElementProps> = React.memo(
  observer(({ element }) => (
    <LayersProvider layers={element.getLayers()}>
      <ElementChildren element={element} />
    </LayersProvider>
  )),
);

const GraphComponent: React.FC<GraphComponentProps> = ({
  element,
  panZoomRef,
  dndDropRef,
  onSelect,
  onContextMenu,
}) => {
  const layout = element.getLayout();
  React.useEffect(() => {
    element.layout();
    // Only re-run if the layout changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layout]);

  const { x, y, width, height } = element.getBounds();
  return (
    <>
      <rect
        ref={dndDropRef}
        x={0}
        y={0}
        width={width}
        height={height}
        fillOpacity={0}
        onClick={onSelect}
        onContextMenu={onContextMenu}
      />
      <g
        data-surface="true"
        ref={panZoomRef}
        transform={`translate(${x}, ${y}) scale(${element.getScale()})`}
      >
        <Inner element={element} />
      </g>
    </>
  );
};

export default observer(GraphComponent);
