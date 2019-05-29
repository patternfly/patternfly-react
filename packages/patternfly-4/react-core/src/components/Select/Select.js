import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/Select/select.css';
import badgeStyles from '@patternfly/patternfly/components/Badge/badge.css';
import formStyles from '@patternfly/patternfly/components/FormControl/form-control.css';
import buttonStyles from '@patternfly/patternfly/components/Button/button.css';
import { css } from '@patternfly/react-styles';
import { TimesCircleIcon } from '@patternfly/react-icons';
import { Chip, ChipGroup } from '../ChipGroup';
import SingleSelect from './SingleSelect';
import CheckboxSelect from './CheckboxSelect';
import SelectToggle from './SelectToggle';
import SelectOption from './SelectOption';
import { SelectContext, SelectVariant } from './selectConstants';
import { getNextIndex } from '../../helpers/util';

// seed for the aria-labelledby ID
let currentId = 0;

const propTypes = {
  /** Content rendered inside the Select */
  children: PropTypes.node,
  /** Classes applied to the root of the Select */
  className: PropTypes.string,
  /** Flag to indicate if select is expanded */
  isExpanded: PropTypes.bool,
  /** Flag to indicate if select options are grouped */
  isGrouped: PropTypes.bool,
  /** Title text of Select */
  placeholderText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Selected item */
  selections: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  /** Adds accessible text to Select */
  'aria-label': PropTypes.string,
  /** Id of label for the Select aria-labelledby */
  ariaLabelledBy: PropTypes.string,
  /** Label for input field of type ahead select variants */
  ariaLabelTypeAhead: PropTypes.string,
  /** Label for clear selection button of type ahead select variants */
  ariaLabelClear: PropTypes.string,
  /** Label for toggle of type ahead select variants */
  ariaLabelToggle: PropTypes.string,
  /** Label for remove chip button of multiple type ahead select variant */
  ariaLabelRemove: PropTypes.string,
  /** Callback for selection behavior */
  onSelect: PropTypes.func.isRequired,
  /** Callback for toggle button behavior */
  onToggle: PropTypes.func.isRequired,
  /** Callback for typeahead clear button */
  onClear: PropTypes.func,
  /** Variant of rendered Select */
  variant: PropTypes.oneOf(['single', 'checkbox', 'typeahead', 'typeaheadmulti']),
  /** Width of the select container as a number of px or string percentage */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Additional props are spread to the container <ul> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

const defaultProps = {
  children: null,
  className: '',
  isExpanded: false,
  isGrouped: false,
  'aria-label': null,
  ariaLabelledBy: null,
  ariaLabelTypeAhead: null,
  ariaLabelClear: 'Clear all',
  ariaLabelToggle: 'Options menu',
  ariaLabelRemove: 'Remove',
  selections: null,
  placeholderText: null,
  variant: SelectVariant.single,
  width: null,
  onClear: Function.prototype
};

class Select extends React.Component {
  parentRef = React.createRef();
  state = {
    openedOnEnter: false,
    typeaheadInputValue: null,
    typeaheadActiveChild: null,
    typeaheadFilteredChildren: this.props.children,
    typeaheadCurrIndex: -1
  };
  refCollection = [];

  onEnter = () => {
    this.setState({ openedOnEnter: true });
  };

  onClose = () => {
    this.setState({
      openedOnEnter: false,
      typeaheadInputValue: null,
      typeaheadActiveChild: null,
      typeaheadFilteredChildren: this.props.children,
      typeaheadCurrIndex: -1
    });
  };

  onChange = e => {
    let input;
    try {
      input = new RegExp(e.target.value, 'i');
    } catch (err) {
      input = new RegExp(e.target.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    }
    const typeaheadFilteredChildren =
      e.target.value !== ''
        ? React.Children.toArray(this.props.children).filter(child => child.props.value.search(input) === 0)
        : this.props.children;
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

  onClick = e => {
    e.stopPropagation();
  };

  clearSelection = e => {
    e.stopPropagation();
    this.setState({
      typeaheadInputValue: '',
      typeaheadActiveChild: null,
      typeaheadFilteredChildren: this.props.children,
      typeaheadCurrIndex: -1
    });
  };

  extendTypeaheadChildren(typeaheadActiveChild) {
    return this.state.typeaheadFilteredChildren.map(child =>
      React.cloneElement(child, {
        isFocused: typeaheadActiveChild && typeaheadActiveChild.innerText === child.props.value
      })
    );
  }

  sendRef = (ref, index) => {
    this.refCollection[index] = ref;
  };

  handleTypeaheadKeys = position => {
    const { isExpanded, onSelect } = this.props;
    const { typeaheadActiveChild, typeaheadCurrIndex } = this.state;
    if (isExpanded) {
      if (position === 'enter' && (typeaheadActiveChild || this.refCollection[0])) {
        this.setState({
          typeaheadInputValue:
            (typeaheadActiveChild && typeaheadActiveChild.innerText) || this.refCollection[0].innerText
        });
        onSelect &&
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

  render() {
    const {
      children,
      className,
      variant,
      onToggle,
      onSelect,
      onClear,
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
    const selectToggleId = `pf-toggle-id-${currentId++}`;
    let childPlaceholderText = null;
    if (!selections && !placeholderText) {
      const childPlaceholder = React.Children.toArray(children).filter(child => child.props.isPlaceholder === true);
      childPlaceholderText =
        (childPlaceholder[0] && childPlaceholder[0].props.value) || (children[0] && children[0].props.value);
    }
    let selectedChips = null;
    if (variant === SelectVariant.typeaheadMulti) {
      selectedChips = (
        <ChipGroup>
          {selections &&
            selections.map(item => (
              <Chip key={item} onClick={e => onSelect(e, item)} closeBtnAriaLabel={ariaLabelRemove}>
                {item}
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
        <SelectContext.Provider value={{ onSelect, onClose: this.onClose }}>
          <SelectToggle
            id={selectToggleId}
            parentRef={this.parentRef.current}
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
                  {selections || placeholderText || childPlaceholderText}
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
                    id="select-single-typeahead-typeahead"
                    aria-label={ariaLabelTypeAhead}
                    placeholder={placeholderText}
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
                      onClear && onClear(e);
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
                    aria-activedescendant={typeaheadActiveChild}
                    id="select-multi-typeahead-typeahead"
                    aria-label={ariaLabelTypeAhead}
                    placeholder={placeholderText}
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
                      onClear && onClear(e);
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
            <SingleSelect
              {...props}
              selected={selections}
              openedOnEnter={openedOnEnter}
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledBy}
            >
              {children}
            </SingleSelect>
          )}
          {variant === SelectVariant.checkbox && isExpanded && (
            <CheckboxSelect
              {...props}
              checked={selections}
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledBy}
              isGrouped={isGrouped}
            >
              {children}
            </CheckboxSelect>
          )}
          {(variant === SelectVariant.typeahead || variant === SelectVariant.typeaheadMulti) && isExpanded && (
            <SingleSelect
              {...props}
              selected={selections}
              openedOnEnter={openedOnEnter}
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledBy}
              sendRef={this.sendRef}
            >
              {this.extendTypeaheadChildren(typeaheadActiveChild)}
            </SingleSelect>
          )}
        </SelectContext.Provider>
      </div>
    );
  }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
