import * as React from 'react';
import SvgDropShadowFilter from '../svg/SvgDropShadowFilter';
import { createSvgIdUrl, useHover } from '../../utils';

interface DecoratorTypes {
  x: number;
  y: number;
  radius: number;
  showBackground?: boolean;
  onClick?(event: React.MouseEvent<SVGGElement, MouseEvent>): void;
  ariaLabel?: string;
  circleRef?: React.Ref<SVGCircleElement>;
}

const FILTER_ID = 'DecoratorDropShadowFilterId';
const HOVER_FILTER_ID = 'DecoratorDropShadowHoverFilterId';

const Decorator: React.FunctionComponent<DecoratorTypes> = ({
  x,
  y,
  showBackground,
  radius,
  children,
  onClick,
  ariaLabel,
  circleRef
}) => {
  const [hover, hoverRef] = useHover();

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
