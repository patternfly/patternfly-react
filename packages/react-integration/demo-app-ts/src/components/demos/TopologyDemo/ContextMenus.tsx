import * as React from 'react';
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuSeparator,
  Visualization,
  Model,
  ModelKind,
  VisualizationSurface,
  withDragNode,
  withPanZoom,
  GraphComponent,
  withContextMenu
} from '@patternfly/react-topology';
import defaultComponentFactory from './components/defaultComponentFactory';
import DefaultNode from './components/DefaultNode';

/**
 * @param label
 * @param i
 */
function contextMenuItem(label: string, i: number): React.ReactElement {
  if (label === '-') {
    return <ContextMenuSeparator key={`separator:${i.toString()}`} />;
  }
  return (
    // eslint-disable-next-line no-alert
    <ContextMenuItem key={label} onClick={() => alert(`Selected: ${label}`)}>
      {label}
    </ContextMenuItem>
  );
}

/**
 * @param labels
 */
function createContextMenuItems(...labels: string[]): React.ReactElement[] {
  return labels.map(contextMenuItem);
}

const defaultMenu = createContextMenuItems('First', 'Second', 'Third', '-', 'Fourth');

export const UncontrolledContextMenu = () => (
  <>
    <p>Dismiss the context menu by pressing `ESC` or clicking away.</p>
    <ContextMenu reference={{ x: 350, y: 250 }}>{defaultMenu}</ContextMenu>
  </>
);

export const ControlledContextMenu = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} style={{ marginTop: 20 }}>
        Show Context Menu
      </button>
      <ContextMenu reference={{ x: 350, y: 250 }} open={open} onRequestClose={() => setOpen(false)}>
        {defaultMenu}
      </ContextMenu>
    </>
  );
};

export const ContextMenuOnNode = () => {
  const vis = new Visualization();
  const model: Model = {
    graph: {
      id: 'g1',
      type: 'graph'
    },
    nodes: [
      {
        id: 'n1',
        type: 'node',
        x: 50,
        y: 50,
        width: 20,
        height: 20
      }
    ]
  };
  vis.fromModel(model);
  vis.registerComponentFactory(defaultComponentFactory);
  vis.registerComponentFactory(kind => {
    if (kind === ModelKind.graph) {
      return withPanZoom()(GraphComponent);
    }
    if (kind === ModelKind.node) {
      return withDragNode()(withContextMenu(() => defaultMenu)(DefaultNode));
    }
    return undefined;
  });
  return <VisualizationSurface visualization={vis} />;
};
