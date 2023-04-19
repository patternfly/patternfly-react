import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';
import formStyles from '@patternfly/react-styles/css/components/FormControl/form-control';

/** Renders a search input for the tree view. This sub-component should be passed into the
 * tree view component's toolbar property.
 */

export interface TreeViewSearchProps extends React.HTMLProps<HTMLInputElement> {
  /** Accessible label for the search input. */
  'aria-label'?: string;
  /** Classes applied to the wrapper for the search input. */
  className?: string;
  /** Id for the search input. */
  id?: string;
  /** Name for the search input. */
  name?: string;
  /** Callback for search input. */
  onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TreeViewSearch: React.FunctionComponent<TreeViewSearchProps> = ({
  className,
  onSearch,
  id,
  name,
  'aria-label': ariaLabel,
  ...props
}: TreeViewSearchProps) => (
  <div className={css(styles.treeViewSearch, className)}>
    <input
      className={css(formStyles.formControl, formStyles.modifiers.search)}
      onChange={onSearch}
      id={id}
      name={name}
      aria-label={ariaLabel}
      type="search"
      {...props}
    />
  </div>
);
TreeViewSearch.displayName = 'TreeViewSearch';
