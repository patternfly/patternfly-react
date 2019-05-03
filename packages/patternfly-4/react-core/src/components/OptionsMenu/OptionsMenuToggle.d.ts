import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface OptionsMenuToggleButtonProps extends HTMLProps<HTMLDivElement> {
  parentId?: string;
  onToggle?: Function;
  isOpen?: boolean;
  isPlain?: boolean;
  isFocused?: boolean;
  isHovered?: boolean;
  isActive?: boolean;
  hideCaret?: boolean;
  "aria-label"?: string;
  toggleTemplate?: ReactNode;
  toggleTemplateProps?: object;
}

declare const OptionsMenuToggleButton: FunctionComponent<OptionsMenuToggleButtonProps>;

export default OptionsMenuToggleButton;
