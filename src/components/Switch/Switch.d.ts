import { ComponentClass, Component } from 'react';
import {
  SWITCH_BS_SIZES,
  SWITCH_COLORS,
  SwitchColor,
  SwitchSize
} from './SwitchConstants';

export interface SwitchProps {
  value?: boolean;
  defaultValue?: boolean;
  bsSize?: SwitchSize;
  animate?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  inverse?: boolean;
  tristate?: boolean;
  onColor?: SwitchColor;
  offColor?: SwitchColor;
  onText?: React.ReactNode;
  offText?: React.ReactNode;
  labelText?: string;
  handleWidth?: string | number;
  labelWidth?: string | number;
  baseClass?: string;
  wrapperClass?: string;
  onChange(element: Switch, value: boolean): void;
}

declare class Switch extends Component<SwitchProps> {
  public static SWITCH_BS_SIZES: typeof SWITCH_BS_SIZES;
  public static SWITCH_COLORS: typeof SWITCH_COLORS;
  public value(): boolean;
}

export default Switch;
