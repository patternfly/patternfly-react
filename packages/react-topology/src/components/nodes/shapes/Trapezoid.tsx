import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import * as React from 'react';
import { ShapeProps } from '../../../utils/useCustomNodeShape';
import { PointTuple } from '../../../types';
import { useCombineRefs } from '../../../utils';
import { getHullPath } from './shapeUtils';

type TrapezoidProps = ShapeProps & {
  hullPadding?: number;
};

const Trapezoid: React.FC<TrapezoidProps> = ({
  className = css(styles.topologyNodeBackground),
  width,
  height,
  filter,
  hullPadding = 0,
  anchorRef,
  dndDropRef
}) => {
  const refs = useCombineRefs<SVGPolygonElement>(dndDropRef, anchorRef);
  const topInset = width / 8 + hullPadding / 2;
  if (!hullPadding) {
    const polygonPoints: PointTuple[] = [
      [topInset, 0],
      [width - topInset, 0],
      [width, height],
      [0, height]
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
    [-hullExcess + topInset, 0],
    [width - topInset + hullExcess, 0],
    [width + hullExcess, height],
    [-hullExcess, height]
  ];

  const points: PointTuple[] = [
    [width / 8 + (hullPadding || 4), hullPadding],
    [width * (7 / 8) - (hullPadding || 4), hullPadding],
    [width - hullPadding, height - hullPadding],
    [hullPadding, height - hullPadding]
  ];

  return (
    <>
      <polygon
        ref={anchorRef}
        points={polygonPoints.map(p => `${p[0]},${p[1]}`).join(' ')}
        fillOpacity={0}
        strokeWidth={0}
      />
      <path className={className} ref={dndDropRef} d={getHullPath(points, hullPadding)} filter={filter} />
    </>
  );
};

export default Trapezoid;
