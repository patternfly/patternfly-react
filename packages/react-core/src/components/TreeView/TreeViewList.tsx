import { HTMLProps, ReactNode, FunctionComponent, Fragment } from 'react';
import { css } from '@patternfly/react-styles';
import { Divider } from '../Divider';
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';

export interface TreeViewListProps extends HTMLProps<HTMLUListElement> {
  /** Child nodes of the current tree view. */
  children: ReactNode;
  /** Flag indicating if the tree view is nested under another tree view. */
  isNested?: boolean;
  /** Toolbar to display above the tree view. */
  toolbar?: ReactNode;
}

export const TreeViewList: FunctionComponent<TreeViewListProps> = ({
  isNested = false,
  toolbar,
  children,
  ...props
}: TreeViewListProps) => (
  <>
    {toolbar && (
      <Fragment>
        {toolbar}
        <Divider />
      </Fragment>
    )}
    <ul className={css(`${styles.treeView}__list`)} role={isNested ? 'group' : 'tree'} {...props}>
      {children}
    </ul>
  </>
);
TreeViewList.displayName = 'TreeViewList';
