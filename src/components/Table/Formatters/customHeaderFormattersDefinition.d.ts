import { TableHeadingProps } from '../TableHeading';
import { TableCheckboxProps } from '../TableCheckbox';

export interface CustomHeaderFormatterProps {
  cellProps?: TableHeadingProps;
  columns?: any[];
  onSelectAllRows?: TableCheckboxProps['onChange'];
  onSort?: Function;
  rows?: any[];
  sortingColumns?: any;
}

declare function customHeaderFormattersDefinition(
  props: CustomHeaderFormatterProps
): any;

export default customHeaderFormattersDefinition;
