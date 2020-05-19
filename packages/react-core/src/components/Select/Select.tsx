import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Select/select';
import badgeStyles from '@patternfly/react-styles/css/components/Badge/badge';
import formStyles from '@patternfly/react-styles/css/components/FormControl/form-control';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { css } from '@patternfly/react-styles';
import TimesCircleIcon from '@patternfly/react-icons/dist/js/icons/times-circle-icon';
import { SelectMenu } from './SelectMenu';
import { SelectOption, SelectOptionObject } from './SelectOption';
import { SelectToggle } from './SelectToggle';
import { SelectContext, SelectVariant, SelectDirection, KeyTypes } from './selectConstants';
import { Chip, ChipGroup } from '../ChipGroup';
import { keyHandler, getNextIndex, getOUIAProps, OUIAProps, PickOptional } from '../../helpers';
import { Divider } from '../Divider';

// seed for the aria-labelledby ID
let currentId = 0;

export interface SelectProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'onSelect' | 'ref' | 'checked' | 'selected'> {
  /** Content rendered inside the Select */
  children?: React.ReactElement[];
  /** Classes applied to the root of the Select */
  className?: string;
  /** Flag specifying which direction the Select menu expands */
  direction?: 'up' | 'down';
  /** Flag to indicate if select is open */
  isOpen?: boolean;
  /** Flag to indicate if select options are grouped */
  isGrouped?: boolean;
  /** Display the toggle with no border or background */
  isPlain?: boolean;
  /** Flag to indicate if select is disabled */
  isDisabled?: boolean;
  /** Flag to indicate if the typeahead select allows new items */
  isCreatable?: boolean;
  /** Text displayed in typeahead select to prompt the user to create an item */
  createText?: string;
  /** Title text of Select */
  placeholderText?: string | React.ReactNode;
  /** Text to display in typeahead select when no results are found */
  noResultsFoundText?: string;
  /** Array of selected items for multi select variants. */
  selections?: string | SelectOptionObject | (string | SelectOptionObject)[];
  /** Flag indicating if selection badge should be hidden for checkbox variant,default false */
  isCheckboxSelectionBadgeHidden?: boolean;
  /** Id for select toggle element */
  toggleId?: string;
  /** Adds accessible text to Select */
  'aria-label'?: string;
  /** Id of label for the Select aria-labelledby */
  'aria-labelledby'?: string;
  /** Label for input field of type ahead select variants */
  typeAheadAriaLabel?: string;
  /** Label for clear selection button of type ahead select variants */
  clearSelectionsAriaLabel?: string;
  /** Label for toggle of type ahead select variants */
  toggleAriaLabel?: string;
  /** Label for remove chip button of multiple type ahead select variant */
  removeSelectionAriaLabel?: string;
  /** Callback for selection behavior */
  onSelect?: (
    event: React.MouseEvent | React.ChangeEvent,
    value: string | SelectOptionObject,
    isPlaceholder?: boolean
  ) => void;
  /** Callback for toggle button behavior */
  onToggle: (isExpanded: boolean) => void;
  /** Callback for typeahead clear button */
  onClear?: (event: React.MouseEvent) => void;
  /** Optional callback for custom filtering */
  onFilter?: (e: React.ChangeEvent<HTMLInputElement>) => React.ReactElement[];
  /** Optional callback for newly created options */
  onCreateOption?: (newOptionValue: string) => void;
  /** Variant of rendered Select */
  variant?: 'single' | 'checkbox' | 'typeahead' | 'typeaheadmulti';
  /** Width of the select container as a number of px or string percentage */
  width?: string | number;
  /** Max height of the select container as a number of px or string percentage */
  maxHeight?: string | number;
  /** Icon element to render inside the select toggle */
  toggleIcon?: React.ReactElement;
  /** Custom content to render in the select menu.  If this prop is defined, the variant prop will be ignored and the select will render with a single select toggle */
  customContent?: React.ReactNode;
  /** Flag indicating if select should have an inline text input for filtering */
  hasInlineFilter?: boolean;
  /** Placeholder text for inline filter */
  inlineFilterPlaceholderText?: string;
  /** Custom text for select badge */
  customBadgeText?: string | number;
}

export interface SelectState {
  openedOnEnter: boolean;
  typeaheadInputValue: string | null;
  typeaheadActiveChild?: HTMLElement;
  typeaheadFilteredChildren: React.ReactNode[];
  typeaheadCurrIndex: number;
  creatableValue: string;
}

