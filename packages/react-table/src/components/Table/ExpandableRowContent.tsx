import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

interface ExpandableRowContentProps {
  /** Content rendered inside the expandable row. */
  children?: React.ReactNode;
  /** Flag indicating whether the expandable row content has no background. This should be passed in when
   * the parent Td is passed the noPadding prop.
   */
  hasNoBackground?: boolean;
}

export const ExpandableRowContent: React.FunctionComponent<ExpandableRowContentProps> = ({
  children = null as React.ReactNode,
  hasNoBackground,
  ...props
}: ExpandableRowContentProps) => (
  <div {...props} className={css(styles.tableExpandableRowContent, hasNoBackground && styles.modifiers.noBackground)}>
    {children}
  </div>
);
ExpandableRowContent.displayName = 'ExpandableRowContent';
