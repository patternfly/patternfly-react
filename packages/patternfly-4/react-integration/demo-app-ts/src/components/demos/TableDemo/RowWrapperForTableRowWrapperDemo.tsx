import * as React from 'react';
import { RowWrapperProps } from '@patternfly/react-table';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export default function customRowWrapper ({
  trRef,
  className,
  rowProps,
  row,
  ...props
}: RowWrapperProps) {

  const isOddRow = rowProps && (rowProps.rowIndex + 1) % 2;
  const customStyle = {
    borderLeft: '3px solid var(--pf-global--primary-color--100)'
  }

  return (
    <tr
    {...props}
    ref={trRef as React.Ref<any>}
    className={css(
      className,
      (isOddRow ? 'odd-row-class' : 'even-row-class'),
      'custom-static-class',
      ((row && row.isExpanded) !== undefined) && styles.tableExpandableRow,
      (row && row.isExpanded) && styles.modifiers.expanded,
      (row && row.isHeightAuto) && styles.modifiers.heightAuto
    )}
    hidden={(row && row.isExpanded !== undefined) && (row && !row.isExpanded)}
    style={isOddRow ? customStyle : {}}
  />
  );
}
