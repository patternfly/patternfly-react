import * as React from 'react';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { WithContextMenuProps } from '../../../behavior';
import { useSize } from '../../../utils';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';

type LabelContextMenuProps = {
  className?: string;
  x: number;
  y: number;
  height: number;
  paddingX: number;
  paddingY: number;
} & WithContextMenuProps;

const LabelContextMenu = React.forwardRef<SVGRectElement, LabelContextMenuProps>(
  ({ onContextMenu, className, x, y, paddingX, height }, menuRef) => {
    const [iconSize, iconRef] = useSize([]);
    const iconWidth = iconSize?.width ?? 0;
    const iconHeight = iconSize?.height ?? 0;
    const padding = (height - iconHeight) / 2;

    const classes = css(styles.topologyNodeContextMenuKebab, className);

    return (
      <g transform={`translate(${x}, ${y})`} ref={menuRef}>
        <g className={classes} onClick={onContextMenu} ref={menuRef}>
          <rect
            className={css(styles.topologyNodeContextMenuBackground)}
            x={2}
            y={0}
            width={iconWidth + paddingX * 2 - 2}
            height={height}
          />
          <g
            className={css(styles.topologyNodeKebabIcon)}
            transform={`translate(${paddingX - iconWidth}, ${padding})`}
            ref={iconRef}
          >
            <EllipsisVIcon />
          </g>
        </g>
      </g>
    );
  }
);

export default LabelContextMenu;
