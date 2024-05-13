import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import { getUniqueId } from '../../helpers';
import { DualListSelectorListWrapper } from './DualListSelectorListWrapper';
import { DualListSelectorPaneContext } from './DualListSelectorContext';
import { SearchInput } from '../SearchInput';
import cssMenuMinHeight from '@patternfly/react-tokens/dist/esm/c_dual_list_selector__menu_MinHeight';

/** Acts as the container for a list of options that are either available or chosen,
 * depending on the pane type (available or chosen). A search input and other actions,
 * such as sorting, can also be passed into this sub-component.
 */

export interface DualListSelectorPaneProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
  /** Additional classes applied to the dual list selector pane. */
  className?: string;
  /** A dual list selector list or dual list selector tree to be rendered in the pane. */
  children?: React.ReactNode;
  /** Flag indicating if this pane is the chosen pane. */
  isChosen?: boolean;
  /** Status to display above the pane. */
  status?: string;
  /** Title of the pane. */
  title?: React.ReactNode;
  /** A search input placed above the list at the top of the pane, before actions. */
  searchInput?: React.ReactNode;
  /** Actions to place above the pane. */
  actions?: React.ReactNode[];
  /** ID of the pane. */
  id?: string;
  /** Flag indicating whether the component is disabled. */
  isDisabled?: boolean;
  /** Callback for search input. To be used when isSearchable is true. */
  onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Minimum height of the list of options rendered in the pane. **/
  listMinHeight?: string;
}

export const DualListSelectorPane: React.FunctionComponent<DualListSelectorPaneProps> = ({
  isChosen = false,
  className = '',
  status = '',
  actions,
  searchInput,
  children,
  title = '',
  id = getUniqueId('dual-list-selector-pane'),
  isDisabled = false,
  listMinHeight,
  ...props
}: DualListSelectorPaneProps) => (
  <div
    className={css(styles.dualListSelectorPane, isChosen ? styles.modifiers.chosen : 'pf-m-available', className)}
    {...props}
  >
    {title && (
      <div className={css(styles.dualListSelectorHeader)}>
        <div className={`${styles.dualListSelector}__title`}>
          <div className={css(styles.dualListSelectorTitleText)}>{title}</div>
        </div>
      </div>
    )}
    {(actions || searchInput) && (
      <div className={css(styles.dualListSelectorTools)}>
        {searchInput && (
          <div className={css(styles.dualListSelectorToolsFilter)}>
            {searchInput ? searchInput : <SearchInput isDisabled={isDisabled} />}
          </div>
        )}
        {actions && <div className={css(styles.dualListSelectorToolsActions)}>{actions}</div>}
      </div>
    )}
    {status && (
      <div className={css(styles.dualListSelectorStatus)}>
        <div className={css(styles.dualListSelectorStatusText)} id={`${id}-status`}>
          {status}
        </div>
      </div>
    )}
    <DualListSelectorPaneContext.Provider value={{ isChosen }}>
      <DualListSelectorListWrapper
        aria-labelledby={`${id}-status`}
        id={`${id}-list`}
        {...(listMinHeight && {
          style: { [cssMenuMinHeight.name]: listMinHeight } as React.CSSProperties
        })}
      >
        {children}
      </DualListSelectorListWrapper>
    </DualListSelectorPaneContext.Provider>
  </div>
);
DualListSelectorPane.displayName = 'DualListSelectorPane';
