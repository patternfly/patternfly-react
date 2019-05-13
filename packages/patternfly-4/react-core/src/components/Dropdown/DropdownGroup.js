import React from 'react';
import styles from '@patternfly/patternfly/components/Dropdown/dropdown.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Checkboxes within group */
  children: PropTypes.node,
  /** Additional classes added to the DropdownGroup control */
  className: PropTypes.string,
  /** Group label */
  label: PropTypes.string,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  label: ''
};

const DropdownGroup = ({ children, className, label, ...props }) => (
  <React.Fragment>
    <section {...props} className={css(styles.dropdownGroup, className)}>
      {label && (
        <h1 className={css(styles.dropdownGroupTitle)} aria-hidden>
          {label}
        </h1>
      )}
      <ul>{children}</ul>
    </section>
  </React.Fragment>
);

DropdownGroup.propTypes = propTypes;
DropdownGroup.defaultProps = defaultProps;

export default DropdownGroup;
