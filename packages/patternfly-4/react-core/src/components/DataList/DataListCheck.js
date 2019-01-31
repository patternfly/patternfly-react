import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/DataList/data-list.css';
import checkboxStyles from '@patternfly/patternfly-next/components/Check/check.css';

const DataListCheck = ({ className, onChange, isValid, isDisabled, isChecked, checked, ...props }) => (
  <div className={css(styles.dataListCheck, className)}>
    <input
      {...props}
      className={css(checkboxStyles.checkInput)}
      type="checkbox"
      onChange={event => onChange(event.currentTarget.checked, event)}
      aria-invalid={!isValid}
      disabled={isDisabled}
      checked={isChecked || checked}
    />
  </div>
);

DataListCheck.propTypes = {
  /** Additional classes added to the DataList item checkbox */
  className: PropTypes.string,
  /** Flag to show if the DataList checkbox selection is valid or invalid */
  isValid: PropTypes.bool,
  /** Flag to show if the DataList checkbox is disabled */
  isDisabled: PropTypes.bool,
  /** Flag to show if the DataList checkbox is checked */
  isChecked: PropTypes.bool,
  /** A callback for when the DataList checkbox selection changes */
  onChange: PropTypes.func,
  /** Aria-labelledby of the DataList checkbox */
  'aria-labelledby': PropTypes.string.isRequired,
  /** Additional props are spread to the <input> */
  '': PropTypes.any
};

DataListCheck.defaultProps = {
  className: '',
  isValid: true,
  isDisabled: false,
  isChecked: null,
  onChange: () => undefined
};

export default DataListCheck;
