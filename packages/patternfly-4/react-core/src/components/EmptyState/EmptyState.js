import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/EmptyState/empty-state.css';

export const EmptyStateVariant = {
  large: 'large',
  small: 'small',
  full: 'full',
};

const maxWidthModifiers = {
  large: styles.modifiers.lg,
  small: styles.modifiers.sm,
  full: null,
}

const EmptyState = ({ children, className, variant, ...props }) => {
  const maxWidthModifier = variant && maxWidthModifiers[variant];
  return (
    <div className={css(styles.emptyState, maxWidthModifier && maxWidthModifier, className)} {...props}>
      {children}
    </div>
  );
};

EmptyState.propTypes = {
  /** Additional classes added to the EmptyState */
  className: PropTypes.string,
  /** Content rendered inside the EmptyState */
  children: PropTypes.node.isRequired,
  /** Modifies EmptyState max-width */
  variant: PropTypes.oneOf(Object.keys(EmptyStateVariant)),
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

EmptyState.defaultProps = {
  className: '',
  variant: EmptyStateVariant.large,
};

export default EmptyState;
