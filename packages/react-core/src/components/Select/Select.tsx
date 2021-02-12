import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Select/select';
import badgeStyles from '@patternfly/react-styles/css/components/Badge/badge';
import formStyles from '@patternfly/react-styles/css/components/FormControl/form-control';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { css } from '@patternfly/react-styles';
import TimesCircleIcon from '@patternfly/react-icons/dist/js/icons/times-circle-icon';
import { SelectMenu } from './SelectMenu';
import { SelectOption, SelectOptionObject } from './SelectOption';
import { SelectGroup, SelectGroupProps } from './SelectGroup';
import { SelectToggle } from './SelectToggle';
import { SelectContext, SelectVariant, SelectDirection, KeyTypes } from './selectConstants';
import { Chip, ChipGroup, ChipGroupProps } from '../ChipGroup';
import {
  keyHandler,
  getNextIndex,
  getOUIAProps,
  OUIAProps,
  getDefaultOUIAId,
  PickOptional,
  GenerateId
} from '../../helpers';
import { Divider } from '../Divider';
import { ToggleMenuBaseProps, Popper } from '../../helpers/Popper/Popper';
import { createRenderableFavorites, extendItemsWithFavorite } from '../../helpers/favorites';

// seed for the aria-labelledby ID
let currentId = 0;

export interface SelectProps
  extends ToggleMenuBaseProps,
    Omit<React.HTMLProps<HTMLDivElement>, 'onSelect' | 'ref' | 'checked' | 'selected'>,
    OUIAProps {
  /** Content rendered inside the Select. Must be React.ReactElement<SelectGroupProps>[] */
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
  /** Enables favorites. Callback called when a select options's favorite button is clicked */
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
  /** Optional event handler called each time the value in the typeahead input changes. */
  onTypeaheadInputChanged?: (value: string) => void;
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
  /** Optional props to pass to the chip group in the typeaheadmulti variant */
  chipGroupProps?: Omit<ChipGroupProps, 'children' | 'ref'>;
  /** Optional props to render custom chip group in the typeaheadmulti variant */
  chipGroupComponent?: React.ReactNode;
}

export interface SelectState {
  openedOnEnter: boolean;
  typeaheadInputValue: string | null;
  typeaheadFilteredChildren: React.ReactNode[];
  favoritesGroup: React.ReactNode[];
  typeaheadCurrIndex: number;
  creatableValue: string;
  tabbedIntoFavoritesMenu: boolean;
  typeaheadStoredIndex: number;
  ouiaStateId: string;
}

