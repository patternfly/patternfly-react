import * as React from 'react';
import { runInAction } from 'mobx';
import { isNode, AnchorEnd, PointTuple, Node } from '../types';
import ElementContext from '../utils/ElementContext';
import PolygonAnchor from '../anchors/PolygonAnchor';

export const usePolygonAnchor = (points: PointTuple[], end: AnchorEnd = AnchorEnd.both, type: string = ''): void => {
  const element = React.useContext(ElementContext);
  if (!isNode(element)) {
    throw new Error('usePolygonAnchor must be used within the scope of a Node');
  }

  React.useEffect(() => {
    runInAction(() => {
      if (points) {
        const anchor = new PolygonAnchor(element);
        anchor.setPoints(points);
        element.setAnchor(anchor, end, type);
      }
    });
  }, [points, end, type, element]);
};

export interface WithPolygonAnchorProps {
  setAnchorPoints: (points: PointTuple[]) => void;
}

export const withPolygonAnchor = <P extends {} = {}>(
  getPoints: (element: Node) => PointTuple[],
  end?: AnchorEnd,
  type?: string
) => (WrappedComponent: React.ComponentType<P>) => {
  const element = React.useContext(ElementContext);
  const Component: React.FunctionComponent<P> = props => {
    usePolygonAnchor(getPoints(element as Node), end, type);
    return <WrappedComponent {...props} />;
  };
  Component.displayName = `withPolygonAnchor(${WrappedComponent.displayName || WrappedComponent.name})`;
  return Component;
};
