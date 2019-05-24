import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { css } from '@patternfly/react-styles';

const propTypes = {
  /** Checkboxes within group */
  children: PropTypes.node,
  /** Additional classes added to the DropdownGroup control */
  className: PropTypes.string,
  /** Group label */
  label: PropTypes.string,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
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
