import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Select/select';
import badgeStyles from '@patternfly/react-styles/css/components/Badge/badge';
import formStyles from '@patternfly/react-styles/css/components/FormControl/form-control';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { css } from '@patternfly/react-styles';
import { TimesCircleIcon } from '@patternfly/react-icons';
import { SelectMenu } from './SelectMenu';
import { SelectOption } from './SelectOption';
import { SelectToggle } from './SelectToggle';
import { SelectContext, SelectVariant } from './selectConstants';
import { Chip, ChipGroup } from '../ChipGroup';
import { keyHandler, getNextIndex } from '../../helpers/util';
import { Omit } from '../../helpers/typeUtils';

// seed for the aria-labelledby ID
let currentId = 0;

export interface SelectProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'onSelect' | 'ref' | 'checked' | 'selected'> {
  /** Content rendered inside the Select */
  children: React.ReactElement[];
  /** Classes applied to the root of the Select */
  className?: string;
  /** Flag to indicate if select is expanded */
  isExpanded?: boolean;
  /** Flag to indicate if select options are grouped */
  isGrouped?: boolean;
  /** Title text of Select */
  placeholderText?: string | React.ReactNode;
  /** Selected item */
  selections?: string[] | string;
  /** Id for select toggle element */
  toggleId?: string;
  /** Adds accessible text to Select */
  'aria-label'?: string;
  /** Id of label for the Select aria-labelledby */
  ariaLabelledBy?: string;
  /** Label for input field of type ahead select variants */
  ariaLabelTypeAhead?: string;
  /** Label for clear selection button of type ahead select variants */
  ariaLabelClear?: string;
  /** Label for toggle of type ahead select variants */
  ariaLabelToggle?: string;
  /** Label for remove chip button of multiple type ahead select variant */
  ariaLabelRemove?: string;
  /** Callback for selection behavior */
  onSelect?: (event: React.MouseEvent | React.ChangeEvent, value: string, isPlaceholder?: boolean) => void;
  /** Callback for toggle button behavior */
  onToggle: (isExpanded: boolean) => void;
  /** Callback for typeahead clear button */
  onClear?: (event: React.MouseEvent) => void;
  /** Variant of rendered Select */
  variant?: 'single' | 'checkbox' | 'typeahead' | 'typeaheadmulti';
  /** Width of the select container as a number of px or string percentage */
  width?: string | number;
}

export interface SelectState {
  openedOnEnter: boolean;
  typeaheadInputValue: string;
  typeaheadActiveChild?: HTMLElement;
  typeaheadFilteredChildren: React.ReactNode[];
  typeaheadCurrIndex: number;
}

export class Select extends React.Component<SelectProps, SelectState> {
  private parentRef = React.createRef<HTMLDivElement>();
  private refCollection: HTMLElement[] = [];

  static defaultProps = {
    children: [] as React.ReactElement[],
    className: '',
    toggleId: null as string,
    isExpanded: false,
    isGrouped: false,
    'aria-label': '',
    ariaLabelledBy: '',
    ariaLabelTypeAhead: '',
    ariaLabelClear: 'Clear all',
    ariaLabelToggle: 'Options menu',
    ariaLabelRemove: 'Remove',
    selections: '',
    placeholderText: '',
    variant: SelectVariant.single,
    width: '',
    onClear: Function.prototype
  };

  state = {
    openedOnEnter: false,
    typeaheadInputValue: '',
    typeaheadActiveChild: null as HTMLElement,
    typeaheadFilteredChildren: React.Children.toArray(this.props.children),
    typeaheadCurrIndex: -1
  };

