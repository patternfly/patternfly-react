import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import formStyles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { DualListSelectorListItem } from './DualListSelectorListItem';
import { DualListSelectorTree, DualListSelectorTreeItemData } from './DualListSelectorTree';
import { PickOptional } from '../../helpers';
import { canUseDOM } from '../../helpers/util';
import { handleArrows } from '../../helpers';

export interface DualListSelectorPaneProps {
  /** Additional classes applied to the dual list selector. */
  className?: string;
  /** Flag indicating if this pane is the chosen pane. */
  isChosen?: boolean;
  /* Flag indicating if the dual list selector uses trees instead of simple lists */
  isTree?: boolean;
  /** Status to display above the pane. */
  status?: string;
  /** Title of the pane. */
  title?: React.ReactNode;
  /** Options to list in the pane. */
  options?: React.ReactNode[];
  /** Options currently selected in the pane. */
  selectedOptions?: string[] | number[];
  /** Callback for search input. */
  onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Callback for when an option is selected. */
  onOptionSelect?: (
    e: React.MouseEvent | React.ChangeEvent,
    index: number,
    isChosen: boolean,
    text?: string,
    itemData?: any,
    parentData?: any
  ) => void;
  onOptionCheck?: (
    evt: React.MouseEvent | React.ChangeEvent<HTMLInputElement>,
    isChecked: boolean,
    isChosen: boolean,
    itemData: DualListSelectorTreeItemData
  ) => void;
  /** Actions to place above the pane. */
  actions?: React.ReactNode[];
  /** A callback for when the search input value for changes. */
  onSearchInputChanged?: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
  /** Filter function for custom filtering based on search string. */
  filterOption?: (option: React.ReactNode, input: string) => boolean;
  /** Flag indicating a search bar should be included above the pane. */
  isSearchable?: boolean;
  /** Accessible label for the search input */
  searchInputAriaLabel?: string;
  /** Id of the pane. */
  id: string;
  /** Callback for updating the filtered options in DualListSelector */
  onFilterUpdate?: (newFilteredOptions: React.ReactNode[], paneType: string, isSearchReset: boolean) => void;
}

interface DualListSelectorPaneState {
  input: string;
  focusedOption: string;
}

export class DualListSelectorPane extends React.Component<DualListSelectorPaneProps, DualListSelectorPaneState> {
  static displayName = 'DualListSelectorPane';
  static defaultProps: PickOptional<DualListSelectorPaneProps> = {
    isChosen: false,
    status: '',
    title: '',
    options: [] as React.ReactNode[],
    selectedOptions: [],
    isSearchable: false,
    searchInputAriaLabel: ''
  };
  private menuEl = React.createRef<HTMLDivElement>();
  private optionsRefs = [] as HTMLElement[];

  constructor(props: DualListSelectorPaneProps) {
    super(props);
    this.state = {
      input: '',
      focusedOption: null
    };
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { isTree, options, isChosen } = this.props;

    this.setState({ input: e.target.value }, () => {
      const { input } = this.state;
      let filtered;
      if (isTree) {
        filtered = (options as DualListSelectorTreeItemData[])
          .map(opt => Object.assign({}, opt))
          .filter(item => this.filterInput(item as DualListSelectorTreeItemData, input));
      } else {
        filtered = options.filter(option => {
          if (this.displayOption(option, input)) {
            return option;
          }
        });
      }
      this.props.onFilterUpdate(filtered, isChosen ? 'chosen' : 'available', input === '');
    });

    if (this.props.onSearchInputChanged) {
      this.props.onSearchInputChanged(e.target.value, e);
    }
    this.optionsRefs = [];
  };

  sendRef = (optionRef: React.ReactNode, index: number) => {
    this.optionsRefs[index] = optionRef as HTMLElement;
  };

  handleKeys = (event: KeyboardEvent) => {
    if (
      !this.menuEl.current ||
      (this.menuEl.current !== (event.target as HTMLElement).closest('.pf-c-dual-list-selector__menu') &&
        !Array.from(this.menuEl.current.getElementsByClassName('pf-c-dual-list-selector__menu')).includes(
          (event.target as HTMLElement).closest('.pf-c-dual-list-selector__menu')
        ))
    ) {
      return;
    }
    event.stopImmediatePropagation();

    const validOptions = Array.from(this.menuEl.current.getElementsByTagName('BUTTON')).filter(
      el => !el.classList.contains('pf-m-disabled')
    );
    const activeElement = document.activeElement;
    handleArrows(
      event,
      validOptions,
      (element: Element) => activeElement.contains(element),
      (element: Element) => element,
      undefined,
      undefined,
      true,
      false
    );
  };

