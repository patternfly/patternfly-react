import * as React from 'react';
import { css } from '@patternfly/react-styles';
import dragButtonStyles from '@patternfly/react-styles/css/components/DataList/data-list';
import GripVerticalIcon from '@patternfly/react-icons/dist/esm/icons/grip-vertical-icon';

export interface DragButtonProps extends React.HTMLProps<HTMLButtonElement> {
  /** Additional classes added to the drag button */
  className?: string;
  /** Sets button type */
  type?: 'button' | 'submit' | 'reset';
  /** Flag indicating if drag is disabled for the item */
  isDisabled?: boolean;
}

export const DragButton: React.FunctionComponent<DragButtonProps> = ({ className, ...props }: DragButtonProps) => (
  <button className={css(className, 'pf-c-button', 'pf-m-plain')} aria-label="Drag button" {...props}>
    <span className={css(dragButtonStyles.dataListItemDraggableIcon)}>
      <GripVerticalIcon />
    </span>
  </button>
);
DragButton.displayName = 'DragButton';
