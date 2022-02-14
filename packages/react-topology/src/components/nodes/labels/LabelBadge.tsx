/* eslint patternfly-react/import-tokens-icons: 0 */
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { global_palette_blue_50 as defaultBadgeFill } from '@patternfly/react-tokens/dist/js/global_palette_blue_50';
import { global_palette_blue_300 as defaultBadgeBorder } from '@patternfly/react-tokens/dist/js/global_palette_blue_300';
import { global_palette_blue_300 as defaultBadgeTextColor } from '@patternfly/react-tokens/dist/js/global_palette_blue_300';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { useSize } from '../../../utils';
import { BadgeLocation } from '../../../types';

interface LabelBadgeProps {
  className?: string;
  x: number;
  y: number;
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  badgeBorderColor?: string;
  badgeClassName?: string;
  badgeLocation?: BadgeLocation;
}

const LabelBadge = React.forwardRef<SVGRectElement, LabelBadgeProps>(
  (
    {
      badge,
      badgeTextColor = defaultBadgeTextColor.value,
      badgeColor = defaultBadgeFill.value,
      badgeBorderColor = defaultBadgeBorder.value,
      badgeClassName,
      className,
      x,
      y
    },
    iconRef
  ) => {
    const [textSize, textRef] = useSize([]);
    const classes = css(styles.topologyNodeLabelBadge, badgeClassName && badgeClassName, className && className);

    let rect = null;
    let paddingX = 0;
    let paddingY = 0;
    let width = 0;
    let height = 0;

    if (textSize) {
      ({ height, width } = textSize);
      paddingX = height / 2;
      paddingY = height / 14;
      height += paddingY * 2;
      rect = (
        <rect
          fill={badgeColor}
          stroke={badgeBorderColor}
          ref={iconRef}
          x={0}
          width={width + paddingX * 2}
          y={0}
          height={height}
          rx={height / 2}
          ry={height / 2}
        />
      );
    }
    return (
      <g className={classes} transform={`translate(${x}, ${y})`}>
        {rect}
        <text
          fill={badgeTextColor}
          ref={textRef}
          x={width / 2 + paddingX}
          y={height / 2}
          textAnchor="middle"
          dy="0.35em"
        >
          {badge}
        </text>
      </g>
    );
  }
);

export default LabelBadge;
