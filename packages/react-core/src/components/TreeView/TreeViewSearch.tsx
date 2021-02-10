import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';
import formStyles from '@patternfly/react-styles/css/components/FormControl/form-control';

export interface TreeViewSearchProps {}

export const TreeViewSearch: React.FunctionComponent<TreeViewSearchProps> = ({ ...props }: TreeViewSearchProps) => (
  <div className={css(styles.treeViewSearch)}>
    <input className={css(formStyles.formControl, formStyles.modifiers.search)} type="search" {...props} />
  </div>
);
TreeViewSearch.displayName = 'TreeViewSearch';
