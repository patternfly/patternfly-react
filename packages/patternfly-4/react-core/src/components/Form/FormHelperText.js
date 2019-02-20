import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Form/form.css';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  /** Content rendered inside the Helper Text Item */
  children: PropTypes.node,
  /** Adds error styling to the Helper Text  * */
  isError: PropTypes.bool,
  /** Hides the helper text * */
  isHidden: PropTypes.bool,
  /** Additional classes added to the Helper Text  Item  */
  className: PropTypes.string,
  /** Additional props are spread to the container <p> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  isError: false,
  isHidden: true,
  className: ''
};

const FormHelperText = ({ className, isError, isHidden, children, ...props }) => (
  <p
    className={css(
      styles.formHelperText,
      getModifier(styles, isError && 'error'),
      getModifier(styles, isHidden && 'hidden'),
      className
    )}
    {...props}
  >
    {children}
  </p>
);

FormHelperText.propTypes = propTypes;
FormHelperText.defaultProps = defaultProps;

export default FormHelperText;
