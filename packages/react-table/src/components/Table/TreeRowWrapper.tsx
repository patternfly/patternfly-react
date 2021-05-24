import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import stylesTreeView from '@patternfly/react-styles/css/components/Table/table-tree-view';
import { RowWrapperProps } from './RowWrapper';
import { Tr } from '../TableComposable';
import { TableFocusContext } from './TableContext';

export const TreeRowWrapper: React.FunctionComponent<RowWrapperProps> = ({
  className,
  rowProps,
  row,
  ...props
}: RowWrapperProps) => {
  const {
    'aria-level': level,
    'aria-posinset': posinset,
    'aria-setsize': setsize,
    isExpanded,
    isDetailsExpanded,
    isHidden
  } = row.props;

  const focusContext = React.useContext(TableFocusContext);

  return (
    <Tr
      aria-level={level}
      aria-posinset={posinset}
      aria-setsize={setsize}
      aria-expanded={!!isExpanded}
      isHidden={isHidden}
      className={css(
        className,
        isExpanded && styles.modifiers.expanded,
        isDetailsExpanded && stylesTreeView.modifiers.treeViewDetailsExpanded
      )}
      tabIndex={focusContext.focusableRowIndex === rowProps.rowIndex ? 0 : -1}
      {...props}
    />
  );
};
TreeRowWrapper.displayName = 'TreeRowWrapper';
