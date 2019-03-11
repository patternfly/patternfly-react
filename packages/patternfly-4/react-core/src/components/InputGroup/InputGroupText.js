import React from 'react';
import styles from '@patternfly/patternfly/components/InputGroup/input-group.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { componentShape } from '../../helpers/componentShape';

const InputGroupText = ({ component: Component, className, children, ...props }) => (
  <Component className={css(styles.inputGroupText, className)} {...props}>
    {children}
  </Component>
);

InputGroupText.propTypes = {
  /** Additional classes added to the input group text. */
  className: PropTypes.string,
  /** Content rendered inside the input group text. */
  children: PropTypes.node.isRequired,
  /** Component that wraps the input group text. */
  component: componentShape
};

InputGroupText.defaultProps = {
  className: '',
  component: 'span'
};

export default InputGroupText;
