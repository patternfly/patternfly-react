import { FunctionComponent, HTMLProps, FormEvent } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface TabsProps extends Omit<HTMLProps<HTMLDivElement>, 'onSelect'> {
  children: any;
  activeKey?: number;
  onSelect?(event: FormEvent<HTMLInputElement>, eventKey: number): void;
  isFilled?: boolean;
  isSecondary?: boolean;
  leftScrollAriaLabel?: string;
  rightScrollAriaLabel?: string;
}

declare const Tabs: FunctionComponent<TabsProps>;

export default Tabs;
