import React from 'react';
import styles from '@patternfly/patternfly/components/Select/select.css';
import * as badgeStyles from '@patternfly/patternfly/components/Badge/badge.css';
import { css } from '@patternfly/react-styles';
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
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Selected item */
  selections: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  /** Id of label for the Select aria-labelledby */
  ariaLabelledBy: PropTypes.string,
  /** Callback for selection behavior */
  onSelect: PropTypes.func.isRequired,
  /** Callback for toggle button behavior */
  onToggle: PropTypes.func.isRequired,
  /** Variant of rendered Select */
  variant: PropTypes.oneOf(['single', 'checkbox']),
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
  ariaLabelledBy: '',
  selections: null,
  title: null,
  variant: SelectVariant.single,
  width: '100%'
};

class Select extends React.Component {
  parentRef = React.createRef();
  state = { openedOnEnter: false };

  onEnter = () => {
    this.setState({ openedOnEnter: true });
  };

  onClose = () => {
    this.setState({ openedOnEnter: false });
  };

  render() {
    const {
      children,
      className,
      variant,
      onToggle,
      onSelect,
      isExpanded,
      isGrouped,
      selections,
      ariaLabelledBy,
      title,
      width,
      ...props
    } = this.props;
    const { openedOnEnter } = this.state;
    const selectToggleId = `pf-toggle-id-${currentId++}`;
    let childPlaceholderText = null;
    if (!selections && !title) {
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
          {variant === 'single' && (
            <React.Fragment>
              <SelectToggle
                id={selectToggleId}
                parentRef={this.parentRef.current}
                isExpanded={isExpanded}
                onToggle={onToggle}
                onEnter={this.onEnter}
                onClose={this.onClose}
                aria-labelledby={`${ariaLabelledBy} ${selectToggleId}`}
                style={{ width }}
              >
                <div className={css(styles.selectToggleWrapper)}>
                  <span className={css(styles.selectToggleText)}>{selections || title || childPlaceholderText}</span>
                </div>
              </SelectToggle>
              {isExpanded && (
                <SingleSelect
                  {...props}
                  selected={selections}
                  openedOnEnter={openedOnEnter}
                  aria-labelledby={ariaLabelledBy}
                >
                  {children}
                </SingleSelect>
              )}
            </React.Fragment>
          )}
          {variant === 'checkbox' && (
            <React.Fragment>
              <SelectToggle
                id={selectToggleId}
                parentRef={this.parentRef.current}
                isExpanded={isExpanded}
                onToggle={onToggle}
                onEnter={this.onEnter}
                onClose={this.onClose}
                aria-labelledby={`${ariaLabelledBy} ${selectToggleId}`}
                style={{ width }}
              >
                <React.Fragment>
                  <div className={css(styles.selectToggleWrapper)}>
                    <span className={css(styles.selectToggleText)}>{title}</span>
                  </div>
                  {selections &&
                    selections.length > 0 && (
                      <div className={css(styles.selectToggleBadge)}>
                        <span className={css(badgeStyles.badge, badgeStyles.modifiers.read)}>{selections.length}</span>
                      </div>
                    )}
                </React.Fragment>
              </SelectToggle>
              {isExpanded && (
                <CheckboxSelect
                  {...props}
                  checked={selections}
                  openedOnEnter={openedOnEnter}
                  aria-labelledby={ariaLabelledBy}
                  isGrouped={isGrouped}
                >
                  {children}
                </CheckboxSelect>
              )}
            </React.Fragment>
          )}
        </SelectContext.Provider>
      </div>
    );
  }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
