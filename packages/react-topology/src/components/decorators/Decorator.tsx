import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import SvgDropShadowFilter from '../svg/SvgDropShadowFilter';
import { createSvgIdUrl, useHover } from '../../utils';
import { DEFAULT_DECORATOR_PADDING } from '../nodes';

interface DecoratorTypes {
  children?: React.ReactNode;
  className?: string;
  x: number;
  y: number;
  radius: number;
  padding?: number;
  showBackground?: boolean;
  icon?: React.ReactNode;
  onClick?(event: React.MouseEvent<SVGGElement, MouseEvent>): void;
  ariaLabel?: string;
  circleRef?: React.Ref<SVGCircleElement>;
}

const HOVER_FILTER_ID = 'DecoratorDropShadowHoverFilterId';

const Decorator: React.FunctionComponent<DecoratorTypes> = ({
  className,
  x,
  y,
  showBackground,
  radius,
  padding = DEFAULT_DECORATOR_PADDING,
  children,
  icon,
  onClick,
  ariaLabel,
  circleRef
}) => {
  const [hover, hoverRef] = useHover();
  const iconRadius = radius - padding;

  return (
    <g
      ref={hoverRef}
      className={css(styles.topologyNodeDecorator, className)}
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
      <SvgDropShadowFilter id={HOVER_FILTER_ID} dy={3} stdDeviation={5} floodOpacity={0.5} />
      {showBackground && (
        <circle
          key={hover ? 'circle-hover' : 'circle'} // update key on hover to force update of shadow filter
          ref={circleRef}
          className={css(styles.topologyNodeDecoratorBg)}
          cx={x}
          cy={y}
          r={radius}
          filter={hover ? createSvgIdUrl(HOVER_FILTER_ID) : undefined}
        />
      )}
      <g transform={`translate(${x}, ${y})`}>
        {icon ? (
          <g
            className={css(styles.topologyNodeDecoratorIcon)}
            style={{ fontSize: `${iconRadius * 2}px` }}
            transform={`translate(-${iconRadius}, -${iconRadius})`}
          >
            {icon}
          </g>
        ) : null}
        {children}
      </g>
    </g>
  );
};

export default Decorator;
