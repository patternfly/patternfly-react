import {
  HTMLProps,
  ReactNode,
  MouseEvent,
  ChangeEvent,
  KeyboardEvent,
  FormEvent,
  SyntheticEvent,
  FunctionComponent,
  CSSProperties,
  useState,
  useContext
} from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import { DualListSelectorTree, DualListSelectorTreeItemData } from './DualListSelectorTree';
import { getUniqueId } from '../../helpers';
import { DualListSelectorListWrapper } from './DualListSelectorListWrapper';
import { DualListSelectorContext, DualListSelectorPaneContext } from './DualListSelectorContext';
import { DualListSelectorList } from './DualListSelectorList';
import { SearchInput } from '../SearchInput';
import cssMenuMinHeight from '@patternfly/react-tokens/dist/esm/c_dual_list_selector__menu_MinHeight';

/** Acts as the container for a list of options that are either available or chosen,
 * depending on the pane type (available or chosen). A search input and other actions,
 * such as sorting, can also be passed into this sub-component.
 */

export interface DualListSelectorPaneProps extends Omit<HTMLProps<HTMLDivElement>, 'title'> {
  /** Additional classes applied to the dual list selector pane. */
  className?: string;
  /** A dual list selector list or dual list selector tree to be rendered in the pane. */
  children?: ReactNode;
  /** Flag indicating if this pane is the chosen pane. */
  isChosen?: boolean;
  /** Status to display above the pane. */
  status?: string;
  /** Title of the pane. */
  title?: ReactNode;
  /** A search input placed above the list at the top of the pane, before actions. */
  searchInput?: ReactNode;
  /** Actions to place above the pane. */
  actions?: ReactNode[];
  /** Id of the pane. */
  id?: string;
  /** @hide Options to list in the pane. */
  options?: ReactNode[];
  /** @hide Options currently selected in the pane. */
  selectedOptions?: string[] | number[];
  /** @hide Callback for when an option is selected. Optionally used only when options prop is provided. */
  onOptionSelect?: (
    event: MouseEvent | ChangeEvent | KeyboardEvent,
    index: number,
    isChosen: boolean,
    id?: string,
    itemData?: any,
    parentData?: any
  ) => void;
  /** @hide Callback for when a tree option is checked. Optionally used only when options prop is provided. */
  onOptionCheck?: (
    event: MouseEvent | ChangeEvent<HTMLInputElement> | KeyboardEvent,
    isChecked: boolean,
    itemData: DualListSelectorTreeItemData
  ) => void;
  /** @hide Flag indicating a dynamically built search bar should be included above the pane. */
  isSearchable?: boolean;
  /** Flag indicating whether the component is disabled. */
  isDisabled?: boolean;
  /** Callback for search input. To be used when isSearchable is true. */
  onSearch?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** @hide A callback for when the search input value for changes.  To be used when isSearchable is true. */
  onSearchInputChanged?: (event: FormEvent<HTMLInputElement>, value: string) => void;
  /** @hide Callback for search input clear button */
  onSearchInputClear?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  /** @hide Filter function for custom filtering based on search string. To be used when isSearchable is true. */
  filterOption?: (option: ReactNode, input: string) => boolean;
  /** @hide Accessible label for the search input. To be used when isSearchable is true. */
  searchInputAriaLabel?: string;
  /** @hide Callback for updating the filtered options in DualListSelector. To be used when isSearchable is true. */
  onFilterUpdate?: (newFilteredOptions: ReactNode[], paneType: string, isSearchReset: boolean) => void;
  /** Minimum height of the list of options rendered in the pane. **/
  listMinHeight?: string;
}

