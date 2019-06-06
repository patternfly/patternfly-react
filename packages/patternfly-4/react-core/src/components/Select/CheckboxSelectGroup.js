import React from 'react';
import styles from '@patternfly/react-styles/css/components/Select/select';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Checkboxes within group */
  children: PropTypes.node,
  /** Additional classes added to the CheckboxSelectGroup control */
  className: PropTypes.string,
  /** Group label */
  label: PropTypes.string,
  /** ID on the title container */
  titleId: PropTypes.any,
  /** Additional props are spread to the container <select> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

const defaultProps = {
  children: null,
  className: '',
  label: '',
  titleId: ''
};

const CheckboxSelectGroup = ({ children, className, label, titleId, ...props }) => (
  <React.Fragment>
    <div {...props} className={css(styles.selectMenuGroup, className)}>
      <div className={css(styles.selectMenuGroupTitle)} id={titleId || ''} aria-hidden>
        {label}
      </div>
      {children}
    </div>
  </React.Fragment>
);

CheckboxSelectGroup.propTypes = propTypes;
CheckboxSelectGroup.defaultProps = defaultProps;

export default CheckboxSelectGroup;
