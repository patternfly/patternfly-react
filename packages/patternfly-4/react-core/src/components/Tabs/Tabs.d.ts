import { FunctionComponent, HTMLProps, FormEvent } from 'react';
import { OneOf, Omit } from '../../helpers/typeUtils';

export const TabsVariant: {
  div: 'div';
  nav: 'nav';
};

export interface TabsProps extends Omit<HTMLProps<HTMLDivElement>, 'onSelect'> {
  children: any;
  activeKey?: number;
  onSelect?(event: FormEvent<HTMLInputElement>, eventKey: number): void;
  isFilled?: boolean;
  isSecondary?: boolean;
  leftScrollAriaLabel?: string;
  rightScrollAriaLabel?: string;
  'aria-label'?: string;
  variant?: OneOf<typeof TabsVariant, keyof typeof TabsVariant>;
}

declare const Tabs: FunctionComponent<TabsProps>;

export default Tabs;
