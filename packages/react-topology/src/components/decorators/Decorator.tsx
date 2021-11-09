import * as React from 'react';
import SvgDropShadowFilter from '../svg/SvgDropShadowFilter';
import { createSvgIdUrl, useHover } from '../../utils';

export enum TopologyDecoratorQuadrant {
  upperLeft = 'upperLeft',
  upperRight = 'upperRight',
  lowerLeft = 'lowerLeft',
  lowerRight = 'lowerRight'
}

interface DecoratorTypes {
  quadrant: TopologyDecoratorQuadrant;
  nodeCenterX: number;
  nodeCenterY: number;
  nodeWidth?: number;
  nodeHeight?: number;
  nodeRadius?: number;
  radius: number;
  showBackground?: boolean;
  onClick?(event: React.MouseEvent<SVGGElement, MouseEvent>): void;
  ariaLabel?: string;
  circleRef?: React.Ref<SVGCircleElement>;
}

const FILTER_ID = 'DecoratorDropShadowFilterId';
const HOVER_FILTER_ID = 'DecoratorDropShadowHoverFilterId';

const Decorator: React.FunctionComponent<DecoratorTypes> = ({
  quadrant,
  nodeRadius,
  nodeCenterX,
  nodeCenterY,
  nodeWidth,
  nodeHeight,
  showBackground,
  radius,
  children,
  onClick,
  ariaLabel,
  circleRef
}) => {
  const [hover, hoverRef] = useHover();
  let x: number;
  let y: number;
  const deltaX = nodeRadius > 0 ? nodeRadius : nodeWidth / 2;
  const deltaY = nodeRadius > 0 ? nodeRadius : nodeHeight / 2;
  const offset = nodeRadius > 0 ? radius * 0.7 : 0;

  switch (quadrant) {
    case TopologyDecoratorQuadrant.upperRight:
      x = nodeCenterX + deltaX - offset;
      y = nodeCenterY - deltaY + offset;
      break;
    case TopologyDecoratorQuadrant.lowerRight:
      x = nodeCenterX + deltaX - offset;
      y = nodeCenterY + deltaY - offset;
      break;
    case TopologyDecoratorQuadrant.upperLeft:
      x = nodeCenterX - deltaX + offset;
      y = nodeCenterY - deltaY + offset;
      break;
    case TopologyDecoratorQuadrant.lowerLeft:
      x = nodeCenterX - deltaX + offset;
      y = nodeCenterY + deltaY - offset;
      break;
    default:
      x = nodeCenterX;
      y = nodeCenterY;
  }
  const decorator = (
    <g
      ref={hoverRef}
      className="pf-topology__node__decorator"
      {...(onClick
        ? {
            onClick: e => {
              e.stopPropagation();
              onClick(e);
            },
            role: 'button',
            'aria-label': ariaLabel
          }
        : null)}
    >
      <SvgDropShadowFilter id={FILTER_ID} stdDeviation={1} floodOpacity={0.5} />
      <SvgDropShadowFilter id={HOVER_FILTER_ID} dy={3} stdDeviation={5} floodOpacity={0.5} />
      {showBackground && (
        <circle
          key={hover ? 'circle-hover' : 'circle'}
          ref={circleRef}
          className="pf-topology__node__decorator__bg"
          cx={x}
          cy={y}
          r={radius}
          filter={createSvgIdUrl(hover ? HOVER_FILTER_ID : FILTER_ID)}
        />
      )}
      <g transform={`translate(${x}, ${y})`}>{children}</g>
    </g>
  );

  return decorator;
};

export default Decorator;
