import * as React from 'react';
import { useSize } from '../../../utils';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';

interface LabelIconProps {
  className?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  padding?: number;
  iconClass: string;
}

const LabelIcon = React.forwardRef<SVGCircleElement, LabelIconProps>(
  ({ className, x, y, width, height, iconClass, padding = 4 }, circleRef) => {
    const [typedIconSize, typedIconRef] = useSize([width, height, iconClass]);

    const iconWidth = typedIconSize?.width ?? 0;
    const iconHeight = typedIconSize?.height ?? 0;

    return (
      <g className={css(styles.topologyNodeIcon, className)}>
        <circle
          className={css(styles.topologyNodeLabelBackground)}
          ref={circleRef}
          cx={x - iconWidth / 2}
          cy={y + iconHeight / 2}
          r={iconWidth / 2 + padding}
        />
        <g ref={typedIconRef}>
          <image x={x - iconWidth} y={y} width={width} height={height} xlinkHref={iconClass} />
        </g>
      </g>
    );
  }
);

export default LabelIcon;
