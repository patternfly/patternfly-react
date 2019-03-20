import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export interface ContextSelectorProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  isOpen?: boolean;
  onToggle?(value: boolean): void;
  onSelect?(event: React.SyntheticEvent<HTMLButtonElement>, value: ReactNode): void;
  screenReaderLabel?: string;
  toggleText?: string;
  searchButtonAriaLabel?: string;
  searchInputValue?: string;
  onSearchInputChange?(value: string): void;
  searchInputPlaceholder?: string;
  onSearchButtonClick?(event: React.SyntheticEvent<HTMLButtonElement>): void;
}

declare const ContextSelector: FunctionComponent<ContextSelectorProps>;

export default ContextSelector;
