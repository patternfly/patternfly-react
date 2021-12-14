import * as React from 'react';
import { action } from 'mobx';
import { isNode, AnchorEnd, PointTuple } from '../types';
import ElementContext from '../utils/ElementContext';
import PolygonAnchor from '../anchors/PolygonAnchor';

export const usePolygonAnchor = (
  end: AnchorEnd = AnchorEnd.both,
  type: string = ''
): ((points: PointTuple[] | null) => void) => {
  const element = React.useContext(ElementContext);
  if (!isNode(element)) {
    throw new Error('usePolygonAnchor must be used within the scope of a Node');
  }

  return React.useCallback(
    action((points: PointTuple[]) => {
      if (points) {
        const anchor = new PolygonAnchor(element);
        anchor.setPoints(points);
        element.setAnchor(anchor, end, type);
      }
    }),
    [element, type, end]
  );
};

export interface WithPolygonAnchorProps {
  setAnchorPoints: (points: PointTuple[]) => void;
}

export const withPolygonAnchor = (end?: AnchorEnd, type?: string) => <P extends WithPolygonAnchorProps>() => (
  WrappedComponent: React.ComponentType<P>
) => {
  const Component: React.FC<Omit<P, keyof WithPolygonAnchorProps>> = props => {
    const setPoints = usePolygonAnchor(end, type);
    return <WrappedComponent {...(props as any)} setAnchorPoints={setPoints} />;
  };
  return Component;
};