export class Select extends React.Component<SelectProps & OUIAProps, SelectState> {
  static displayName = 'Select';
  private parentRef = React.createRef<HTMLDivElement>();
  private menuComponentRef = React.createRef<HTMLElement>();
  private filterRef = React.createRef<HTMLInputElement>();
  private clearRef = React.createRef<HTMLButtonElement>();
  private inputRef = React.createRef<HTMLInputElement>();
  private refCollection: HTMLElement[][] = [[]];
  private optionContainerRefCollection: HTMLElement[] = [];

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
    onTypeaheadInputChanged: null,
    customContent: null,
    hasInlineFilter: false,
    inlineFilterPlaceholderText: null,
    customBadgeText: null,
    inputIdPrefix: '',
    menuAppendTo: 'inline',
    favorites: [] as string[],
    favoritesLabel: 'Favorites',
    ouiaSafe: true,
    chipGroupComponent: null
  };

  state: SelectState = {
    openedOnEnter: false,
    typeaheadInputValue: null,
    typeaheadFilteredChildren: React.Children.toArray(this.props.children),
    favoritesGroup: [] as React.ReactNode[],
    typeaheadCurrIndex: -1,
    typeaheadStoredIndex: -1,
    creatableValue: '',
    tabbedIntoFavoritesMenu: false,
    ouiaStateId: getDefaultOUIAId(Select.displayName, this.props.variant)
  };

  getTypeaheadActiveChild = (typeaheadCurrIndex: number) =>
    this.refCollection[typeaheadCurrIndex] ? this.refCollection[typeaheadCurrIndex][0] : null;

  componentDidUpdate = (prevProps: SelectProps, prevState: SelectState) => {
    if (this.props.hasInlineFilter) {
      this.refCollection[0][0] = this.filterRef.current;
    }

    if (!prevState.openedOnEnter && this.state.openedOnEnter && !this.props.customContent) {
      const firstRef = this.refCollection.find(ref => ref !== null);
      if (firstRef && firstRef[0]) {
        firstRef[0].focus();
      }
    }

    if (prevProps.children !== this.props.children) {
      this.updateTypeAheadFilteredChildren(prevState.typeaheadInputValue || '', null);
    }

    if (
      this.props.onFavorite &&
      (this.props.favorites.length !== prevProps.favorites.length ||
        this.state.typeaheadFilteredChildren !== prevState.typeaheadFilteredChildren)
    ) {
      const tempRenderableChildren =
        this.props.variant === 'typeahead' || this.props.variant === 'typeaheadmulti'
          ? this.state.typeaheadFilteredChildren
          : this.props.children;
      const renderableFavorites = createRenderableFavorites(
        tempRenderableChildren,
        this.props.isGrouped,
        this.props.favorites
      );
      const favoritesGroup = renderableFavorites.length
        ? [
            <SelectGroup key="favorites" label={this.props.favoritesLabel}>
              {renderableFavorites}
            </SelectGroup>,
            <Divider key="favorites-group-divider" />
          ]
        : [];
      this.setState({ favoritesGroup });
    }
  };

  onEnter = () => {
    this.setState({ openedOnEnter: true });
  };

  onClose = () => {
    this.setState({
      openedOnEnter: false,
      typeaheadInputValue: null,
      typeaheadFilteredChildren: React.Children.toArray(this.props.children),
      typeaheadCurrIndex: -1,
      tabbedIntoFavoritesMenu: false
    });
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.toString() !== '' && !this.props.isOpen) {
      this.props.onToggle(true);
    }

    if (this.props.onTypeaheadInputChanged) {
      this.props.onTypeaheadInputChanged(e.target.value.toString());
    }

    this.setState({
      typeaheadCurrIndex: -1,
      typeaheadInputValue: e.target.value,
      creatableValue: e.target.value
    });
    this.updateTypeAheadFilteredChildren(e.target.value.toString(), e);
    this.refCollection = [[]];
  };

  updateTypeAheadFilteredChildren = (typeaheadInputValue: string, e: React.ChangeEvent<HTMLInputElement> | null) => {
    let typeaheadFilteredChildren: any;

    const { onFilter, isCreatable, onCreateOption, createText, noResultsFoundText, children, isGrouped } = this.props;

    if (onFilter) {
      typeaheadFilteredChildren = onFilter(e) || children;
    } else {
      let input: RegExp;
      try {
        input = new RegExp(typeaheadInputValue.toString(), 'i');
      } catch (err) {
        input = new RegExp(typeaheadInputValue.toString().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      }
      const childrenArray = React.Children.toArray(children) as React.ReactElement<SelectGroupProps>[];
      if (isGrouped) {
        const childFilter = (child: React.ReactElement<SelectGroupProps>) =>
          child.props.value && this.getDisplay(child.props.value.toString(), 'text').search(input) === 0;
        typeaheadFilteredChildren =
          typeaheadInputValue.toString() !== ''
            ? React.Children.map(children, group => {
                if (group.type === SelectGroup) {
                  const filteredGroupChildren = (React.Children.toArray(group.props.children) as React.ReactElement<
                    SelectGroupProps
                  >[]).filter(childFilter);
                  if (filteredGroupChildren.length > 0) {
                    return React.cloneElement(group, {
                      titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
                      children: filteredGroupChildren as any
                    });
                  }
                } else {
                  return (React.Children.toArray(group) as React.ReactElement<SelectGroupProps>[]).filter(childFilter);
                }
              })
            : childrenArray;
      } else {
        typeaheadFilteredChildren =
          typeaheadInputValue.toString() !== ''
            ? childrenArray.filter(child => {
                const valueToCheck = child.props.value;
                // Dividers don't have value and should not be filtered
                if (!valueToCheck) {
                  return true;
                }

                const isSelectOptionObject =
                  typeof valueToCheck !== 'string' &&
                  (valueToCheck as SelectOptionObject).toString &&
                  (valueToCheck as SelectOptionObject).compareTo;

                if (isSelectOptionObject) {
                  return (valueToCheck as SelectOptionObject).compareTo(typeaheadInputValue);
                } else {
                  return this.getDisplay(child.props.value.toString(), 'text').search(input) === 0;
                }
              })
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
    if (isCreatable && typeaheadInputValue !== '') {
      const newValue = typeaheadInputValue;
      typeaheadFilteredChildren.push(
        <SelectOption key={0} value={newValue} onClick={() => onCreateOption && onCreateOption(newValue)}>
          {createText} "{newValue}"
        </SelectOption>
      );
    }

    this.setState({
      typeaheadFilteredChildren
    });
  };

  onClick = (e: React.MouseEvent) => {
    if (!this.props.isOpen) {
      this.props.onToggle(true);
    }
    e.stopPropagation();
  };

  clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    this.setState({
      typeaheadInputValue: null,
      typeaheadFilteredChildren: React.Children.toArray(this.props.children),
      typeaheadCurrIndex: -1
    });
  };

  extendTypeaheadChildren(typeaheadCurrIndex: number, favoritesGroup?: React.ReactNode[]) {
    const { isGrouped, onFavorite } = this.props;
    const typeaheadChildren = favoritesGroup
      ? favoritesGroup.concat(this.state.typeaheadFilteredChildren)
      : this.state.typeaheadFilteredChildren;
    const activeElement = this.optionContainerRefCollection[typeaheadCurrIndex];

    let typeaheadActiveChild = this.getTypeaheadActiveChild(typeaheadCurrIndex);
    if (typeaheadActiveChild && typeaheadActiveChild.classList.contains('pf-m-description')) {
      typeaheadActiveChild = typeaheadActiveChild.firstElementChild as HTMLElement;
    }

    this.refCollection = [[]];
    this.optionContainerRefCollection = [];
    if (isGrouped) {
      return React.Children.map(typeaheadChildren as React.ReactElement[], (group: React.ReactElement) => {
        if (group.type === Divider) {
          return group;
        } else if (group.type === SelectGroup && onFavorite) {
          return React.cloneElement(group, {
            titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
            children: React.Children.map(group.props.children, (child: React.ReactElement) =>
              child.type === Divider
                ? child
                : React.cloneElement(child as React.ReactElement, {
                    isFocused:
                      activeElement &&
                      (activeElement.id === (child as React.ReactElement).props.id ||
                        (this.props.isCreatable &&
                          typeaheadActiveChild.innerText ===
                            `{createText} "${(group as React.ReactElement).props.value}"`))
                  })
            )
          });
        } else if (group.type === SelectGroup) {
          return React.cloneElement(group, {
            titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
            children: React.Children.map(group.props.children, (child: React.ReactElement) =>
              child.type === Divider
                ? child
                : React.cloneElement(child as React.ReactElement, {
                    isFocused:
                      typeaheadActiveChild &&
                      (typeaheadActiveChild.innerText === (child as React.ReactElement).props.value.toString() ||
                        (this.props.isCreatable &&
                          typeaheadActiveChild.innerText ===
                            `{createText} "${(child as React.ReactElement).props.value}"`))
                  })
            )
          });
        } else {
          // group has been filtered down to SelectOption
          return React.cloneElement(group as React.ReactElement, {
            isFocused:
              typeaheadActiveChild &&
              (typeaheadActiveChild.innerText === group.props.value.toString() ||
                (this.props.isCreatable && typeaheadActiveChild.innerText === `{createText} "${group.props.value}"`))
          });
        }
      });
    }

    return typeaheadChildren.map((child: React.ReactNode) => {
      const childElement = child as any;
      return childElement.type.displayName === 'Divider'
        ? child
        : React.cloneElement(child as React.ReactElement, {
            isFocused:
              typeaheadActiveChild &&
              (typeaheadActiveChild.innerText === (child as React.ReactElement).props.value.toString() ||
                (this.props.isCreatable &&
                  typeaheadActiveChild.innerText === `{createText} "${(child as React.ReactElement).props.value}"`))
          });
    });
  }

  sendRef = (
    optionRef: React.ReactNode,
    favoriteRef: React.ReactNode,
    optionContainerRef: React.ReactNode,
    index: number
  ) => {
    this.refCollection[index] = [optionRef as HTMLElement, favoriteRef as HTMLElement];
    this.optionContainerRefCollection[index] = optionContainerRef as HTMLElement;
  };

  handleMenuKeys = (index: number, innerIndex: number, position: string) => {
    keyHandler(index, innerIndex, position, this.refCollection, this.refCollection);
    if (this.props.variant === SelectVariant.typeahead || this.props.variant === SelectVariant.typeaheadMulti) {
      if (position !== 'tab') {
        this.handleTypeaheadKeys(position);
      }
    }
  };

  moveFocus = (nextIndex: number, updateCurrentIndex: boolean = true) => {
    const { isCreatable, createText } = this.props;

    const hasDescriptionElm = Boolean(
      this.refCollection[nextIndex][0] && this.refCollection[nextIndex][0].classList.contains('pf-m-description')
    );
    const optionTextElm = hasDescriptionElm
      ? (this.refCollection[nextIndex][0].firstElementChild as HTMLElement)
      : this.refCollection[nextIndex][0];

    let typeaheadInputValue = '';
    if (isCreatable && optionTextElm.innerText.includes(createText)) {
      typeaheadInputValue = this.state.creatableValue;
    } else if (optionTextElm) {
      typeaheadInputValue = optionTextElm.innerText;
    }
    this.setState(prevState => ({
      typeaheadCurrIndex: updateCurrentIndex ? nextIndex : prevState.typeaheadCurrIndex,
      typeaheadStoredIndex: nextIndex,
      typeaheadInputValue
    }));
  };

  handleTypeaheadKeys = (position: string) => {
    const { isOpen, onFavorite } = this.props;
    const { typeaheadCurrIndex, tabbedIntoFavoritesMenu, typeaheadStoredIndex } = this.state;
    const typeaheadActiveChild = this.getTypeaheadActiveChild(typeaheadCurrIndex);

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
        if (onFavorite) {
          if (this.inputRef.current === document.activeElement) {
            let indexForFocus = 0;
            if (typeaheadCurrIndex !== -1) {
              indexForFocus = typeaheadCurrIndex;
            } else if (typeaheadStoredIndex !== -1) {
              indexForFocus = typeaheadStoredIndex;
            }

            if (this.refCollection[indexForFocus] !== null && this.refCollection[indexForFocus][0] !== null) {
              this.refCollection[indexForFocus][0].focus();
            } else {
              this.clearRef.current.focus();
            }

            this.setState({
              tabbedIntoFavoritesMenu: true,
              typeaheadCurrIndex: -1
            });
          } else {
            this.inputRef.current.focus();
            this.setState({ tabbedIntoFavoritesMenu: false });
          }
        } else {
          this.props.onToggle(false);
        }
      } else if (!tabbedIntoFavoritesMenu) {
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
        this.moveFocus(nextIndex);
      } else {
        const nextIndex = this.refCollection.findIndex(
          ref => ref !== undefined && (ref[0] === document.activeElement || ref[1] === document.activeElement)
        );
        this.moveFocus(nextIndex);
      }
    }
  };

  onClickTypeaheadToggleButton = () => {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };

  getDisplay = (value: string | SelectOptionObject, type: 'node' | 'text' = 'node') => {
    if (!value) {
      return;
    }
    const item = this.props.isGrouped
      ? (React.Children.toArray(this.props.children) as React.ReactElement[])
          .reduce((acc, curr) => [...acc, ...React.Children.toArray(curr.props.children)], [])
          .find(child => child.props.value.toString() === value.toString())
      : React.Children.toArray(this.props.children).find(
          child =>
            (child as React.ReactElement).props.value &&
            (child as React.ReactElement).props.value.toString() === value.toString()
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
    return value.toString();
  };

  findText = (item: React.ReactNode) => {
    if (typeof item === 'string') {
      return item;
    } else if (!React.isValidElement(item)) {
      return '';
    } else {
      const multi: string[] = [];
      React.Children.toArray(item.props.children).forEach(child => multi.push(this.findText(child)));
      return multi.join('');
    }
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
      chipGroupProps,
      chipGroupComponent,
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
      /* eslint-disable @typescript-eslint/no-unused-vars */
      onTypeaheadInputChanged,
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
      /* eslint-disable @typescript-eslint/no-unused-vars */
      favoritesLabel,
      ...props
    } = this.props;
    const {
      openedOnEnter,
      typeaheadCurrIndex,
      typeaheadInputValue,
      typeaheadFilteredChildren,
      favoritesGroup
    } = this.state;
    const selectToggleId = toggleId || `pf-select-toggle-id-${currentId++}`;
    const selections = Array.isArray(selectionsProp) ? selectionsProp : [selectionsProp];
    const hasAnySelections = Boolean(selections[0] && selections[0] !== '');
    const typeaheadActiveChild = this.getTypeaheadActiveChild(typeaheadCurrIndex);
    let childPlaceholderText = null as string;

    // If onFavorites is set,  add isFavorite prop to children and add a Favorites group to the SelectMenu
    let renderableItems: React.ReactNode[] = [];
    if (onFavorite) {
      // if variant is type-ahead call the extendTypeaheadChildren before adding favorites
      let tempExtendedChildren: (React.ReactElement | React.ReactNode | {})[] = children;
      if (variant === 'typeahead' || variant === 'typeaheadmulti') {
        tempExtendedChildren = this.extendTypeaheadChildren(typeaheadCurrIndex, favoritesGroup);
      } else if (onFavorite) {
        tempExtendedChildren = favoritesGroup.concat(children);
      }
      // mark items that are favorited with isFavorite
      renderableItems = extendItemsWithFavorite(tempExtendedChildren, isGrouped, favorites);
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
      selectedChips = chipGroupComponent ? (
        chipGroupComponent
      ) : (
        <ChipGroup {...chipGroupProps}>
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
                } else if (event.key === KeyTypes.Tab && variant === SelectVariant.checkbox) {
                  // More modal-like experience for checkboxes
                  // Let SelectOption handle this
                  if (event.shiftKey) {
                    this.handleMenuKeys(0, 0, 'up');
                  } else {
                    this.handleMenuKeys(0, 0, 'down');
                  }
                  event.stopPropagation();
                  event.preventDefault();
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
            hasInlineFilter,
            openedOnEnter
          };
          variantChildren = filterWithChildren;
          break;
        case 'typeahead':
          variantProps = {
            selected: selections[0],
            openedOnEnter
          };
          variantChildren = onFavorite ? renderableItems : this.extendTypeaheadChildren(typeaheadCurrIndex);
          if (variantChildren.length === 0) {
            variantChildren.push(<SelectOption isDisabled key={0} value={noResultsFoundText} isNoResultsOption />);
          }
          break;
        case 'typeaheadmulti':
          variantProps = {
            selected: selections,
            openedOnEnter
          };
          variantChildren = onFavorite ? renderableItems : this.extendTypeaheadChildren(typeaheadCurrIndex);
          if (variantChildren.length === 0) {
            variantChildren.push(<SelectOption isDisabled key={0} value={noResultsFoundText} isNoResultsOption />);
          }
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
        {...getOUIAProps(Select.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe)}
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
          onClickTypeaheadToggleButton={this.onClickTypeaheadToggleButton}
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
                  autoComplete="off"
                  disabled={isDisabled}
                  ref={this.inputRef}
                />
              </div>
              {hasOnClear && (selections[0] || typeaheadInputValue) && clearBtn}
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
                  autoComplete="off"
                  disabled={isDisabled}
                  ref={this.inputRef}
                />
              </div>
              {hasOnClear && ((selections && selections.length > 0) || typeaheadInputValue) && clearBtn}
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
