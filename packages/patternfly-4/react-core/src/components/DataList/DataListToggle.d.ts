import { FunctionComponent, HTMLProps } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface DataListToggleProps extends Omit<HTMLProps<HTMLDivElement>, 'aria-labelledby' | 'aria-label' | 'id'> {
  isExpanded: boolean;
  'aria-controls'?: string;
  'aria-labelledby'?: string;
  'aria-label'?: string;
  id: string;
}

declare const DataListToggle: FunctionComponent<DataListToggleProps>;

export default DataListToggle;
