import React from 'react';
import styles from '@patternfly/patternfly-next/components/Select/select.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import SingleSelect from './SingleSelect';
import SelectToggle from './SelectToggle';
import { SelectContext } from './selectConstants';

// seed for the aria-labelledby ID
let currentId = 0;

const propTypes = {
  /** Content rendered inside the Select */
  children: PropTypes.node,
  /** Classes applied to the root of the Select */
  className: PropTypes.string,
  /** Flag to indicate if select is expanded */
  isExpanded: PropTypes.bool,
  /** Placeholder text of Select */
  placeholderText: PropTypes.string,
  /** Array of SelectOption nodes that will be rendered */
  selectOptions: PropTypes.array,
  /** Selected item(s) structure */
  selections: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** Callback for selection behavior */
  onSelect: PropTypes.func.isRequired,
  /** Callback for toggle button behavior */
  onToggle: PropTypes.func.isRequired,
  /** Variant of rendered Select */
  variant: PropTypes.oneOf(['single']),
  /** Additional props are spread to the container <ul> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  isExpanded: false,
  selectOptions: null,
  selections: null,
  placeholderText: 'Please choose one',
  variant: 'single'
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
      selectOptions,
      selections,
      placeholderText,
      ...props
    } = this.props;
    const { openedOnEnter } = this.state;
    return (
      <div className={css(styles.select, isExpanded && styles.modifiers.expanded, className)} ref={this.parentRef}>
        <SelectContext.Provider value={onSelect}>
          {variant === 'single' && (
            <React.Fragment>
              <SelectToggle
                id={`pf-toggle-id-${currentId++}`}
                parentRef={this.parentRef.current}
                isExpanded={isExpanded}
                onToggle={onToggle}
                onEnter={this.onEnter}
                onClose={this.onClose}
              >
                {selections || placeholderText}
              </SelectToggle>
              {isExpanded && (
                <SingleSelect {...props} selected={selections} openedOnEnter={openedOnEnter}>
                  {children || selectOptions}
                </SingleSelect>
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
