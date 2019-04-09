import React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/Alert/alert.css';
import accessibleStyles from '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
import AlertIcon from './AlertIcon';
import { capitalize } from '../../helpers/util';

export const AlertVariant = {
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info'
};

const propTypes = {
  /** Adds Alert variant styles */
  variant: PropTypes.oneOf(Object.values(AlertVariant)).isRequired,
  /** Title of the Alert */
  title: PropTypes.string.isRequired,
  /** Action button to put in the Alert.  Should be <AlertActionLink> or <AlertActionCloseButton> */
  action: PropTypes.node,
  /** content rendered inside the Alert */
  children: PropTypes.node,
  /** additional classes added to the Alert */
  className: PropTypes.string,
  /** Adds accessible text to the Alert */
  'aria-label': PropTypes.string,
  /** Variant label text for screen readers */
  variantLabel: PropTypes.string,
  /** Additional props are spread to the container <div>  */
  '': PropTypes.any
};

const defaultProps = {
  'aria-label': undefined,
  action: null,
  children: '',
  className: '',
  variantLabel: null
};

const getDefaultAriaLabel = variant => `${capitalize(AlertVariant[variant])} Alert`;

const Alert = ({
  variant,
  variantLabel,
  'aria-label': ariaLabel = getDefaultAriaLabel(variant),
  action,
  title,
  children,
  className,
  ...props
}) => {
  variantLabel = variantLabel || capitalize(AlertVariant[variant]);
  const readerTitle = (
    <React.Fragment>
      <span className={css(accessibleStyles.screenReader)}>{`${variantLabel} alert:`}</span>
      {title}
    </React.Fragment>
  );

  const customClassName = css(styles.alert, getModifier(styles, variant, styles.modifiers.info), className);

  return (
    <div {...props} className={customClassName} aria-label={ariaLabel}>
      <AlertIcon variant={variant} />
      <h4 className={css(styles.alertTitle)}>{readerTitle}</h4>
      {children && (
        <div className={css(styles.alertDescription)}>
          <p>{children}</p>
        </div>
      )}
      {action && (
        <div className={css(styles.alertAction, className)}>
          {React.cloneElement(action, { title, variantLabel })}
        </div>
      )}
    </div>
  );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
