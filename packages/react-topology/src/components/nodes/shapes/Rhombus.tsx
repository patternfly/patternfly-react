import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import * as React from 'react';
import { ShapeProps } from '../../../utils/useCustomNodeShape';
import { PointTuple } from '../../../types';
import { useCombineRefs } from '../../../utils';
import { getHullPath } from './shapeUtils';

type RhombusProps = ShapeProps & {
  hullPadding?: number;
};

const Rhombus: React.FC<RhombusProps> = ({
  className = css(styles.topologyNodeBackground),
  width,
  height,
  filter,
  hullPadding = 0,
  anchorRef,
  dndDropRef
}) => {
  const refs = useCombineRefs<SVGPolygonElement>(dndDropRef, anchorRef);
  if (!hullPadding) {
    const polygonPoints: PointTuple[] = [
      [width / 2, 0],
      [width, height / 2],
      [width / 2, height],
      [0, height / 2]
    ];

    return (
      <polygon
        className={className}
        ref={refs}
        points={polygonPoints.map(p => `${p[0]},${p[1]}`).join(' ')}
        filter={filter}
      />
    );
  }

  const hullExcess = hullPadding / 2;
  const polygonPoints: PointTuple[] = [
    [width / 2, -hullExcess],
    [width + hullExcess, height / 2],
    [width / 2, height + hullExcess],
    [-hullExcess, height / 2]
  ];

  const points: PointTuple[] = [
    [width / 2, hullPadding],
    [width - hullPadding, height / 2],
    [width / 2, height - hullPadding],
    [hullPadding, height / 2]
  ];

  return (
    <>
      <polygon ref={anchorRef} points={polygonPoints.map(p => `${p[0]},${p[1]}`).join(' ')} fillOpacity={0} />
      <path className={className} ref={dndDropRef} d={getHullPath(points, hullPadding)} filter={filter} />
    </>
  );
};

export default Rhombus;
