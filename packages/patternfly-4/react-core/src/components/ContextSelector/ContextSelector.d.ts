import { FunctionComponent, ReactNode } from 'react';
import { OneOf } from '../../helpers/typeUtils';

export interface ContextSelectorProps {
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
