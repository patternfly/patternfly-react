import * as React from 'react';
import { observer } from 'mobx-react';
import { computed } from 'mobx';
import ElementContext from '../utils/ElementContext';
import { GraphElement, isGraph, isEdge, isNode, Node } from '../types';
import { ATTR_DATA_ID, ATTR_DATA_KIND, ATTR_DATA_TYPE } from '../const';
import ComputeElementDimensions from './ComputeElementDimensions';
import { useDndManager } from '../behavior/useDndManager';

interface ElementWrapperProps {
  element: GraphElement;
}

const NodeElementComponent: React.FC<{ element: Node }> = observer(({ element }) => {
  const dndManager = useDndManager();
  const isDragging = dndManager.isDragging();
  const dragItem = dndManager.getItem();
  const graph = element.getGraph();
  const isVisible = React.useMemo(() => computed(() => graph.isNodeInView(element, { padding: 100 })), [
    element,
    graph
  ]);
  if (isVisible.get() || (isDragging && dragItem === element)) {
    return <ElementComponent element={element} />;
  }
  return null;
});

// in a separate component so that changes to behaviors do not re-render children
const ElementComponent: React.FC<ElementWrapperProps> = observer(({ element }) => {
  const kind = element.getKind();
  const type = element.getType();
  const controller = element.getController();

  const Component = React.useMemo(() => controller.getComponent(kind, type), [controller, kind, type]);

  return (
    <ElementContext.Provider value={element}>
      <Component {...element.getState()} element={element} />
    </ElementContext.Provider>
  );
});

const ElementChildren: React.FC<ElementWrapperProps> = observer(({ element }) => (
  <>
    {element
      .getChildren()
      .filter(isEdge)
      .map(e => (
        <ElementWrapper key={e.getId()} element={e} />
      ))}
    {element
      .getChildren()
      .filter(isNode)
      .map(e => (
        <ElementWrapper key={e.getId()} element={e} />
      ))}
  </>
));

const ElementWrapper: React.FC<ElementWrapperProps> = observer(({ element }) => {
  if (!element.isVisible()) {
    if (!isNode(element) || element.isDimensionsInitialized()) {
      return null;
    }
  }

  if (isEdge(element)) {
    const source = element.getSourceAnchorNode();
    const target = element.getTargetAnchorNode();
    if ((source && !source.isVisible()) || (target && !target.isVisible())) {
      return null;
    }
  }

  const commonAttrs = {
    [ATTR_DATA_ID]: element.getId(),
    [ATTR_DATA_KIND]: element.getKind(),
    [ATTR_DATA_TYPE]: element.getType()
  };

  if (isGraph(element)) {
    return (
      <g {...commonAttrs}>
        <ElementComponent element={element} />
      </g>
    );
  }

  if (isNode(element)) {
    if (!element.isDimensionsInitialized()) {
      return (
        <ComputeElementDimensions element={element}>
          <ElementComponent element={element} />
          <ElementChildren element={element} />
        </ComputeElementDimensions>
      );
    }
    if (!element.isGroup() || element.isCollapsed()) {
      const { x, y } = element.getPosition();
      return (
        <g {...commonAttrs} transform={`translate(${x}, ${y})`}>
          <NodeElementComponent element={element} />
          <ElementChildren element={element} />
        </g>
      );
    }
    return (
      <g {...commonAttrs}>
        <NodeElementComponent element={element} />
        <ElementChildren element={element} />
      </g>
    );
  }
  return (
    <g {...commonAttrs}>
      <ElementComponent element={element} />
      <ElementChildren element={element} />
    </g>
  );
});

export default ElementWrapper;
