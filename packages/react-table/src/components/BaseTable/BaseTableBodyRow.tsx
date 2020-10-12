import * as React from 'react';
import { useOUIAProps, OUIAProps } from '@patternfly/react-core';
import styles from '@patternfly/react-styles/css/components/Table/table';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { css } from '@patternfly/react-styles';

export interface BaseTableBodyRowProps extends React.HTMLProps<HTMLTableRowElement>, OUIAProps {
  /** Content rendered inside the <tr> row */
  children?: React.ReactNode;
  /** Additional classes added to the <tr> row  */
  className?: string;
  /** Makes the row expandable and determines if it's expanded or not */
  isExpanded?: boolean;
  /** Whether the row is editable */
  isEditable?: boolean;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const BaseTableBodyRowBase: React.FunctionComponent<BaseTableBodyRowProps> = ({
  children,
  className,
  isExpanded,
  isEditable,
  innerRef,
  ouiaId,
  ouiaSafe = true,
  ...props
}: BaseTableBodyRowProps) => {
  const ouiaProps = useOUIAProps('TableRow', ouiaId, ouiaSafe);
  return (
    <tr
      className={css(
        className,
        isExpanded !== undefined && styles.tableExpandableRow,
        isExpanded && styles.modifiers.expanded,
        isEditable && inlineStyles.modifiers.inlineEditable
      )}
      hidden={isExpanded !== undefined && !isExpanded}
      ref={innerRef}
      {...ouiaProps}
      {...props}
    >
      {children}
    </tr>
  );
};

export const BaseTableBodyRow = React.forwardRef(
  (props: BaseTableBodyRowProps, ref: React.Ref<HTMLTableRowElement>) => (
    <BaseTableBodyRowBase {...props} innerRef={ref} />
  )
);
BaseTableBodyRow.displayName = 'BaseTableBodyRow';
