import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { RowWrapperProps } from './RowWrapper';
import { Tr } from '../TableComposable';

export const TreeRowWrapper: React.FunctionComponent<RowWrapperProps> = ({
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rowProps,
  ...props
}: RowWrapperProps) => {
  const { level, posinset, setsize, isExpanded, isHidden } = props.row.props;
  return (
    <Tr
      aria-level={level}
      aria-posinset={posinset}
      aria-setsize={setsize}
      aria-expanded={!!isExpanded}
      isHidden={isHidden}
      className={css(className, isExpanded && 'pf-m-expandable', isExpanded && styles.modifiers.expanded)}
      {...props}
    />
  );
};
TreeRowWrapper.displayName = 'TreeRowWrapper';
