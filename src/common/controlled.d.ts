import { ComponentClass, ComponentType } from 'react';

export interface ControlledOptions {
  types: any;
  defaults: any;
  persist?: any;
}

export default function controlled(
  options: ControlledOptions
): (component: ComponentType<any>) => ComponentClass<any>;
