import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface OptionsMenuToggleWithTextProps extends HTMLProps<HTMLDivElement> {
  parentId?: string;
  toggleText: ReactNode;
  toggleTextClassName?: string;
  toggleButtonContents: ReactNode;
  toggleButtonContentsClassName?: string;
  onToggle?: Function;
  isOpen?: boolean;
  isPlain?: boolean;
  isFocused?: boolean;
  isHovered?: boolean;
  isActive?: boolean;
  "aria-label"?: string;
}

declare const OptionsMenuToggleWithText: FunctionComponent<OptionsMenuToggleWithTextProps>;

export default OptionsMenuToggleWithText;
