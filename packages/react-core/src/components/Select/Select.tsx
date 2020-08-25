import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Select/select';
import badgeStyles from '@patternfly/react-styles/css/components/Badge/badge';
import formStyles from '@patternfly/react-styles/css/components/FormControl/form-control';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { css } from '@patternfly/react-styles';
import TimesCircleIcon from '@patternfly/react-icons/dist/js/icons/times-circle-icon';
import { SelectMenu } from './SelectMenu';
import { SelectOption, SelectOptionObject } from './SelectOption';
import { SelectGroup } from './SelectGroup';
import { SelectToggle } from './SelectToggle';
import { SelectContext, SelectVariant, SelectDirection, KeyTypes } from './selectConstants';
import { Chip, ChipGroup } from '../ChipGroup';
import { keyHandler, getNextIndex, getOUIAProps, OUIAProps, PickOptional, GenerateId } from '../../helpers';
import { Divider } from '../Divider';
import { ToggleMenuBaseProps, Popper } from '../../helpers/Popper/Popper';
import { createRenderableFavorites, extendItemsWithFavorite } from '../../helpers/util';

// seed for the aria-labelledby ID
let currentId = 0;

export interface SelectProps
  extends ToggleMenuBaseProps,
    Omit<React.HTMLProps<HTMLDivElement>, 'onSelect' | 'ref' | 'checked' | 'selected'>,
    OUIAProps {
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
  /** ID list of favorited select items */
  favorites?: string[];
  /** Label for the favorites group */
  favoritesLabel?: string;
  /** Enables favorites. Callback called when an ApplicationLauncherItem's favorite button is clicked */
  onFavorite?: (itemId: string, isFavorite: boolean) => void;
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
  /** Prefix for the id of the input in the checkbox select variant*/
  inputIdPrefix?: string;
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
  static displayName = 'Select';
  private parentRef = React.createRef<HTMLDivElement>();
  private menuComponentRef = React.createRef<HTMLElement>();
  private filterRef = React.createRef<HTMLInputElement>();
  private clearRef = React.createRef<HTMLButtonElement>();
  private inputRef = React.createRef<HTMLInputElement>();
  private refCollection: HTMLElement[][] = [[]];

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
    customBadgeText: null,
    inputIdPrefix: '',
    menuAppendTo: 'inline',
    favorites: [] as string[],
    favoritesLabel: 'Favorites',
    ouiaSafe: true
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
      this.refCollection[0][0] = this.filterRef.current;
    }

    if (!prevState.openedOnEnter && this.state.openedOnEnter && !this.props.customContent && this.refCollection[0]) {
      this.refCollection[0][0].focus();
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
    const { onFilter, isCreatable, onCreateOption, createText, noResultsFoundText, children, isGrouped } = this.props;
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
      const childrenArray = React.Children.toArray(children);
      if (isGrouped) {
        typeaheadFilteredChildren =
          e.target.value.toString() !== ''
            ? React.Children.map(children, (group: React.ReactElement) => {
                if (group.type === SelectGroup) {
                  const filteredGroupChildren = React.Children.toArray(group.props.children).filter(
                    (child: React.ReactElement) =>
                      this.getDisplay(child.props.value.toString(), 'text').search(input) === 0
                  );
                  if (filteredGroupChildren.length > 0) {
                    return React.cloneElement(group, {
                      titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
                      children: filteredGroupChildren
                    });
                  }
                } else {
                  return React.Children.toArray(group).filter(
                    (child: React.ReactElement) =>
                      this.getDisplay(child.props.value.toString(), 'text').search(input) === 0
                  );
                }
              })
            : childrenArray;
      } else {
        typeaheadFilteredChildren =
          e.target.value.toString() !== ''
            ? childrenArray.filter(child => this.getDisplay(child.props.value.toString(), 'text').search(input) === 0)
            : childrenArray;
      }
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
    this.refCollection = [[]];
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
    const { isGrouped } = this.props;

    let activeElement = null as HTMLElement;
    if (Boolean(typeaheadActiveChild) && typeaheadActiveChild.classList.contains('pf-m-description')) {
      activeElement = typeaheadActiveChild.firstElementChild as HTMLElement;
    } else if (typeaheadActiveChild) {
      activeElement = typeaheadActiveChild;
    }
    if (isGrouped) {
      return React.Children.map(
        this.state.typeaheadFilteredChildren as React.ReactElement[],
        (group: React.ReactElement) => {
          if (group.type === SelectGroup) {
            return React.cloneElement(group, {
              titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
              children: React.Children.map(group.props.children, (child: React.ReactElement) =>
                React.cloneElement(child as React.ReactElement, {
                  isFocused:
                    activeElement &&
                    (activeElement.innerText ===
                      this.getDisplay((child as React.ReactElement).props.value.toString(), 'text') ||
                      (this.props.isCreatable &&
                        typeaheadActiveChild.innerText ===
                          `{createText} "${(child as React.ReactElement).props.value}"`))
                })
              )
            });
          } else {
            return React.cloneElement(group, {
              isFocused:
                activeElement &&
                (activeElement.innerText ===
                  this.getDisplay((group as React.ReactElement).props.value.toString(), 'text') ||
                  (this.props.isCreatable &&
                    typeaheadActiveChild.innerText === `{createText} "${(group as React.ReactElement).props.value}"`))
            });
          }
        }
      );
    }

    return this.state.typeaheadFilteredChildren.map((child: React.ReactNode) =>
      React.cloneElement(child as React.ReactElement, {
        isFocused:
          activeElement &&
          (activeElement.innerText === this.getDisplay((child as React.ReactElement).props.value.toString(), 'text') ||
            (this.props.isCreatable &&
              typeaheadActiveChild.innerText === `{createText} "${(child as React.ReactElement).props.value}"`))
      })
    );
  }

  sendRef = (optionRef: React.ReactNode, favoriteRef: React.ReactNode, index: number) => {
    this.refCollection[index] = [optionRef as HTMLElement, favoriteRef as HTMLElement];
  };

  handleMenuKeys = (index: number, innerIndex: number, position: string) => {
    keyHandler(index, innerIndex, position, this.refCollection, this.refCollection);
    if (this.props.variant === SelectVariant.typeahead || this.props.variant === SelectVariant.typeaheadMulti) {
      if (position !== 'tab') {
        this.handleTypeaheadKeys(position);
      }
    }
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
      if (position === 'enter') {
        if (typeaheadActiveChild || (this.refCollection[0] && this.refCollection[0][0])) {
          this.setState({
            typeaheadInputValue:
              (typeaheadActiveChild && typeaheadActiveChild.innerText) || this.refCollection[0][0].innerText
          });
          if (typeaheadActiveChild) {
            typeaheadActiveChild.click();
          } else {
            this.refCollection[0][0].click();
          }
        }
      } else if (position === 'tab') {
        if (this.inputRef.current === document.activeElement) {
          const focusIndex = typeaheadCurrIndex === -1 ? 0 : typeaheadCurrIndex;
          this.refCollection[focusIndex][0].focus();
        } else {
          this.inputRef.current.focus();
        }
      } else {
        let nextIndex;
        if (typeaheadCurrIndex === -1 && position === 'down') {
          nextIndex = 0;
        } else if (typeaheadCurrIndex === -1 && position === 'up') {
          nextIndex = this.refCollection.length - 1;
        } else if (position !== 'left' && position !== 'right') {
          nextIndex = getNextIndex(typeaheadCurrIndex, position, this.refCollection);
        } else {
          nextIndex = typeaheadCurrIndex;
        }
        if (this.refCollection[nextIndex] === null) {
          return;
        }

        const hasDescriptionElm = Boolean(
          this.refCollection[nextIndex][0] && this.refCollection[nextIndex][0].classList.contains('pf-m-description')
        );
        const optionTextElm = hasDescriptionElm
          ? (this.refCollection[nextIndex][0].firstElementChild as HTMLElement)
          : this.refCollection[nextIndex][0];
        this.setState({
          typeaheadCurrIndex: nextIndex,
          typeaheadActiveChild: this.refCollection[nextIndex][0],
          typeaheadInputValue:
            isCreatable && optionTextElm.innerText.includes(createText)
              ? this.state.creatableValue
              : optionTextElm.innerText
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
      ouiaSafe,
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
      inputIdPrefix,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      menuAppendTo,
      favorites,
      onFavorite,
      favoritesLabel,
      ...props
    } = this.props;
    const { openedOnEnter, typeaheadInputValue, typeaheadActiveChild, typeaheadFilteredChildren } = this.state;
    const selectToggleId = toggleId || `pf-select-toggle-id-${currentId++}`;
    const selections = Array.isArray(selectionsProp) ? selectionsProp : [selectionsProp];
    const hasAnySelections = Boolean(selections[0] && selections[0] !== '');
    let childPlaceholderText = null as string;

    // If onFavorites is set,  add isFavorite prop to children and add a Favorites group to the SelectMenu
    let renderableItems: React.ReactNode[] = [];
    if (onFavorite) {
      let favoritesGroup: React.ReactNode[] = [];
      let renderableFavorites: React.ReactNode[] = [];
      if (favorites.length > 0) {
        // if variant is typeahead use filtered children
        const tempRenderableChildren =
          variant === 'typeahead' || variant === 'typeaheadmulti' ? typeaheadFilteredChildren : children;
        renderableFavorites = createRenderableFavorites(tempRenderableChildren, isGrouped, favorites);
        favoritesGroup = [
          <SelectGroup key="favorites" label={favoritesLabel}>
            {renderableFavorites}
          </SelectGroup>
        ];
      }
      // if variant is type-ahead call the extendTypeaheadChildren before adding favorites
      const tempExtendedChildren =
        variant === 'typeahead' || variant === 'typeaheadmulti'
          ? this.extendTypeaheadChildren(typeaheadActiveChild)
          : children;
      if (renderableFavorites.length > 0) {
        // concat all select options too renderable favorites group and mark items that are favorited with isFavorite
        renderableItems = favoritesGroup.concat(extendItemsWithFavorite(tempExtendedChildren, isGrouped, favorites));
      } else {
        // mark items that are favorited with isFavorite
        renderableItems = extendItemsWithFavorite(tempExtendedChildren, isGrouped, favorites);
      }
    } else {
      renderableItems = children;
    }

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
        ref={this.clearRef}
        onKeyDown={event => {
          if (event.key === KeyTypes.Enter) {
            this.clearRef.current.click();
          }
        }}
      >
        <TimesCircleIcon aria-hidden />
      </button>
    );

    let selectedChips = null as any;
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
                  this.handleMenuKeys(0, 0, 'up');
                } else if (event.key === KeyTypes.ArrowDown) {
                  this.handleMenuKeys(0, 0, 'down');
                } else if (event.key === KeyTypes.ArrowLeft) {
                  this.handleMenuKeys(0, 0, 'left');
                } else if (event.key === KeyTypes.ArrowRight) {
                  this.handleMenuKeys(0, 0, 'right');
                }
              }}
              ref={this.filterRef}
              autoComplete="off"
            />
          </div>
          <Divider key="inline-filter-divider" />
        </React.Fragment>
      );
      this.refCollection[0][0] = this.filterRef.current;
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
          variantChildren = renderableItems;
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
          variantChildren = onFavorite ? renderableItems : this.extendTypeaheadChildren(typeaheadActiveChild);
          break;
        case 'typeaheadmulti':
          variantProps = {
            selected: selections,
            openedOnEnter
          };
          variantChildren = onFavorite ? renderableItems : this.extendTypeaheadChildren(typeaheadActiveChild);
          break;
      }
    }

    const menuContainer = (
      <SelectMenu
        {...props}
        isGrouped={isGrouped}
        selected={selections}
        {...variantProps}
        openedOnEnter={openedOnEnter}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        sendRef={this.sendRef}
        keyHandler={this.handleMenuKeys}
        maxHeight={maxHeight}
        ref={this.menuComponentRef}
      >
        {variantChildren}
      </SelectMenu>
    );

    const popperContainer = (
      <div
        className={css(
          styles.select,
          isOpen && styles.modifiers.expanded,
          direction === SelectDirection.up && styles.modifiers.top,
          className
        )}
        {...(width && { style: { width } })}
      >
        {isOpen && menuContainer}
      </div>
    );

    const mainContainer = (
      <div
        className={css(
          styles.select,
          isOpen && styles.modifiers.expanded,
          direction === SelectDirection.up && styles.modifiers.top,
          className
        )}
        ref={this.parentRef}
        {...getOUIAProps(Select.displayName, ouiaId, ouiaSafe)}
        {...(width && { style: { width } })}
      >
        <SelectToggle
          id={selectToggleId}
          parentRef={this.parentRef}
          menuRef={this.menuComponentRef}
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
                  ref={this.inputRef}
                />
              </div>
              {(selections[0] || typeaheadInputValue) && clearBtn}
            </React.Fragment>
          )}
          {variant === SelectVariant.typeaheadMulti && !customContent && (
            <React.Fragment>
              <div className={css(styles.selectToggleWrapper)}>
                {toggleIcon && <span className={css(styles.selectToggleIcon)}>{toggleIcon}</span>}
                {selections && Array.isArray(selections) && selections.length > 0 && selectedChips}
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
                  ref={this.inputRef}
                />
              </div>
              {((selections && selections.length > 0) || typeaheadInputValue) && clearBtn}
            </React.Fragment>
          )}
        </SelectToggle>
        {isOpen && menuAppendTo === 'inline' && menuContainer}
      </div>
    );

    const getParentElement = () => {
      if (this.parentRef && this.parentRef.current) {
        return this.parentRef.current.parentElement;
      }
      return null;
    };

    return (
      <GenerateId>
        {randomId => (
          <SelectContext.Provider
            value={{ onSelect, onFavorite, onClose: this.onClose, variant, inputIdPrefix: inputIdPrefix || randomId }}
          >
            {menuAppendTo === 'inline' ? (
              mainContainer
            ) : (
              <Popper
                trigger={mainContainer}
                popper={popperContainer}
                direction={direction}
                appendTo={menuAppendTo === 'parent' ? getParentElement() : menuAppendTo}
                isVisible={isOpen}
              />
            )}
          </SelectContext.Provider>
        )}
      </GenerateId>
    );
  }
}
