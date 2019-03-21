import { FunctionComponent, HTMLProps, ReactType } from 'react';

export interface ContextSelectorItemProps {
  isDisabled?: boolean;
  isSelected?: boolean;
  isHovered?: boolean;
  onClick?: Function;
}

declare const ContextSelectorItem: FunctionComponent<ContextSelectorItemProps>;

export default ContextSelectorItem;
