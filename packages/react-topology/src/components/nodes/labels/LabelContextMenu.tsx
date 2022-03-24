import * as React from 'react';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { WithContextMenuProps } from '../../../behavior';
import LabelActionIcon from './LabelActionIcon';

type LabelContextMenuProps = {
  className?: string;
  x: number;
  y: number;
  height: number;
  paddingX: number;
  paddingY: number;
} & WithContextMenuProps;

const LabelContextMenu = React.forwardRef<SVGRectElement, LabelContextMenuProps>(
  ({ onContextMenu, className, x, y, paddingX, paddingY, height }, menuRef) => (
    <LabelActionIcon
      ref={menuRef}
      icon={<EllipsisVIcon />}
      iconOffsetX={-6}
      className={className}
      onClick={onContextMenu}
      x={x}
      y={y}
      height={height}
      paddingX={paddingX}
      paddingY={paddingY}
    />
  )
);

export default LabelContextMenu;
