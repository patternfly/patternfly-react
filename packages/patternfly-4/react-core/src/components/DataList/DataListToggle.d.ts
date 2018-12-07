import { SFC, HTMLProps } from 'react';
import { Omit } from '../../typeUtils';

export interface DataListToggleProps extends Omit<HTMLProps<HTMLDivElement>, 'aria-labelledby' | 'aria-label' | 'id'> {
  isExpanded: boolean;
  'aria-labelledby': string;
  'aria-label': string;
  id: string;
}

declare const DataListToggle: SFC<DataListToggleProps>;

export default DataListToggle;