  componentDidUpdate = (prevProps: SelectProps, prevState: SelectState) => {
    if (!prevState.openedOnEnter && this.state.openedOnEnter) {
      this.refCollection[0].focus();
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
    let input: RegExp;
    try {
      input = new RegExp(e.target.value, 'i');
    } catch (err) {
      input = new RegExp(e.target.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    }
    const typeaheadFilteredChildren =
      e.target.value !== ''
        ? React.Children.toArray(this.props.children).filter(
            (child: React.ReactNode) => (child as React.ReactElement).props.value.search(input) === 0
          )
        : React.Children.toArray(this.props.children);
    if (typeaheadFilteredChildren.length === 0) {
      typeaheadFilteredChildren.push(<SelectOption isDisabled key={0} value="No results found" />);
    }
    this.setState({
      typeaheadInputValue: e.target.value,
      typeaheadCurrIndex: -1,
      typeaheadFilteredChildren,
      typeaheadActiveChild: null
    });
    this.refCollection = [];
  };

  onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    this.setState({
      typeaheadInputValue: '',
      typeaheadActiveChild: null,
      typeaheadFilteredChildren: React.Children.toArray(this.props.children),
      typeaheadCurrIndex: -1
    });
  };

  extendTypeaheadChildren(typeaheadActiveChild: HTMLElement) {
    return this.state.typeaheadFilteredChildren.map((child: React.ReactNode) =>
      React.cloneElement(child as React.ReactElement, {
        isFocused: typeaheadActiveChild && typeaheadActiveChild.innerText === (child as React.ReactElement).props.value
      })
    );
  }

  sendRef = (ref: React.ReactNode, index: number) => {
    this.refCollection[index] = ref as HTMLElement;
  };

  handleArrowKeys = (index: number, position: string) => {
    keyHandler(index, position, this.refCollection, this.refCollection);
  };

  handleTypeaheadKeys = (position: string) => {
    const { isExpanded, onSelect } = this.props;
    const { typeaheadActiveChild, typeaheadCurrIndex } = this.state;
    if (isExpanded) {
      if (position === 'enter' && (typeaheadActiveChild || this.refCollection[0])) {
        this.setState({
          typeaheadInputValue:
            (typeaheadActiveChild && typeaheadActiveChild.innerText) || this.refCollection[0].innerText
        });
        onSelect(null, (typeaheadActiveChild && typeaheadActiveChild.innerText) || this.refCollection[0].innerText);
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
          typeaheadInputValue: this.refCollection[nextIndex].innerText
        });
      }
    }
  };

  getDisplayText = (value: string) => {
    if (!value) {
      return;
    }
    const { children } = this.props;
    const item = children.filter(child => child.props.value === value)[0];

    if (item && item.props.children) {
      return item.props.children;
    }
    return item.props.value;
  };

  render() {
    const {
      children,
      className,
      variant,
      onToggle,
      onSelect,
      onClear,
      toggleId,
      isExpanded,
      isGrouped,
      selections,
      ariaLabelledBy,
      ariaLabelTypeAhead,
      ariaLabelClear,
      ariaLabelToggle,
      ariaLabelRemove,
      'aria-label': ariaLabel,
      placeholderText,
      width,
      ...props
    } = this.props;
    const { openedOnEnter, typeaheadInputValue, typeaheadActiveChild } = this.state;
    const selectToggleId = toggleId || `pf-toggle-id-${currentId++}`;
    let childPlaceholderText = null;
    if (!selections && !placeholderText) {
      const childPlaceholder = React.Children.toArray(children.filter(child => child.props.isPlaceholder === true));
      childPlaceholderText =
        (childPlaceholder[0] && childPlaceholder[0].props.value) || (children[0] && children[0].props.value);
    }
    let selectedChips = null;
    if (variant === SelectVariant.typeaheadMulti) {
      selectedChips = (
        <ChipGroup>
          {selections &&
            (selections as string[]).map(item => (
              <Chip key={item} onClick={e => onSelect(e, item)} closeBtnAriaLabel={ariaLabelRemove}>
                {this.getDisplayText(item)}
              </Chip>
            ))}
        </ChipGroup>
      );
    }

    return (
      <div
        className={css(styles.select, isExpanded && styles.modifiers.expanded, className)}
        ref={this.parentRef}
        style={{ width }}
      >
        <SelectContext.Provider value={{ onSelect, onClose: this.onClose, variant }}>
          <SelectToggle
            id={selectToggleId}
            parentRef={this.parentRef}
            isExpanded={isExpanded}
            onToggle={onToggle}
            onEnter={this.onEnter}
            onClose={this.onClose}
            ariaLabelledBy={`${ariaLabelledBy || ''} ${selectToggleId}`}
            variant={variant}
            ariaLabelToggle={ariaLabelToggle}
            handleTypeaheadKeys={this.handleTypeaheadKeys}
          >
            {variant === SelectVariant.single && (
              <div className={css(styles.selectToggleWrapper)}>
                <span className={css(styles.selectToggleText)}>
                  {this.getDisplayText(selections as string) || placeholderText || childPlaceholderText}
                </span>
              </div>
            )}
            {variant === SelectVariant.checkbox && (
              <React.Fragment>
                <div className={css(styles.selectToggleWrapper)}>
                  <span className={css(styles.selectToggleText)}>{placeholderText}</span>
                  {selections && selections.length > 0 && (
                    <div className={css(styles.selectToggleBadge)}>
                      <span className={css(badgeStyles.badge, badgeStyles.modifiers.read)}>{selections.length}</span>
                    </div>
                  )}
                </div>
              </React.Fragment>
            )}
            {variant === SelectVariant.typeahead && (
              <React.Fragment>
                <div className={css(styles.selectToggleWrapper)}>
                  <input
                    className={css(formStyles.formControl, styles.selectToggleTypeahead)}
                    aria-activedescendant={typeaheadActiveChild && typeaheadActiveChild.id}
                    id="select-typeahead"
                    aria-label={ariaLabelTypeAhead}
                    placeholder={placeholderText as string}
                    value={typeaheadInputValue !== null ? typeaheadInputValue : selections || ''}
                    type="text"
                    onChange={this.onChange}
                    autoComplete="off"
                  />
                </div>
                {selections && (
                  <button
                    className={css(buttonStyles.button, buttonStyles.modifiers.plain, styles.selectToggleClear)}
                    onClick={e => {
                      this.clearSelection(e);
                      onClear(e);
                    }}
                    aria-label={ariaLabelClear}
                  >
                    <TimesCircleIcon aria-hidden />
                  </button>
                )}
              </React.Fragment>
            )}
            {variant === SelectVariant.typeaheadMulti && (
              <React.Fragment>
                <div className={css(styles.selectToggleWrapper)}>
                  {selections && selections.length > 0 && selectedChips}
                  <input
                    className={css(formStyles.formControl, styles.selectToggleTypeahead)}
                    aria-activedescendant={typeaheadActiveChild && typeaheadActiveChild.id}
                    id="select-multi-typeahead-typeahead"
                    aria-label={ariaLabelTypeAhead}
                    placeholder={placeholderText as string}
                    value={typeaheadInputValue !== null ? typeaheadInputValue : ''}
                    type="text"
                    onChange={this.onChange}
                    autoComplete="off"
                  />
                </div>
                {selections && selections.length > 0 && (
                  <button
                    className={css(buttonStyles.button, buttonStyles.modifiers.plain, styles.selectToggleClear)}
                    onClick={e => {
                      this.clearSelection(e);
                      onClear(e);
                    }}
                    aria-label={ariaLabelClear}
                  >
                    <TimesCircleIcon aria-hidden />
                  </button>
                )}
              </React.Fragment>
            )}
          </SelectToggle>
          {variant === SelectVariant.single && isExpanded && (
            <SelectMenu
              {...props}
              selected={selections}
              openedOnEnter={openedOnEnter}
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledBy}
              sendRef={this.sendRef}
              keyHandler={this.handleArrowKeys}
            >
              {children}
            </SelectMenu>
          )}
          {variant === SelectVariant.checkbox && isExpanded && (
            <SelectMenu
              {...props}
              checked={selections as string[]}
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledBy}
              isGrouped={isGrouped}
              sendRef={this.sendRef}
              keyHandler={this.handleArrowKeys}
            >
              {children}
            </SelectMenu>
          )}
          {(variant === SelectVariant.typeahead || variant === SelectVariant.typeaheadMulti) && isExpanded && (
            <SelectMenu
              {...props}
              selected={selections}
              openedOnEnter={openedOnEnter}
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledBy}
              sendRef={this.sendRef}
              keyHandler={this.handleArrowKeys}
            >
              {this.extendTypeaheadChildren(typeaheadActiveChild)}
            </SelectMenu>
          )}
        </SelectContext.Provider>
      </div>
    );
  }
}