export class Select extends React.Component<SelectProps & OUIAProps, SelectState> {
  private parentRef = React.createRef<HTMLDivElement>();
  private filterRef = React.createRef<HTMLInputElement>();
  private refCollection: HTMLElement[] = [];

  static defaultProps: PickOptional<SelectProps> = {
    children: [] as React.ReactElement[],
    className: '',
    direction: SelectDirection.down,
    toggleId: null as string,
    isOpen: false,
    isGrouped: false,
    isPlain: false,
    isDisabled: false,
    isCreatable: false,
    'aria-label': '',
    'aria-labelledby': '',
    typeAheadAriaLabel: '',
    clearSelectionsAriaLabel: 'Clear all',
    toggleAriaLabel: 'Options menu',
    removeSelectionAriaLabel: 'Remove',
    selections: [],
    createText: 'Create',
    placeholderText: '',
    noResultsFoundText: 'No results found',
    variant: SelectVariant.single,
    width: '',
    onClear: () => undefined as void,
    onCreateOption: () => undefined as void,
    toggleIcon: null as React.ReactElement,
    onFilter: null,
    customContent: null,
    hasInlineFilter: false,
    inlineFilterPlaceholderText: null,
    customBadgeText: null
  };

  state: SelectState = {
    openedOnEnter: false,
    typeaheadInputValue: null,
    typeaheadActiveChild: null as HTMLElement,
    typeaheadFilteredChildren: React.Children.toArray(this.props.children),
    typeaheadCurrIndex: -1,
    creatableValue: ''
  };

  componentDidUpdate = (prevProps: SelectProps, prevState: SelectState) => {
    if (this.props.hasInlineFilter) {
      this.refCollection[0] = this.filterRef.current;
    }

    if (!prevState.openedOnEnter && this.state.openedOnEnter) {
      this.refCollection[0].focus();
    }

    if (prevProps.children !== this.props.children) {
      this.setState({
        typeaheadFilteredChildren: React.Children.toArray(this.props.children)
      });
    }

    if (prevProps.selections !== this.props.selections && this.props.variant === SelectVariant.typeahead) {
      this.setState({
        typeaheadInputValue: this.props.selections as string
      });
    }
  };

  onEnter = () => {
    this.setState({ openedOnEnter: true });
  };

  onClose = () => {
    this.setState({
      openedOnEnter: false,
      typeaheadInputValue: null,
      typeaheadActiveChild: null,
      typeaheadFilteredChildren: React.Children.toArray(this.props.children),
      typeaheadCurrIndex: -1
    });
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onFilter, isCreatable, onCreateOption, createText, noResultsFoundText, children } = this.props;
    let typeaheadFilteredChildren: any;
    if (onFilter) {
      typeaheadFilteredChildren = onFilter(e) || children;
    } else {
      let input: RegExp;
      try {
        input = new RegExp(e.target.value.toString(), 'i');
      } catch (err) {
        input = new RegExp(e.target.value.toString().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      }
      typeaheadFilteredChildren =
        e.target.value.toString() !== ''
          ? React.Children.toArray<React.ReactElement>(this.props.children).filter(
              child => this.getDisplay(child.props.value.toString(), 'text').search(input) === 0
            )
          : React.Children.toArray(this.props.children);
    }
    if (!typeaheadFilteredChildren) {
      typeaheadFilteredChildren = [];
    }
    if (typeaheadFilteredChildren.length === 0) {
      !isCreatable &&
        typeaheadFilteredChildren.push(
          <SelectOption isDisabled key={0} value={noResultsFoundText} isNoResultsOption />
        );
    }
    if (isCreatable && e.target.value !== '') {
      const newValue = e.target.value;
      typeaheadFilteredChildren.push(
        <SelectOption key={0} value={newValue} onClick={() => onCreateOption && onCreateOption(newValue)}>
          {createText} "{newValue}"
        </SelectOption>
      );
    }

    this.setState({
      typeaheadInputValue: e.target.value,
      typeaheadCurrIndex: -1,
      typeaheadFilteredChildren,
      typeaheadActiveChild: null,
      creatableValue: e.target.value
    });
    this.refCollection = [];
  };

  onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    this.setState({
      typeaheadInputValue: null,
      typeaheadActiveChild: null,
      typeaheadFilteredChildren: React.Children.toArray(this.props.children),
      typeaheadCurrIndex: -1
    });
  };

  extendTypeaheadChildren(typeaheadActiveChild: HTMLElement) {
    return this.state.typeaheadFilteredChildren.map((child: React.ReactNode) =>
      React.cloneElement(child as React.ReactElement, {
        isFocused:
          typeaheadActiveChild &&
          (typeaheadActiveChild.innerText ===
            this.getDisplay((child as React.ReactElement).props.value.toString(), 'text') ||
            (this.props.isCreatable &&
              typeaheadActiveChild.innerText === `{createText} "${(child as React.ReactElement).props.value}"`))
      })
    );
  }

  sendRef = (ref: React.ReactNode, index: number) => {
    this.refCollection[index] = ref as HTMLElement;
  };

  handleArrowKeys = (index: number, position: string) => {
    keyHandler(index, 0, position, this.refCollection, this.refCollection);
  };

  handleFocus = () => {
    if (!this.props.isOpen) {
      this.props.onToggle(true);
    }
  };

  handleTypeaheadKeys = (position: string) => {
    const { isOpen, isCreatable, createText } = this.props;
    const { typeaheadActiveChild, typeaheadCurrIndex } = this.state;
    if (isOpen) {
      if (position === 'enter' && (typeaheadActiveChild || this.refCollection[0])) {
        this.setState({
          typeaheadInputValue:
            (typeaheadActiveChild && typeaheadActiveChild.innerText) || this.refCollection[0].innerText
        });
        if (typeaheadActiveChild) {
          typeaheadActiveChild.click();
        } else {
          this.refCollection[0].click();
        }
      } else {
        let nextIndex;
        if (typeaheadCurrIndex === -1 && position === 'down') {
          nextIndex = 0;
        } else if (typeaheadCurrIndex === -1 && position === 'up') {
          nextIndex = this.refCollection.length - 1;
        } else {
          nextIndex = getNextIndex(typeaheadCurrIndex, position, this.refCollection);
        }
        this.setState({
          typeaheadCurrIndex: nextIndex,
          typeaheadActiveChild: this.refCollection[nextIndex],
          typeaheadInputValue:
            isCreatable && this.refCollection[nextIndex].innerText.includes(createText)
              ? this.state.creatableValue
              : this.refCollection[nextIndex].innerText
        });
      }
    }
  };

  getDisplay = (value: string | SelectOptionObject, type: 'node' | 'text' = 'node') => {
    if (!value) {
      return;
    }
    const item = this.props.isGrouped
      ? React.Children.toArray<React.ReactElement>(this.props.children)
          .reduce((acc, curr) => [...acc, ...React.Children.toArray(curr.props.children)], [])
          .find(child => child.props.value.toString() === value.toString())
      : React.Children.toArray<React.ReactElement>(this.props.children).find(
          child => child.props.value.toString() === value.toString()
        );
    if (item) {
      if (item && item.props.children) {
        if (type === 'node') {
          return item.props.children;
        }
        return this.findText(item);
      }
      return item.props.value.toString();
    }
    return value;
  };

  findText: (item: React.ReactElement) => string = (item: React.ReactElement) => {
    if (!item.props || !item.props.children) {
      if (typeof item !== 'string') {
        return '';
      }
      return item;
    }
    if (typeof item.props.children === 'string') {
      return item.props.children;
    }
    const multi: string[] = [];
    React.Children.toArray(item.props.children).forEach((child: React.ReactElement) =>
      multi.push(this.findText(child))
    );
    return multi.join('');
  };

  generateSelectedBadge = () => {
    const { customBadgeText, selections } = this.props;
    if (customBadgeText !== null) {
      return customBadgeText;
    }
    if (Array.isArray(selections) && selections.length > 0) {
      return selections.length;
    }
    return null;
  };

  render() {
    const {
      children,
      className,
      customContent,
      variant,
      direction,
      onToggle,
      onSelect,
      onClear,
      toggleId,
      isOpen,
      isGrouped,
      isPlain,
      isDisabled,
      selections: selectionsProp,
      typeAheadAriaLabel,
      clearSelectionsAriaLabel,
      toggleAriaLabel,
      removeSelectionAriaLabel,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      placeholderText,
      width,
      maxHeight,
      toggleIcon,
      ouiaId,
      hasInlineFilter,
      isCheckboxSelectionBadgeHidden,
      inlineFilterPlaceholderText,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      onFilter,
      onCreateOption,
      isCreatable,
      createText,
      noResultsFoundText,
      customBadgeText,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      ...props
    } = this.props;
    const { openedOnEnter, typeaheadInputValue, typeaheadActiveChild, typeaheadFilteredChildren } = this.state;
    const selectToggleId = toggleId || `pf-toggle-id-${currentId++}`;
    const selections = Array.isArray(selectionsProp) ? selectionsProp : [selectionsProp];
    const hasAnySelections = Boolean(selections[0] && selections[0] !== '');
    let childPlaceholderText = null;
    if (!customContent) {
      if (!hasAnySelections && !placeholderText) {
        const childPlaceholder = React.Children.toArray(children).filter(
          (child: React.ReactNode) => (child as React.ReactElement).props.isPlaceholder === true
        );
        childPlaceholderText =
          (childPlaceholder[0] && this.getDisplay((childPlaceholder[0] as React.ReactElement).props.value, 'node')) ||
          (children[0] && this.getDisplay(children[0].props.value, 'node'));
      }
    }

    const hasOnClear = onClear !== Select.defaultProps.onClear;
    const clearBtn = (
      <button
        className={css(buttonStyles.button, buttonStyles.modifiers.plain, styles.selectToggleClear)}
        onClick={e => {
          this.clearSelection(e);
          onClear(e);
        }}
        aria-label={clearSelectionsAriaLabel}
        type="button"
        disabled={isDisabled}
      >
        <TimesCircleIcon aria-hidden />
      </button>
    );

    let selectedChips = null;
    if (variant === SelectVariant.typeaheadMulti) {
      selectedChips = (
        <ChipGroup>
          {selections &&
            (selections as string[]).map(item => (
              <Chip
                key={item}
                onClick={(e: React.MouseEvent) => onSelect(e, item)}
                closeBtnAriaLabel={removeSelectionAriaLabel}
              >
                {this.getDisplay(item, 'node')}
              </Chip>
            ))}
        </ChipGroup>
      );
    }

    let filterWithChildren = children;
    if (hasInlineFilter) {
      const filterBox = (
        <React.Fragment>
          <div key="inline-filter" className={css(styles.selectMenuSearch)}>
            <input
              key="inline-filter-input"
              type="search"
              className={css(formStyles.formControl, formStyles.modifiers.search)}
              onChange={this.onChange}
              placeholder={inlineFilterPlaceholderText}
              onKeyDown={event => {
                if (event.key === KeyTypes.ArrowUp) {
                  this.handleArrowKeys(0, 'up');
                } else if (event.key === KeyTypes.ArrowDown) {
                  this.handleArrowKeys(0, 'down');
                }
              }}
              ref={this.filterRef}
              autoComplete="off"
            ></input>
          </div>
          <Divider key="inline-filter-divider" />
        </React.Fragment>
      );
      this.refCollection[0] = this.filterRef.current;
      filterWithChildren = [filterBox, ...(typeaheadFilteredChildren as React.ReactElement[])].map((option, index) =>
        React.cloneElement(option, { key: index })
      );
    }

    let variantProps: any;
    let variantChildren: any;
    if (customContent) {
      variantProps = {
        selected: selections,
        openedOnEnter,
        isCustomContent: true
      };
      variantChildren = customContent;
    } else {
      switch (variant) {
        case 'single':
          variantProps = {
            selected: selections[0],
            openedOnEnter
          };
          variantChildren = children;
          break;
        case 'checkbox':
          variantProps = {
            checked: selections,
            isGrouped,
            hasInlineFilter
          };
          variantChildren = filterWithChildren;
          break;
        case 'typeahead':
          variantProps = {
            selected: selections[0],
            openedOnEnter
          };
          variantChildren = this.extendTypeaheadChildren(typeaheadActiveChild);
          break;
        case 'typeaheadmulti':
          variantProps = {
            selected: selections,
            openedOnEnter
          };
          variantChildren = this.extendTypeaheadChildren(typeaheadActiveChild);
          break;
      }
    }

    return (
      <div
        className={css(
          styles.select,
          isOpen && styles.modifiers.expanded,
          direction === SelectDirection.up && styles.modifiers.top,
          className
        )}
        ref={this.parentRef}
        style={{ width }}
        {...getOUIAProps('Select', ouiaId)}
      >
        <SelectContext.Provider value={{ onSelect, onClose: this.onClose, variant }}>
          <SelectToggle
            id={selectToggleId}
            parentRef={this.parentRef}
            isOpen={isOpen}
            isPlain={isPlain}
            onToggle={onToggle}
            onEnter={this.onEnter}
            onClose={this.onClose}
            variant={variant}
            aria-labelledby={`${ariaLabelledBy || ''} ${selectToggleId}`}
            aria-label={toggleAriaLabel}
            handleTypeaheadKeys={this.handleTypeaheadKeys}
            isDisabled={isDisabled}
            hasClearButton={hasOnClear}
          >
            {customContent && (
              <div className={css(styles.selectToggleWrapper)}>
                {toggleIcon && <span className={css(styles.selectToggleIcon)}>{toggleIcon}</span>}
                <span className={css(styles.selectToggleText)}>{placeholderText}</span>
              </div>
            )}
            {variant === SelectVariant.single && !customContent && (
              <React.Fragment>
                <div className={css(styles.selectToggleWrapper)}>
                  {toggleIcon && <span className={css(styles.selectToggleIcon)}>{toggleIcon}</span>}
                  <span className={css(styles.selectToggleText)}>
                    {this.getDisplay(selections[0] as string, 'node') || placeholderText || childPlaceholderText}
                  </span>
                </div>
                {hasOnClear && hasAnySelections && clearBtn}
              </React.Fragment>
            )}
            {variant === SelectVariant.checkbox && !customContent && (
              <React.Fragment>
                <div className={css(styles.selectToggleWrapper)}>
                  {toggleIcon && <span className={css(styles.selectToggleIcon)}>{toggleIcon}</span>}
                  <span className={css(styles.selectToggleText)}>{placeholderText}</span>
                  {!isCheckboxSelectionBadgeHidden && hasAnySelections && (
                    <div className={css(styles.selectToggleBadge)}>
                      <span className={css(badgeStyles.badge, badgeStyles.modifiers.read)}>
                        {this.generateSelectedBadge()}
                      </span>
                    </div>
                  )}
                </div>
                {hasOnClear && hasAnySelections && clearBtn}
              </React.Fragment>
            )}
            {variant === SelectVariant.typeahead && !customContent && (
              <React.Fragment>
                <div className={css(styles.selectToggleWrapper)}>
                  {toggleIcon && <span className={css(styles.selectToggleIcon)}>{toggleIcon}</span>}
                  <input
                    className={css(formStyles.formControl, styles.selectToggleTypeahead)}
                    aria-activedescendant={typeaheadActiveChild && typeaheadActiveChild.id}
                    id={`${selectToggleId}-select-typeahead`}
                    aria-label={typeAheadAriaLabel}
                    placeholder={placeholderText as string}
                    value={
                      typeaheadInputValue !== null
                        ? typeaheadInputValue
                        : this.getDisplay(selections[0] as string, 'text') || ''
                    }
                    type="text"
                    onClick={this.onClick}
                    onChange={this.onChange}
                    onFocus={this.handleFocus}
                    autoComplete="off"
                    disabled={isDisabled}
                  />
                </div>
                {(selections[0] || typeaheadInputValue) && clearBtn}
              </React.Fragment>
            )}
            {variant === SelectVariant.typeaheadMulti && !customContent && (
              <React.Fragment>
                <div className={css(styles.selectToggleWrapper)}>
                  {toggleIcon && <span className={css(styles.selectToggleIcon)}>{toggleIcon}</span>}
                  {selections && (Array.isArray(selections) && selections.length > 0) && selectedChips}
                  <input
                    className={css(formStyles.formControl, styles.selectToggleTypeahead)}
                    aria-activedescendant={typeaheadActiveChild && typeaheadActiveChild.id}
                    id={`${selectToggleId}-select-multi-typeahead-typeahead`}
                    aria-label={typeAheadAriaLabel}
                    placeholder={placeholderText as string}
                    value={typeaheadInputValue !== null ? typeaheadInputValue : ''}
                    type="text"
                    onChange={this.onChange}
                    onClick={this.onClick}
                    onFocus={this.handleFocus}
                    autoComplete="off"
                    disabled={isDisabled}
                  />
                </div>
                {((selections && selections.length > 0) || typeaheadInputValue) && clearBtn}
              </React.Fragment>
            )}
          </SelectToggle>
          {isOpen && (
            <SelectMenu
              {...props}
              isGrouped={isGrouped}
              selected={selections}
              {...variantProps}
              openedOnEnter={openedOnEnter}
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledBy}
              sendRef={this.sendRef}
              keyHandler={this.handleArrowKeys}
              maxHeight={maxHeight}
            >
              {variantChildren}
            </SelectMenu>
          )}
        </SelectContext.Provider>
      </div>
    );
  }
}
