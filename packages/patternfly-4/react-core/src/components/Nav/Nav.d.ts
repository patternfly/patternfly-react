import { FunctionComponent, HTMLProps, ReactNode, FormEvent } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface NavProps extends Omit<HTMLProps<HTMLDivElement>, 'onSelect'> {
  children?: ReactNode;
  className?: string;
  onSelect?(groupId: number, itemId: number, event: FormEvent<HTMLInputElement>): void;
  onToggle?(groupId: number, expanded: boolean, event: FormEvent<HTMLInputElement>): void;
  'aria-label'?: string;
}

declare const Nav: FunctionComponent<NavProps>;

export default Nav;
