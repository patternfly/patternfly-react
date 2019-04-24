import React from 'react';
import styles from '@patternfly/patternfly/components/Select/select.css';
import badgeStyles from '@patternfly/patternfly/components/Badge/badge.css';
import formStyles from '@patternfly/patternfly/components/FormControl/form-control.css';
import buttonStyles from '@patternfly/patternfly/components/Button/button.css';
import { css } from '@patternfly/react-styles';
import { TimesCircleIcon } from '@patternfly/react-icons';
import PropTypes from 'prop-types';
import SingleSelect from './SingleSelect';
import CheckboxSelect from './CheckboxSelect';
import SelectToggle from './SelectToggle';
import { SelectContext, SelectVariant } from './selectConstants';

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
  /** Callback for selection behavior */
  onSelect: PropTypes.func.isRequired,
  /** Callback for toggle button behavior */
  onToggle: PropTypes.func.isRequired,
  /** Callback for typeahead clear button */
  onClear: PropTypes.func,
  /** Variant of rendered Select */
  variant: PropTypes.oneOf(['single', 'checkbox', 'typeahead']),
  /** Width of the select container as a number of px or string percentage */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Additional props are spread to the container <ul> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  isExpanded: false,
  isGrouped: false,
  'aria-label': null,
  ariaLabelledBy: null,
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
    typeaheadValue: null,
    filteredChildren: this.props.children
  };

  onEnter = () => {
    this.setState({ openedOnEnter: true });
  };

  onClose = () => {
    this.setState({
      openedOnEnter: false,
      typeaheadValue: null,
      filteredChildren: this.props.children
    });
  };

  onChange = e => {
    const input = new RegExp(e.target.value, 'i');
    this.setState({
      typeaheadValue: e.target.value,
      filteredChildren:
        e.target.value !== ''
          ? this.props.children.filter(child => child.props.value.search(input) === 0)
          : this.props.children
    });
  };

  onClick = e => {
    e.stopPropagation();
  };

  clearSelection = e => {
    e.stopPropagation();
    this.setState({
      typeaheadValue: '',
      filteredChildren: this.props.children
    });
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
      'aria-label': ariaLabel,
      placeholderText,
      width,
      ...props
    } = this.props;
    const { openedOnEnter, typeaheadValue, filteredChildren } = this.state;
    const selectToggleId = `pf-toggle-id-${currentId++}`;
    let childPlaceholderText = null;
    if (!selections && !placeholderText) {
      const childPlaceholder = children.filter(child => child.props.isPlaceholder === true);
      childPlaceholderText =
        (childPlaceholder[0] && childPlaceholder[0].props.value) || (children[0] && children[0].props.value);
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
            aria-labelledby={`${ariaLabelledBy} ${selectToggleId}`}
            variant={variant}
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
                    id="select-single-typeahead-typeahead"
                    aria-label="Type to filter"
                    placeholder={placeholderText}
                    value={typeaheadValue !== null ? typeaheadValue : selections || ''}
                    type="text"
                    onChange={this.onChange}
                  />
                </div>
                {selections && (
                  <button
                    className={css(buttonStyles.button, buttonStyles.modifiers.plain, styles.selectToggleClear)}
                    onClick={e => {
                      this.clearSelection(e);
                      onClear && onClear(e);
                    }}
                    aria-label="Clear all"
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
          {variant === SelectVariant.typeahead && isExpanded && (
            <SingleSelect
              {...props}
              selected={selections}
              openedOnEnter={openedOnEnter}
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledBy}
            >
              {filteredChildren}
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
