import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { Divider } from '../Divider';
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';

export interface TreeViewListProps extends React.HTMLProps<HTMLUListElement> {
  /** Child nodes of the current tree view. */
  children: React.ReactNode;
  /** Flag indicating if the tree view is nested under another tree view. */
  isNested?: boolean;
  /** Toolbar to display above the tree view. */
  toolbar?: React.ReactNode;
  /** Flag indicating whether multiple nodes can be selected in the tree view. This will also set the
   * aria-multiselectable attribute on the tree view list which is required to be true when multiple selection is intended.
   * Can only be applied to the root tree view list.
   */
  isMultiSelectable?: boolean;
  /** A text string that sets the accessible name of the tree view list. Either this or the aria-labelledby property must
   * be passed in.
   */
  'aria-label'?: string;
  /** A space separated list of element id's that sets the accessible name of the tree view list. Either
   * this or the aria-label property must be passed in.
   */
  'aria-labelledby'?: string;
}

export const TreeViewList: React.FunctionComponent<TreeViewListProps> = ({
  isNested = false,
  isMultiSelectable = false,
  toolbar,
  children,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  ...props
}: TreeViewListProps) => (
  <>
    {toolbar && (
      <React.Fragment>
        {toolbar}
        <Divider />
      </React.Fragment>
    )}
    <ul
      className={css(`${styles.treeView}__list`)}
      role={isNested ? 'group' : 'tree'}
      aria-multiselectable={isNested ? undefined : isMultiSelectable}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      {...props}
    >
      {children}
    </ul>
  </>
);
TreeViewList.displayName = 'TreeViewList';
