import { ComponentClass } from 'react';
import { IconProps } from '../Icon';

export interface SliderProps {
  id?: string;
  oriantation?: 'horizontal' | 'vertical';
  min?: number;
  max?: number;
  step?: number;
  value?: number | number[];
  tooltip?: boolean;
  onSlide?(value: number | number[]): void;
  label?: string;
  labelClass?: string;
  icon?: IconProps;
  input?: boolean;
  sliderClass?: string;
  dropdownList?: string[];
  inputFormat?: string;
}

declare const Slider: ComponentClass<SliderProps>;

export default Slider;