export const DualListSelectorPane: FunctionComponent<DualListSelectorPaneProps> = ({
  isChosen = false,
  className = '',
  status = '',
  actions,
  searchInput,
  children,
  onOptionSelect,
  onOptionCheck,
  title = '',
  options = [],
  selectedOptions = [],
  isSearchable = false,
  searchInputAriaLabel = '',
  onFilterUpdate,
  onSearchInputChanged,
  onSearchInputClear,
  filterOption,
  id = getUniqueId('dual-list-selector-pane'),
  isDisabled = false,
  listMinHeight,
  ...props
}: DualListSelectorPaneProps) => {
  const [input, setInput] = useState('');
  const { isTree } = useContext(DualListSelectorContext);

  // only called when search input is dynamically built
  const onChange = (e: FormEvent<HTMLInputElement>, newValue: string) => {
    let filtered: ReactNode[];
    if (isTree) {
      filtered = options
        .map((opt) => Object.assign({}, opt))
        .filter((item) => filterInput(item as unknown as DualListSelectorTreeItemData, newValue));
    } else {
      filtered = options.filter((option) => {
        if (displayOption(option)) {
          return option;
        }
      });
    }
    onFilterUpdate(filtered, isChosen ? 'chosen' : 'available', newValue === '');

    if (onSearchInputChanged) {
      onSearchInputChanged(e, newValue);
    }
    setInput(newValue);
  };

  // only called when options are passed via options prop and isTree === true
  const filterInput = (item: DualListSelectorTreeItemData, input: string): boolean => {
    if (filterOption) {
      return filterOption(item as unknown as ReactNode, input);
    } else {
      if (item.text.toLowerCase().includes(input.toLowerCase()) || input === '') {
        return true;
      }
    }
    if (item.children) {
      return (
        (item.children = item.children
          .map((opt) => Object.assign({}, opt))
          .filter((child) => filterInput(child, input))).length > 0
      );
    }
  };

  // only called when options are passed via options prop and isTree === false
  const displayOption = (option: ReactNode) => {
    if (filterOption) {
      return filterOption(option, input);
    } else {
      return option.toString().toLowerCase().includes(input.toLowerCase());
    }
  };

  return (
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
      {(actions || searchInput || isSearchable) && (
        <div className={css(styles.dualListSelectorTools)}>
          {(isSearchable || searchInput) && (
            <div className={css(styles.dualListSelectorToolsFilter)}>
              {searchInput ? (
                searchInput
              ) : (
                <SearchInput
                  onChange={isDisabled ? undefined : onChange}
                  onClear={
                    onSearchInputClear ? onSearchInputClear : (e) => onChange(e as FormEvent<HTMLInputElement>, '')
                  }
                  isDisabled={isDisabled}
                  aria-label={searchInputAriaLabel}
                />
              )}
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
        {!isTree && (
          <DualListSelectorListWrapper
            aria-labelledby={`${id}-status`}
            options={options}
            selectedOptions={selectedOptions}
            onOptionSelect={(e: MouseEvent | ChangeEvent | KeyboardEvent, index: number, id: string) =>
              onOptionSelect(e, index, isChosen, id)
            }
            displayOption={displayOption}
            id={`${id}-list`}
            isDisabled={isDisabled}
            {...(listMinHeight && {
              style: { [cssMenuMinHeight.name]: listMinHeight } as CSSProperties
            })}
          >
            {children}
          </DualListSelectorListWrapper>
        )}
        {isTree && (
          <DualListSelectorListWrapper
            aria-labelledby={`${id}-status`}
            id={`${id}-list`}
            {...(listMinHeight && {
              style: { [cssMenuMinHeight.name]: listMinHeight } as CSSProperties
            })}
          >
            {options.length > 0 ? (
              <DualListSelectorList>
                <DualListSelectorTree
                  data={
                    isSearchable
                      ? (options
                          .map((opt) => Object.assign({}, opt))
                          .filter((item) =>
                            filterInput(item as unknown as DualListSelectorTreeItemData, input)
                          ) as unknown as DualListSelectorTreeItemData[])
                      : (options as unknown as DualListSelectorTreeItemData[])
                  }
                  onOptionCheck={onOptionCheck}
                  id={`${id}-tree`}
                  isDisabled={isDisabled}
                />
              </DualListSelectorList>
            ) : (
              children
            )}
          </DualListSelectorListWrapper>
        )}
      </DualListSelectorPaneContext.Provider>
    </div>
  );
};
DualListSelectorPane.displayName = 'DualListSelectorPane';