  filterInput = (item: DualListSelectorTreeItemData, input: string): boolean => {
    if (this.props.filterOption) {
      return this.props.filterOption(item, input);
    } else {
      if (item.text.toLowerCase().includes(input.toLowerCase()) || input === '') {
        return true;
      }
    }
    if (item.children) {
      return (
        (item.children = item.children
          .map(opt => Object.assign({}, opt))
          .filter(child => this.filterInput(child, input))).length > 0
      );
    }
  };

  displayOption = (option: React.ReactNode, input: string) => {
    if (this.props.filterOption) {
      return this.props.filterOption(option, input);
    } else {
      return option
        .toString()
        .toLowerCase()
        .includes(input.toLowerCase());
    }
  };

  onOptionSelect = (
    e: React.MouseEvent | React.ChangeEvent,
    index: number,
    isChosen: boolean,
    text?: string,
    itemData?: any,
    parentItem?: any
  ) => {
    this.setState({ focusedOption: `${this.props.id}-option-${index}` });
    this.props.onOptionSelect(e, index, isChosen, text, itemData, parentItem);
  };

  componentDidMount() {
    if (canUseDOM) {
      window.addEventListener('keydown', this.handleKeys);
    }
  }

  componentWillUnmount() {
    if (canUseDOM) {
      window.removeEventListener('keydown', this.handleKeys);
    }
  }

  render() {
    const {
      isChosen,
      title,
      actions,
      isSearchable,
      isTree,
      searchInputAriaLabel,
      className,
      status,
      selectedOptions,
      options,
      id,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      onSearchInputChanged,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      filterOption,
      onOptionSelect,
      onOptionCheck,
      onFilterUpdate,
      ...props
    } = this.props;
    const { input, focusedOption } = this.state;

    let displayIndex = -1;

    return (
      <div
        className={css(styles.dualListSelectorPane, isChosen ? styles.modifiers.chosen : 'pf-m-available', className)}
        {...props}
      >
        {title && (
          <div className={css(styles.dualListSelectorHeader)}>
            <div className="pf-c-dual-list-selector__title">
              <div className={css(styles.dualListSelectorTitleText)}>{title}</div>
            </div>
          </div>
        )}
        {(actions || isSearchable) && (
          <div className={css(styles.dualListSelectorTools)}>
            {isSearchable && (
              <div className={css(styles.dualListSelectorToolsFilter)}>
                <input
                  className={css(formStyles.formControl, formStyles.modifiers.search)}
                  type="search"
                  onChange={this.onChange}
                  aria-label={searchInputAriaLabel}
                />
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
        {options && !isTree && (
          <div className={css(styles.dualListSelectorMenu)} ref={this.menuEl} tabIndex={0}>
            <ul
              className={css(styles.dualListSelectorList)}
              role="listbox"
              aria-multiselectable="true"
              aria-labelledby={`${id}-status`}
              aria-activedescendant={focusedOption}
            >
              {options.map((option, index) => {
                if (this.displayOption(option, input)) {
                  displayIndex = displayIndex + 1;
                  return (
                    <DualListSelectorListItem
                      key={index}
                      isSelected={(selectedOptions as number[]).indexOf(index) !== -1}
                      onOptionSelect={this.onOptionSelect}
                      isChosen={isChosen}
                      orderIndex={index}
                      filteredIndex={displayIndex}
                      sendRef={this.sendRef}
                      id={`${id}-option-${index}`}
                    >
                      {option}
                    </DualListSelectorListItem>
                  );
                }
                return;
              })}
            </ul>
          </div>
        )}
        {options && isTree && (
          <div className={css(styles.dualListSelectorMenu)} ref={this.menuEl} tabIndex={0}>
            <DualListSelectorTree
              data={
                isSearchable
                  ? (options as DualListSelectorTreeItemData[])
                      .map(opt => Object.assign({}, opt))
                      .filter(item => this.filterInput(item as DualListSelectorTreeItemData, input))
                  : (options as DualListSelectorTreeItemData[])
              }
              isChosen={isChosen}
              onOptionSelect={this.onOptionSelect}
              onOptionCheck={onOptionCheck}
              selectedOptions={selectedOptions as string[]}
            />
          </div>
        )}
      </div>
    );
  }
}
