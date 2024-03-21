import { ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

interface ExpandableRowContentProps {
  children?: ReactNode;
}

export const ExpandableRowContent: FunctionComponent<ExpandableRowContentProps> = ({
  children = null as ReactNode,
  ...props
}: ExpandableRowContentProps) => (
  <div {...props} className={css(styles.tableExpandableRowContent)}>
    {children}
  </div>
);
ExpandableRowContent.displayName = 'ExpandableRowContent';
