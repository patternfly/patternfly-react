import * as React from 'react';
import {
  GraphElement,
  ComponentFactory,
  withDragNode,
  withSelection,
  ModelKind,
  Node,
  withPanZoom,
  GraphComponent,
  withCreateConnector,
  Graph,
  isNode,
  withDndDrop,
  nodeDragSourceSpec,
  nodeDropTargetSpec,
  groupDropTargetSpec,
  graphDropTargetSpec,
  NODE_DRAG_TYPE,
  CREATE_CONNECTOR_DROP_TYPE
} from '@patternfly/react-topology';
import StyleNode from './StyleNode';
import StyleGroup from './StyleGroup';
import CustomPathNode from './CustomPathNode';

const CONNECTOR_SOURCE_DROP = 'connector-src-drop';
const CONNECTOR_TARGET_DROP = 'connector-target-drop';

const stylesComponentFactory: ComponentFactory = (
  kind: ModelKind,
  type: string
): React.ComponentType<{ element: GraphElement }> | undefined => {
  if (kind === ModelKind.graph) {
    return withDndDrop(graphDropTargetSpec([NODE_DRAG_TYPE]))(withPanZoom()(GraphComponent));
  }
  switch (type) {
    case 'node':
      return withCreateConnector((source: Node, target: Node | Graph): void => {
        let targetId;
        const model = source.getController().toModel();
        if (isNode(target)) {
          targetId = target.getId();
        } else {
          return;
        }
        const id = `e${source.getGraph().getEdges().length + 1}`;
        if (!model.edges) {
          model.edges = [];
        }
        model.edges.push({
          id,
          type: 'edge',
          source: source.getId(),
          target: targetId
        });
        source.getController().fromModel(model);
      })(
        withDndDrop(nodeDropTargetSpec([CONNECTOR_SOURCE_DROP, CONNECTOR_TARGET_DROP, CREATE_CONNECTOR_DROP_TYPE]))(
          withDragNode(nodeDragSourceSpec('node', true, true))(withSelection()(StyleNode))
        )
      );
    case 'node-path':
      return CustomPathNode;
    case 'group':
      return withDndDrop(groupDropTargetSpec)(withDragNode(nodeDragSourceSpec('group'))(withSelection()(StyleGroup)));
    default:
      return undefined;
  }
};

export default stylesComponentFactory;
