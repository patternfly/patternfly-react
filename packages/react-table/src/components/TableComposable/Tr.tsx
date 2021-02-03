import * as React from 'react';
import { useOUIAProps, OUIAProps } from '@patternfly/react-core';
import styles from '@patternfly/react-styles/css/components/Table/table';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { css } from '@patternfly/react-styles';

export interface TrProps extends React.HTMLProps<HTMLTableRowElement>, OUIAProps {
  /** Content rendered inside the <tr> row */
  children?: React.ReactNode;
  /** Additional classes added to the <tr> row  */
  className?: string;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
  /** */
  isHidden?: boolean;
  /** Only applicable to Tr within the Tbody: Makes the row expandable and determines if it's expanded or not */
  isExpanded?: boolean;
  /** Only applicable to Tr within the Tbody: Whether the row is editable */
  isEditable?: boolean;
}

const TrBase: React.FunctionComponent<TrProps> = ({
  children,
  className,
  isExpanded,
  isEditable,
  isHidden = false,
  innerRef,
  ouiaId,
  ouiaSafe = true,
  ...props
}: TrProps) => {
  const ouiaProps = useOUIAProps('TableRow', ouiaId, ouiaSafe);
  return (
    <tr
      className={css(
        className,
        isExpanded !== undefined && styles.tableExpandableRow,
        isExpanded && styles.modifiers.expanded,
        isEditable && inlineStyles.modifiers.inlineEditable
      )}
      hidden={isHidden || (isExpanded !== undefined && !isExpanded)}
      ref={innerRef}
      {...ouiaProps}
      {...props}
    >
      {children}
    </tr>
  );
};

export const Tr = React.forwardRef((props: TrProps, ref: React.Ref<HTMLTableRowElement>) => (
  <TrBase {...props} innerRef={ref} />
));
Tr.displayName = 'Tr';
