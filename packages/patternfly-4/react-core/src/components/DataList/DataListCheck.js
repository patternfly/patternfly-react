import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

const DataListCheck = ({ className, onChange, isValid, isDisabled, isChecked, checked, ...props }) => (
  <div className={css(styles.dataListItemControl, className)}>
    <div className={css('pf-c-data-list__check')}>
      <input
        {...props}
        type="checkbox"
        onChange={event => onChange(event.currentTarget.checked, event)}
        aria-invalid={!isValid}
        disabled={isDisabled}
        checked={isChecked || checked}
      />
    </div>
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
  /** Alternate Flag to show if the DataList checkbox is checked */
  checked: PropTypes.bool,
  /** A callback for when the DataList checkbox selection changes */
  onChange: PropTypes.func,
  /** Aria-labelledby of the DataList checkbox */
  'aria-labelledby': PropTypes.string.isRequired,
  /** Additional props are spread to the <input> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

DataListCheck.defaultProps = {
  className: '',
  isValid: true,
  isDisabled: false,
  isChecked: null,
  checked: null,
  onChange: () => undefined
};

export default DataListCheck;
