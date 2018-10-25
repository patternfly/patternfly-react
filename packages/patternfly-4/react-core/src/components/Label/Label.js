import React from 'react';
import styles from '@patternfly/patternfly-next/components/Label/styles.css';
import PropTypes from 'prop-types';
import { css, getModifier } from '@patternfly/react-styles';

export const LabelVariant = {
  compact: 'compact'
};

const propTypes = {
  /** Content rendered inside the label. */
  children: PropTypes.node,
  /** Additional classes added to the label. */
  className: PropTypes.string,
  /** Adds label variant styles */
  variant: PropTypes.oneOf(Object.values(LabelVariant))
};

const defaultProps = {
  children: '',
  className: '',
  variant: null
};

const Label = ({ className, children, variant, ...props }) => (
  <span {...props} className={css(styles.label, variant && getModifier(styles.modifiers, variant), className)}>
    {children}
  </span>
);

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
