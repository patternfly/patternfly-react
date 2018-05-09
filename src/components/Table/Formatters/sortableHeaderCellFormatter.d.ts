import { CustomHeaderFormatterProps } from './customHeaderFormattersDefinition';
import { ReactNode } from 'react';

export interface SortableHeaderCellFormatterProps
  extends CustomHeaderFormatterProps {
  column?: any;
}

declare function sortableHeaderCellFormatter(
  props: SortableHeaderCellFormatterProps
): ReactNode;

export default sortableHeaderCellFormatter;
