import { SFC, ReactType } from 'react';

export interface DropdownKebabProps {
  /** additional kebab dropdown classes */
  className?: string;
  /** dropdown component class */
  componentClass?: ReactType;
  /** kebab dropdown id */
  id: string | number;
  /** menu right aligned */
  pullRight?: boolean;
  /** toggle style */
  toggleStyle?: string;
}

declare const DropdownKebab: React.SFC<DropdownKebabProps>;

export default DropdownKebab;
