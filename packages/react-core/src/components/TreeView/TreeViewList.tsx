import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';
import { TreeViewSearch } from './TreeViewSearch';
import { Divider } from '../Divider';

export interface TreeViewListProps {
  /** Flag indicating if the tree view is nested under another tree view */
  isNested?: boolean;
  /** Callback for search input */
  onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Additional props for search input */
  searchProps?: any;
  /** Child nodes of the current tree view */
  children: React.ReactNode;
}

export const TreeViewList: React.FunctionComponent<TreeViewListProps> = ({
  isNested = false,
  onSearch,
  searchProps,
  children,
  ...props
}: TreeViewListProps) => {
  const list = <ul role={isNested ? 'group' : 'tree'}>{children}</ul>;
  return isNested ? (
    list
  ) : (
    <div className={css(styles.treeView)} {...props}>
      {onSearch && (
        <React.Fragment>
          <TreeViewSearch onChange={onSearch} {...searchProps} />
          <Divider />
        </React.Fragment>
      )}
      {list}
    </div>
  );
};
TreeViewList.displayName = 'TreeViewList';
