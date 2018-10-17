import React from 'react';
import styles from '@patternfly/patternfly-next/components/Form/form.css';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { FormContext } from './FormContext';

const propTypes = {
  /** Anything that can be rendered as Form content. */
  children: PropTypes.node,
  /** Additional classes added to the Form. */
  className: PropTypes.string,
  /** Sets the Form to horizontal. */
  isHorizontal: PropTypes.bool
};

const defaultProps = {
  children: null,
  className: '',
  isHorizontal: false
};

const Form = ({ className, children, isHorizontal, ...props }) => (
  <form {...props} className={css(styles.form, isHorizontal && styles.modifiers.horizontal, className)}>
    <FormContext.Provider value={{ isHorizontal }}>{children}</FormContext.Provider>
  </form>
);

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
