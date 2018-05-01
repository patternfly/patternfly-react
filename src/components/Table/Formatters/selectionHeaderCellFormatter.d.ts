import { CustomHeaderFormatterProps } from './customHeaderFormattersDefinition';
import { ReactNode } from 'react';

export interface SelectionHeaderCellFormatterProps
  extends CustomHeaderFormatterProps {
  column?: any;
}

declare function selectionHeaderCellFormatter(
  props: SelectionHeaderCellFormatterProps
): ReactNode;

export default selectionHeaderCellFormatter;
