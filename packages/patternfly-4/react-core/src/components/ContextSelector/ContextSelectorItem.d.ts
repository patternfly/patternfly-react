import { FunctionComponent, HTMLProps, ReactType } from 'react';

export interface ContextSelectorItemProps extends HTMLProps<HTMLAnchorElement> {
  isDisabled?: Boolean;
  isSelected?: boolean;
  isHovered?: PropTypes.bool;
  onClick?: Function;
}

declare const ContextSelectorItem: FunctionComponent<ContextSelectorItemProps>;

export default ContextSelectorItem;
